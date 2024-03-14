import { User } from "../entities/user.entity";
declare const SignupUserDto_base: import("@nestjs/mapped-types").MappedType<Pick<User, "userName" | "email" | "password" | "point" | "admin">>;
export declare class SignupUserDto extends SignupUserDto_base {
    readonly passwordCheck: string;
}
export {};
