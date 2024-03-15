import { Module } from '@nestjs/common';
import { ShowService } from './show.service';
import { ShowController } from './show.controller';
import { Show } from './entities/show.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HallModule } from 'src/hall/hall.module';

@Module({
  controllers: [ShowController],
  providers: [ShowService],
  imports: [TypeOrmModule.forFeature([Show]), HallModule],
  exports: [ShowService]
})
export class ShowModule {}
