"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTicketDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const ticket_entity_1 = require("../entities/ticket.entity");
class CreateTicketDto extends (0, mapped_types_1.PickType)(ticket_entity_1.Ticket, [
    'show',
    'seat',
    'ticketId',
    'showId'
]) {
}
exports.CreateTicketDto = CreateTicketDto;
//# sourceMappingURL=create-ticket.dto.js.map