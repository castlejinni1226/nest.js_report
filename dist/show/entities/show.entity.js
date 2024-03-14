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
exports.Show = void 0;
const class_validator_1 = require("class-validator");
const hall_entity_1 = require("../../hall/entities/hall.entity");
const ticket_entity_1 = require("../../ticket/entities/ticket.entity");
const typeorm_1 = require("typeorm");
let Show = class Show {
};
exports.Show = Show;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Show.prototype, "showId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, typeorm_1.Column)('varchar', { nullable: false }),
    (0, class_validator_1.IsNotEmpty)({ message: '공연 제목을 입력하세요.' }),
    __metadata("design:type", String)
], Show.prototype, "showName", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, typeorm_1.Column)('date', { nullable: false }),
    (0, class_validator_1.IsNotEmpty)({ message: '공연 날짜와 시간을 입력하세요.' }),
    __metadata("design:type", Date)
], Show.prototype, "showDateTime", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, typeorm_1.Column)('int', { select: false, nullable: false }),
    (0, class_validator_1.IsNotEmpty)({ message: '공연장을 입력하세요.' }),
    __metadata("design:type", Number)
], Show.prototype, "hallId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, typeorm_1.Column)('int', { nullable: false }),
    (0, class_validator_1.IsNotEmpty)({ message: '가격을 입력하세요.' }),
    __metadata("design:type", Number)
], Show.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => hall_entity_1.Hall, (hall) => hall.shows),
    (0, typeorm_1.JoinColumn)({ name: "hallId", referencedColumnName: "hallId" }),
    __metadata("design:type", hall_entity_1.Hall)
], Show.prototype, "hall", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ticket_entity_1.Ticket, (ticket) => ticket.show),
    __metadata("design:type", Array)
], Show.prototype, "tickets", void 0);
exports.Show = Show = __decorate([
    (0, typeorm_1.Entity)({ name: 'shows' }),
    (0, typeorm_1.Unique)(['showName', 'showDateTime'])
], Show);
//# sourceMappingURL=show.entity.js.map