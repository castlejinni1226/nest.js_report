import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { Ticket } from './entities/ticket.entity';
export declare class TicketService {
    private ticketRepository;
    private readonly jwtService;
    constructor(ticketRepository: Repository<Ticket>, jwtService: JwtService);
    createTicket(createTicketDto: CreateTicketDto): Promise<(CreateTicketDto & Ticket) | {
        message: string;
    }>;
}
