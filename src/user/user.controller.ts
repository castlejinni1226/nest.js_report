import { Controller, Get, Post, Body, Query, UseGuards, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { SignupUserDto } from './dto/create-user.dto';
import { SigninUserDto } from './dto/signin-user.dto';
import { User } from './entities/user.entity';
import { UserInfo } from 'src/until/userInfo.decorator';
import { AuthGuard } from '@nestjs/passport'
import { validate } from 'class-validator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup') // 유저 회원가입 (admin으로 로그인시 signup?admin = true)
  async signup(
    @Body() signupUserDto: SignupUserDto,
    @Query('admin') admin: boolean
  ) {
    validate(signupUserDto);

    if (admin) {
      signupUserDto.admin = true;
    } else {
      signupUserDto.admin = false;
    }
    return await this.userService.signup(signupUserDto)
  }

  @Post('signin') // 유저 로그인
  async signin(@Body() signinUserDto: SigninUserDto, @Res() res: Response) {
    validate(signinUserDto);

    return await this.userService.signin(signinUserDto, res);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getEmail(@UserInfo() user: User) {
    return { user };
  }
}
