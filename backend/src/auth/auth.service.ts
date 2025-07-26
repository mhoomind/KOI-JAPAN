import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import * as bcrypt from "bcryptjs";
import { JwtService } from "@nestjs/jwt";
import { RegisterDto } from "./dto/register.dto";

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}

  async register(dto: RegisterDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (existingUser) {
      throw new ForbiddenException("Email already exists");
    }

    const hash = await bcrypt.hash(dto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        password: hash,
        fullName: dto.fullName,
        phone: dto.phone,
        address: dto.address,
        role: dto.role,
        customer:
          dto.role === "CUSTOMER"
            ? {
                create: {
                  email: dto.email,
                  fullName: dto.fullName,
                  phone: dto.phone,
                  address: dto.address,
                  status: "ACTIVE",
                },
              }
            : undefined,
      },
      include: {
        customer: true,
      },
    });
    
    return this.signToken(user.id, user.email, user.role);
  }

  async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException("Invalid email or password");
    }

    return user;
  }

  async login(user: any) {
    const token = await this.signToken(user.id, user.email, user.role);

    const customer = await this.prisma.customer.findUnique({
      where: { email: user.email },
    });

    return {
      access_token: token.access_token,
      role: token.role,
      customerId: customer?.id ?? null,
    };
  }

  private async signToken(
    userId: string,
    email: string,
    role: string
  ): Promise<{ access_token: string; role: string }> {
    const payload = { sub: userId, email, role };
    const token = await this.jwt.signAsync(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: "1h",
    });

    return {
      access_token: token,
      role: role,
    };
  }
  
}
