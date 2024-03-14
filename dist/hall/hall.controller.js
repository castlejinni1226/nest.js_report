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
exports.HallController = void 0;
const common_1 = require("@nestjs/common");
const hall_service_1 = require("./hall.service");
const create_hall_dto_1 = require("./dto/create-hall.dto");
const passport_1 = require("@nestjs/passport");
const class_validator_1 = require("class-validator");
let HallController = class HallController {
    constructor(hallService) {
        this.hallService = hallService;
    }
    async createHall(createHallDto) {
        (0, class_validator_1.validate)(createHallDto);
        return await this.hallService.createHall(createHallDto);
    }
    async findAllHall() {
        return await this.hallService.findAllHall();
    }
    async findHallByid(hallId) {
        return await this.hallService.findHallByid(+hallId);
    }
};
exports.HallController = HallController;
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('admin')),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_hall_dto_1.CreateHallDto]),
    __metadata("design:returntype", Promise)
], HallController.prototype, "createHall", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HallController.prototype, "findAllHall", null);
__decorate([
    (0, common_1.Get)(":hallId"),
    __param(0, (0, common_1.Param)("hallId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], HallController.prototype, "findHallByid", null);
exports.HallController = HallController = __decorate([
    (0, common_1.Controller)('hall'),
    __metadata("design:paramtypes", [hall_service_1.HallService])
], HallController);
//# sourceMappingURL=hall.controller.js.map