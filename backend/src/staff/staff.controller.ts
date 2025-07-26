import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from '../common/guards/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('staff')
@UseGuards(JwtAuthGuard, RolesGuard)
export class StaffController {
  @Get('dashboard')
  @Roles('STAFF')
  getStaffDashboard() {
    return { message: 'Staff dashboard content' };
  }
}
