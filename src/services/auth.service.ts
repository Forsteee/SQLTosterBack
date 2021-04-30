import { Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from '../dto/auth.dto';
import { SearchUserDto } from '../dto/search-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(authDto: AuthDto): Promise<any> {
    /*const searchDto = new SearchUserDto(authDto.login);
    console.log(authDto.login + ' dffg');*/
    const newUser = { userId: 10, login: '10', password: '10' };
    return newUser;
    /*const user = await this.usersService.findOneUAuth(searchDto);
    if (user && user.password === authDto.password) {
      const { password, ...result } = user;
      return result;
    }
    return null;*/
  }
  async login(user: any) {
    const payload = { username: user.login, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
