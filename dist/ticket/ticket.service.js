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
exports.TicketService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const show_service_1 = require("../show/show.service");
const user_service_1 = require("../user/user.service");
const typeorm_2 = require("typeorm");
const ticket_entity_1 = require("./entities/ticket.entity");
let TicketService = class TicketService {
    constructor(ticketRepository, showService, userService, jwtService, dataSource) {
        this.ticketRepository = ticketRepository;
        this.showService = showService;
        this.userService = userService;
        this.jwtService = jwtService;
        this.dataSource = dataSource;
    }
    async createTicket(showId, createTicketDto, user) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const show = await this.showService.findShowById(showId);
            if ('price' in show) {
                await this.userService.buyTicket(user, show.price);
            }
            ;
            if (!createTicketDto.seatId) {
            }
            await queryRunner.manager.save(ticket_entity_1.Ticket, createTicketDto);
            await queryRunner.commitTransaction();
            return { message: "해당 공연을 예매하였습니다." };
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            return { message: `${error}` };
        }
        finally {
            await queryRunner.release();
        }
    }
};
exports.TicketService = TicketService;
exports.TicketService = TicketService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ticket_entity_1.Ticket)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        show_service_1.ShowService,
        user_service_1.UserService,
        jwt_1.JwtService,
        typeorm_2.DataSource])
], TicketService);
//# sourceMappingURL=ticket.service.js.map