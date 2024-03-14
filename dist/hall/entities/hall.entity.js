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
exports.Hall = void 0;
const class_validator_1 = require("class-validator");
const seat_entity_1 = require("../../seat/entities/seat.entity");
const show_entity_1 = require("../../show/entities/show.entity");
const typeorm_1 = require("typeorm");
let Hall = class Hall {
    static hallId(hallId) {
        throw new Error('Method not implemented.');
    }
};
exports.Hall = Hall;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Hall.prototype, "hallId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, typeorm_1.Column)('varchar', { nullable: false }),
    __metadata("design:type", String)
], Hall.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, typeorm_1.Column)('varchar', { nullable: false }),
    __metadata("design:type", String)
], Hall.prototype, "hallName", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => show_entity_1.Show, (show) => show.hall),
    __metadata("design:type", Array)
], Hall.prototype, "shows", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => seat_entity_1.Seat, (seat) => seat.hall),
    __metadata("design:type", Array)
], Hall.prototype, "seats", void 0);
exports.Hall = Hall = __decorate([
    (0, typeorm_1.Entity)({ name: 'halls' })
], Hall);
//# sourceMappingURL=hall.entity.js.map