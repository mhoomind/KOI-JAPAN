import {
  ForbiddenException,
  Injectable,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateCustomerDto) {
    return this.prisma.customer.create({
      data: {
        ...dto,
        status: dto.status ?? 'ACTIVE',
      },
    });
  }

  findAll() {
    return this.prisma.customer.findMany();
  }

  findOne(id: string) {
    return this.prisma.customer.findUnique({
      where: { id },
    });
  }

  update(id: string, dto: UpdateCustomerDto) {
    return this.prisma.customer.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string) {
    return this.prisma.customer.delete({
      where: { id },
    });
  }

  async updateStatus(id: string, status: string) {
    return this.prisma.customer.update({
      where: { id },
      data: { status },
    });
  }

  async createCustomerWithUser(dto: CreateCustomerDto) {
    if (!dto.password || typeof dto.password !== 'string') {
      throw new BadRequestException('Password is required and must be a string');
    }

    const existingUser = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (existingUser) {
      throw new ForbiddenException('Email already exists');
    }

    const hash = await bcrypt.hash(dto.password, 10);

    return this.prisma.user.create({
      data: {
        email: dto.email,
        password: hash,
        fullName: dto.fullName,
        phone: dto.phone,
        address: dto.address,
        role: 'CUSTOMER',
        customer: {
          create: {
            email: dto.email,
            fullName: dto.fullName,
            phone: dto.phone,
            address: dto.address,
            status: dto.status?.toUpperCase() || 'ACTIVE',
          },
        },
      },
      include: { customer: true },
    });
  }
}
