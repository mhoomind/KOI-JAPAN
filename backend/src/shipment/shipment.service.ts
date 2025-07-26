import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ShipmentStatus } from '@prisma/client'; // ✅ เพิ่มการ import enum

@Injectable()
export class ShipmentService {
  constructor(private prisma: PrismaService) {}

  async create(data: {
    trackingNo: string;
    status: ShipmentStatus; // ✅ เปลี่ยน type ของ status
    description?: string;
    customerId: string;
  }) {
    return this.prisma.shipment.create({ data });
  }

  async findAll() {
    return this.prisma.shipment.findMany({
      include: { customer: true },
    });
  }

  async findByCustomer(customerId: string) {
    return this.prisma.shipment.findMany({
      where: { customerId },
    });
  }

  async updateStatus(id: string, status: ShipmentStatus) { // ✅ เปลี่ยน type ของ status
    return this.prisma.shipment.update({
      where: { id },
      data: { status },
    });
  }

  async findByTrackingNo(customerId: string, trackingNo: string) {
    return this.prisma.shipment.findMany({
      where: {
        customerId,
        trackingNo: {
          contains: trackingNo,
          mode: 'insensitive',
        },
      },
    });
  }
  
}
