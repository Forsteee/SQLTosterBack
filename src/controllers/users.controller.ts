import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { User } from '../entities/users.entity';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { SearchUserDto } from '../dto/search-user.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getAll(): Promise<User[]> {
    return this.userService.findAll();
  }
  @UseGuards(JwtAuthGuard)
  @Post('/checkToken')
  checkToken(@Body() user_id: number): number {
    return user_id;
  }
  @Get(':id')
  getOne(@Param('id') id: number): Promise<User> {
    return this.userService.findOne(id);
  }
  @Post()
  findOne(@Body() searchUserDto: SearchUserDto): Promise<User> {
    return this.userService.findOneUAuth(searchUserDto);
  }
  @Post('/create')
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.userService.remove(id);
  }
  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.userService.update(id, updateUserDto);
  }
  @Post('/usersHead')
  findUsersHead(@Body() userId: number): Promise<any> {
    return this.userService.usersHeaderForFront(userId);
  }
}
