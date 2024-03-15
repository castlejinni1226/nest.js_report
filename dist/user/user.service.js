"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = __importStar(require("bcryptjs"));
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const jwt_1 = require("@nestjs/jwt");
const user_entity_1 = require("./entities/user.entity");
let UserService = class UserService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async signup(signupUserDto) {
        try {
            if (signupUserDto.password !== signupUserDto.passwordCheck) {
                throw new Error('비밀번호가 일치하지 않습니다.');
            }
            signupUserDto.password = await bcrypt.hash(signupUserDto.password, 10);
            signupUserDto.point = 1000000;
            await this.userRepository.save(signupUserDto);
            return { message: '회원가입이 성공적으로 완료되었습니다.' };
        }
        catch (err) {
            return { message: `${err}` };
        }
    }
    async signin(signinUserDto, res) {
        try {
            const user = await this.userRepository.findOne({
                where: {
                    email: signinUserDto.email
                },
                select: ['password']
            });
            if (!user) {
                throw new common_1.NotFoundException('가입된 이메일이 아닙니다.');
            }
            if (!(await bcrypt.compare(signinUserDto.password, user.password))) {
                throw new Error('비밀번호를 확인해주세요.');
            }
            const payload = { email: user.email, id: user.userId };
            const accessToken = this.jwtService.sign(payload);
            res.cookie('accessToken', accessToken, { httpOnly: true });
            return res.json({ message: '로그인이 성공적으로 되었습니다.' });
        }
        catch (err) {
            return { message: `${err}` };
        }
    }
    async findByEmail(email) {
        return await this.userRepository.findOneBy({ email });
    }
    async buyTicket(user, showPrice) {
        try {
            const newPoint = user.point - showPrice;
            if (newPoint < 0) {
                throw new Error("현재 포인트 잔액이 부족합니다.");
            }
            return await this.userRepository.update({ userId: user.userId }, { point: newPoint });
        }
        catch (error) {
            return { message: `${error}` };
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], UserService);
//# sourceMappingURL=user.service.js.map