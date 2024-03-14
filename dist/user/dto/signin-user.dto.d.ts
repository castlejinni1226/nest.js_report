import { User } from "../entities/user.entity";
declare const SigninUserDto_base: import("@nestjs/mapped-types").MappedType<Pick<User, "password" | "email">>;
export declare class SigninUserDto extends SigninUserDto_base {
}
export {};
