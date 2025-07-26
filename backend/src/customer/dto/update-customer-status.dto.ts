import { IsString, IsIn } from 'class-validator';

export class UpdateCustomerStatusDto {
  @IsString()
  @IsIn(['active', 'inactive'])
  status: string = 'active';
}
