import { Module } from '@nestjs/common';
import { ShowService } from './show.service';
import { ShowController } from './show.controller';
import { Show } from './entities/show.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ShowController],
  providers: [ShowService],
  imports: [TypeOrmModule.forFeature([Show])]
})
export class ShowModule {}
