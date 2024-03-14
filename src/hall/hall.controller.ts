import { Controller, Post, Body, UseGuards, Get, Param } from '@nestjs/common';
import { HallService } from './hall.service';
import { CreateHallDto } from './dto/create-hall.dto';
import { AuthGuard } from '@nestjs/passport'
import { validate } from 'class-validator';
import { Hall } from './entities/hall.entity';


@Controller('hall')
export class HallController {
  constructor(private readonly hallService: HallService) {}

  @UseGuards(AuthGuard('admin'))

  @Post() // 공연장 등록
  async createHall(@Body() createHallDto: CreateHallDto) {
    validate(createHallDto)
    return await this.hallService.createHall(createHallDto)
  }

  @Get() // 공연장 목록 조회
  async findAllHall() {
    return await this.hallService.findAllHall();
  }

  @Get(":hallId") // 공연장 상세조회
  async findHallByid(@Param("hallId") hallId: number) {
    return await this.hallService.findHallByid(+hallId);
  }
}
