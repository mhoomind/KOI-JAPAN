import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CustomerModule } from './customer/customer.module';
import { PrismaService } from './prisma.service';
import { ShipmentModule } from './shipment/shipment.module';
import { StaffModule } from './staff/staff.module';

@Module({
  imports: [AuthModule, CustomerModule, ShipmentModule, StaffModule],
  providers: [PrismaService],
})
export class AppModule {}
