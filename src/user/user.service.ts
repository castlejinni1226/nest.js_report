import { Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SignupUserDto } from './dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from './entities/user.entity';
import { SigninUserDto } from './dto/signin-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) { }

  async signup(signupUserDto: SignupUserDto) {
    // 1. 비밀번호 === 비밀번호 확인
    // 2. 비밀번호 암호화
    // 3. 포인트 100만 지급
    // 4. 저장

    try {
      if (signupUserDto.password !== signupUserDto.passwordCheck) {
        throw new Error('비밀번호가 일치하지 않습니다.')
      }

      signupUserDto.password = await bcrypt.hash(signupUserDto.password, 10);
      signupUserDto.point = 1000000;

      await this.userRepository.save(signupUserDto);

      return { message: '회원가입이 성공적으로 완료되었습니다.' };
    } catch (err) {
      return { message: `${err}` };
    }
  }

  async signin(signinUserDto: SigninUserDto, res: any) {
    // 1. 가입된 이메일이 맞는지 확인
    // 2. 가입된 비밀번호가 맞는지 확인
    try {
      const user = await this.userRepository.findOne({
        where: {
          email: signinUserDto.email
        },
        select: ['password']
      })

      if (!user) {
        throw new NotFoundException('가입된 이메일이 아닙니다.')
      }

      if (!(await bcrypt.compare(signinUserDto.password, user.password))) {
        throw new Error('비밀번호를 확인해주세요.');
      }

      const payload = { email: user.email, id: user.userId };
      const accessToken = this.jwtService.sign(payload);
      res.cookie('accessToken', accessToken, { httpOnly: true });

      return res.json({ message: '로그인이 성공적으로 되었습니다.' });
    } catch (err) {
      return { message: `${err}` };
    }
  }

  async findByEmail(email: string) {
    return await this.userRepository.findOneBy({ email });
  }

  async buyTicket(user: User, showPrice: number) {
    try {
      const newPoint = user.point - showPrice;
      if (newPoint < 0) {
        throw new Error("현재 포인트 잔액이 부족합니다.");
      }

      return await this.userRepository.update({userId: user.userId}, {point: newPoint});
    } catch (error) {
      return { message: `${error}` };
    }
  }

}
