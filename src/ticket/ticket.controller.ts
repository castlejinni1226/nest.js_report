import { Controller,Post, Body, UseGuards} from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { validate } from 'class-validator';
import { AuthGuard } from '@nestjs/passport';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @UseGuards(AuthGuard('admin'))
  @Post() 
  async createTicket(@Body() createTicketDto: CreateTicketDto) {
    validate(createTicketDto)
    return await this.ticketService.createTicket(createTicketDto)
  }


}

