import { Controller, Get, Post, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import {
  ApiTags,
} from '@nestjs/swagger';
import { RolesGuard } from '../middleware/auth.guard';
import { Roles } from '../middleware/role.decorator';

export enum Role {
  ADMIN = 'admin',
  USER= 'user'
}
@ApiTags('Product')
@Controller('/api/v1')
@UsePipes(new ValidationPipe({
  whitelist: true,
  transform: true,
}))
@UseGuards(RolesGuard)
export class ProductController {
  constructor() {}

  @Get('product')
  @Roles(Role.ADMIN)
  public async ListAllProducts(): Promise<any> {
    return [];
  }

  @Post('product')
  @Roles(Role.ADMIN)
  public async createProduct(): Promise<any> {
    return [];
  }
}
