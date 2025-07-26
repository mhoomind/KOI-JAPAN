import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  Patch,
  UseGuards,
} from "@nestjs/common";
import { CustomerService } from "./customer.service";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import { UpdateCustomerStatusDto } from "./dto/update-customer-status.dto";
import { JwtAuthGuard } from "auth/jwt-auth.guard";
import { Roles } from "common/guards/decorators/roles.decorator";
import { RolesGuard } from "common/guards/roles.guard";

@Controller("customers")
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  create(@Body() dto: CreateCustomerDto) {
    return this.customerService.create(dto);
  }

  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.customerService.findOne(id);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() dto: UpdateCustomerDto) {
    return this.customerService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.customerService.remove(id);
  }

  @Patch(":id/status")
  updateStatus(@Param("id") id: string, @Body() body: UpdateCustomerStatusDto) {
    return this.customerService.updateStatus(id, body.status);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("STAFF")
  @Post()
  async createCustomer(@Body() dto: CreateCustomerDto) {
    return this.customerService.createCustomerWithUser(dto);
  }
  
}
