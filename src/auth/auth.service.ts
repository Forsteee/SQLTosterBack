import { Injectable } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../services/users.service';
import { SearchUserDto } from '../dto/search-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const userSDto = new SearchUserDto(username);
    const user = await this.usersService.findOneUAuth(userSDto);
    if (user && (await bcrypt.compare(pass, user.password))) {
      //user.password === pass
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.login, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
      user_id: payload.sub,
    };
  }
}
