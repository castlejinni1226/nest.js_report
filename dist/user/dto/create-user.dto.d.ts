import { User } from "../entities/user.entity";
declare const SignupUserDto_base: import("@nestjs/mapped-types").MappedType<Pick<User, "point" | "password" | "admin" | "email" | "userName">>;
export declare class SignupUserDto extends SignupUserDto_base {
    readonly passwordCheck: string;
}
export {};
