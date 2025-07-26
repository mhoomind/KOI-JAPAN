import { Controller, Get, Post, Body, Param, Patch, Query } from "@nestjs/common";
import { ShipmentService } from "./shipment.service";
import { ShipmentStatus } from "@prisma/client";

@Controller("shipments")
export class ShipmentController {
  constructor(private readonly shipmentService: ShipmentService) {}

  @Post()
  create(
    @Body()
    body: {
      trackingNo: string;
      status: string;
      description?: string;
      customerId: string;
    }
  ) {
    return this.shipmentService.create({
      ...body,
      status: body.status as ShipmentStatus,
    });
  }

  @Get()
  findAll() {
    return this.shipmentService.findAll();
  }

  @Get("customer/:customerId")
  findByCustomer(@Param("customerId") customerId: string) {
    return this.shipmentService.findByCustomer(customerId);
  }

  @Patch(":id/status")
  updateStatus(@Param("id") id: string, @Body() body: { status: string }) {
    return this.shipmentService.updateStatus(id, body.status as ShipmentStatus);
  }

  @Get('customer/:id/search')
  async searchShipmentByTrackingNo(
    @Param('id') customerId: string,
    @Query('trackingNo') trackingNo: string,
  ) {
    return this.shipmentService.findByTrackingNo(customerId, trackingNo);
  }  
}
