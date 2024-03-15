import { JwtService } from '@nestjs/jwt';
import { ShowService } from 'src/show/show.service';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { DataSource, Repository } from 'typeorm';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { Ticket } from './entities/ticket.entity';
export declare class TicketService {
    private ticketRepository;
    private readonly showService;
    private readonly userService;
    private readonly jwtService;
    private dataSource;
    constructor(ticketRepository: Repository<Ticket>, showService: ShowService, userService: UserService, jwtService: JwtService, dataSource: DataSource);
    createTicket(showId: number, createTicketDto: CreateTicketDto, user: User): Promise<{
        message: string;
    }>;
}
