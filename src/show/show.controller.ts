import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, NotFoundException } from '@nestjs/common';
import { ShowService } from './show.service';
import { CreateShowDto } from './dto/create-show.dto';
import { UpdateShowDto } from './dto/update-show.dto';
import { AuthGuard } from '@nestjs/passport';
import { HallService } from 'src/hall/hall.service';
import { validate } from 'class-validator';

@Controller('show')
export class ShowController {
  constructor(
    private readonly showService: ShowService
    ) {}

  @UseGuards(AuthGuard('admin'))
  @Post()
  async createShow(@Body() createShowDto: CreateShowDto) {
    validate(createShowDto);
    return await this.showService.createShow(createShowDto);
  }

  @Get()
  async findAllShow() {
    return await this.showService.findAllshow();
  }

  @Get(":showId")
  async findShowById(@Param("shodId") showId: number) {
    return await this.showService.findShowById(showId);
  }
}
