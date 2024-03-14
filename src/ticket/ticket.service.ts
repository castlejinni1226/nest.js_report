import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { Ticket } from './entities/ticket.entity';


@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket) private ticketRepository: Repository<Ticket>,
    private readonly jwtService: JwtService,
  ) { }

  async createTicket(createTicketDto: CreateTicketDto) {
    try {
      return this.ticketRepository.save(createTicketDto);
    } catch (error) {
      return { message: `${error}` };
    }
  }
}
