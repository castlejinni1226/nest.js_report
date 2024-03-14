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
exports.ShowController = void 0;
const common_1 = require("@nestjs/common");
const show_service_1 = require("./show.service");
const create_show_dto_1 = require("./dto/create-show.dto");
let ShowController = class ShowController {
    constructor(showService) {
        this.showService = showService;
    }
    createShow(createShowDto) {
        return this.showService.createShow(createShowDto);
    }
};
exports.ShowController = ShowController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_show_dto_1.CreateShowDto]),
    __metadata("design:returntype", void 0)
], ShowController.prototype, "createShow", null);
exports.ShowController = ShowController = __decorate([
    (0, common_1.Controller)('show'),
    __metadata("design:paramtypes", [show_service_1.ShowService])
], ShowController);
//# sourceMappingURL=show.controller.js.map