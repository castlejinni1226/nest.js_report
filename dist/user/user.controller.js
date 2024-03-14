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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const signin_user_dto_1 = require("./dto/signin-user.dto");
const user_entity_1 = require("./entities/user.entity");
const userInfo_decorator_1 = require("../until/userInfo.decorator");
const passport_1 = require("@nestjs/passport");
const class_validator_1 = require("class-validator");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async signup(signupUserDto, admin) {
        (0, class_validator_1.validate)(signupUserDto);
        if (admin) {
            signupUserDto.admin = true;
        }
        else {
            signupUserDto.admin = false;
        }
        return await this.userService.signup(signupUserDto);
    }
    async signin(signinUserDto, res) {
        (0, class_validator_1.validate)(signinUserDto);
        return await this.userService.signin(signinUserDto, res);
    }
    getEmail(user) {
        return { user };
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)('signup'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('admin')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.SignupUserDto, Boolean]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)('signin'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signin_user_dto_1.SigninUserDto, Response]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "signin", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)(),
    __param(0, (0, userInfo_decorator_1.UserInfo)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getEmail", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map