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
exports.Seat = void 0;
const class_validator_1 = require("class-validator");
const hall_entity_1 = require("../../hall/entities/hall.entity");
const ticket_entity_1 = require("../../ticket/entities/ticket.entity");
const typeorm_1 = require("typeorm");
let Seat = class Seat {
};
exports.Seat = Seat;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Seat.prototype, "seatId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, typeorm_1.Column)('int', { nullable: false }),
    __metadata("design:type", Number)
], Seat.prototype, "seatnumber", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, typeorm_1.Column)('int', { select: false, nullable: false }),
    __metadata("design:type", Number)
], Seat.prototype, "hallId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => hall_entity_1.Hall, (hall) => hall.seats),
    (0, typeorm_1.JoinColumn)({ name: "hallId", referencedColumnName: "hallId" }),
    __metadata("design:type", hall_entity_1.Hall)
], Seat.prototype, "hall", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => ticket_entity_1.Ticket, (ticket) => ticket.seat),
    __metadata("design:type", ticket_entity_1.Ticket)
], Seat.prototype, "ticket", void 0);
exports.Seat = Seat = __decorate([
    (0, typeorm_1.Entity)({ name: 'seats' })
], Seat);
//# sourceMappingURL=seat.entity.js.map