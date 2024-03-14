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
exports.Ticket = void 0;
const class_validator_1 = require("class-validator");
const seat_entity_1 = require("../../seat/entities/seat.entity");
const show_entity_1 = require("../../show/entities/show.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const typeorm_1 = require("typeorm");
let Ticket = class Ticket {
};
exports.Ticket = Ticket;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Ticket.prototype, "ticketId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, typeorm_1.Column)('int', { nullable: false }),
    __metadata("design:type", Number)
], Ticket.prototype, "seatId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, typeorm_1.Column)('int', { select: false, default: false }),
    __metadata("design:type", Number)
], Ticket.prototype, "showId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, typeorm_1.Column)('int', { select: false, default: false }),
    __metadata("design:type", Number)
], Ticket.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => show_entity_1.Show, (show) => show.tickets),
    (0, typeorm_1.JoinColumn)({ name: "showId", referencedColumnName: "showId" }),
    __metadata("design:type", show_entity_1.Show)
], Ticket.prototype, "show", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.tickets),
    (0, typeorm_1.JoinColumn)({ name: "userId", referencedColumnName: "userId" }),
    __metadata("design:type", user_entity_1.User)
], Ticket.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => seat_entity_1.Seat, (seat) => seat.ticket),
    (0, typeorm_1.JoinColumn)({ name: "seatId", referencedColumnName: "seatId" }),
    __metadata("design:type", seat_entity_1.Seat)
], Ticket.prototype, "seat", void 0);
exports.Ticket = Ticket = __decorate([
    (0, typeorm_1.Entity)({ name: 'tickets' })
], Ticket);
//# sourceMappingURL=ticket.entity.js.map