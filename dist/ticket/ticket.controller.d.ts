import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
export declare class TicketController {
    private readonly ticketService;
    constructor(ticketService: TicketService);
    createTicket(createTicketDto: CreateTicketDto): Promise<(CreateTicketDto & import("src/ticket/entities/ticket.entity").Ticket) | {
        message: string;
    }>;
}
