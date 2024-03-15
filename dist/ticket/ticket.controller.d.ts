import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { User } from 'src/user/entities/user.entity';
export declare class TicketController {
    private readonly ticketService;
    constructor(ticketService: TicketService);
    createTicket(showId: number, user: User, createTicketDto: CreateTicketDto): Promise<{
        message: string;
    }>;
}
