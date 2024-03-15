import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Show } from 'src/show/entities/show.entity';
import { ShowService } from 'src/show/show.service';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { DataSource, Repository } from 'typeorm';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { Ticket } from './entities/ticket.entity';


@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket) private ticketRepository: Repository<Ticket>,
    private readonly showService: ShowService,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private dataSource: DataSource,
  ) { }

  async createTicket(showId: number, createTicketDto: CreateTicketDto, user: User) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const show = await this.showService.findShowById(showId);

      if ('price' in show) {
        await this.userService.buyTicket(user, show.price);
      };

      if (!createTicketDto.seatId) {
        
      }
      await queryRunner.manager.save(Ticket, createTicketDto)

      await queryRunner.commitTransaction();
      return { message: "해당 공연을 예매하였습니다." };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      return { message: `${error}` };
    } finally {
      await queryRunner.release();
    }
  }
}
