import { UserService } from 'src/user/user.service';
import { ConfigService } from '@nestjs/config';
declare const AdminStrategy_base: new (...args: any[]) => any;
export declare class AdminStrategy extends AdminStrategy_base {
    private readonly userService;
    private readonly configService;
    constructor(userService: UserService, configService: ConfigService);
    validate(accessToken: any): Promise<import("src/user/entities/user.entity").User>;
}
export {};
