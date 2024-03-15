import { Repository } from 'typeorm';
import { SignupUserDto } from './dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from './entities/user.entity';
import { SigninUserDto } from './dto/signin-user.dto';
export declare class UserService {
    private userRepository;
    private readonly jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    signup(signupUserDto: SignupUserDto): Promise<{
        message: string;
    }>;
    signin(signinUserDto: SigninUserDto, res: any): Promise<any>;
    findByEmail(email: string): Promise<User>;
    buyTicket(user: User, showPrice: number): Promise<import("typeorm").UpdateResult | {
        message: string;
    }>;
}
