import { UserService } from './user.service';
import { SignupUserDto } from './dto/create-user.dto';
import { SigninUserDto } from './dto/signin-user.dto';
import { User } from './entities/user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    signup(signupUserDto: SignupUserDto, admin: boolean): Promise<{
        message: string;
    }>;
    signin(signinUserDto: SigninUserDto, res: Response): Promise<any>;
    getEmail(user: User): {
        user: User;
    };
}
