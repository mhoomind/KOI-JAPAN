import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Role } from '@prisma/client';

export class RegisterDto {
    @IsEmail()
    email!: string;
  
    @IsString()
    @IsNotEmpty()
    password!: string;
  
    @IsString()
    fullName!: string;
  
    @IsString()
    phone!: string;
  
    @IsString()
    address!: string;
  
    @IsEnum(Role)
    role!: Role;
  }
  