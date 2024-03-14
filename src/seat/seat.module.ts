import { Module } from '@nestjs/common';
import { SeatService } from './seat.service';
import { SeatController } from './seat.controller';
import { Seat } from './entities/seat.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [SeatController],
  providers: [SeatService],
  imports: [TypeOrmModule.forFeature([Seat])]

})
export class SeatModule {}
