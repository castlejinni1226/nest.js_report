import { PickType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsString } from "class-validator";
import { User } from "../entities/user.entity";

export class SignupUserDto extends PickType(User, [
    'userName',
    'email',
    'password',
    'point',
    'admin'
])
{
    @IsString()
    @IsNotEmpty({ message : '비밀번호 확인을 입력해주세요'})
    readonly passwordCheck : string;
}
