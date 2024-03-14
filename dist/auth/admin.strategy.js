"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminStrategy = void 0;
const passport_jwt_1 = require("passport-jwt");
const user_service_1 = require("../user/user.service");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const passport_1 = require("@nestjs/passport");
let AdminStrategy = class AdminStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'admin') {
    constructor(userService, configService) {
        super({
            jwtFromRequest: (req) => {
                const { accessToken } = req.cookies;
                return accessToken;
            },
            ignoreExpiration: false,
            secretOrKey: configService.get('JWT_SECRET_KEY'),
        });
        this.userService = userService;
        this.configService = configService;
    }
    async validate(accessToken) {
        const user = await this.userService.findByEmail(accessToken.email);
        if (!user) {
            throw new common_1.NotFoundException('해당하는 사용자를 찾을 수 없습니다.');
        }
        else if (user.admin === false) {
            throw new common_1.UnauthorizedException('해당 사용자는 관리자 권한이 없습니다.');
        }
        return user;
    }
};
exports.AdminStrategy = AdminStrategy;
exports.AdminStrategy = AdminStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        config_1.ConfigService])
], AdminStrategy);
//# sourceMappingURL=admin.strategy.js.map