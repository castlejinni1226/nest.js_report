import { Controller,Post, Body, UseGuards, Param} from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { validate } from 'class-validator';
import { AuthGuard } from '@nestjs/passport';
import { UserInfo } from 'src/until/userInfo.decorator';
import { User } from 'src/user/entities/user.entity';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post("/:showId") 
  async createTicket(
    @Param("showId") showId: number,
    @UserInfo() user: User,
    @Body() createTicketDto: CreateTicketDto
    ) {
    validate(createTicketDto);

    createTicketDto.userId = user.userId;
    return await this.ticketService.createTicket(showId, createTicketDto, user);
  }
}

