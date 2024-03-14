import { PickType } from "@nestjs/mapped-types";
import { Ticket } from "../entities/ticket.entity"

export class CreateTicketDto extends PickType(Ticket, [
    'show',
    'seat',
    'ticketId',
    'showId'
]) {}