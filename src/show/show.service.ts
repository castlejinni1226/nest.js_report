import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HallService } from 'src/hall/hall.service';
import { Repository } from 'typeorm';
import { CreateShowDto } from './dto/create-show.dto';
import { Show } from './entities/show.entity';

@Injectable()
export class ShowService {
  constructor(
    @InjectRepository(Show) private readonly showRepository: Repository<Show>,
    private readonly hallService: HallService
  ) { }
  async createShow(createShowDto: CreateShowDto) {
    try {

      const hall = await this.hallService.findHallByid(createShowDto.hallId);

      if (!hall) {
        throw new NotFoundException("해당 공연장을 찾을 수 없습니다.");
      }

      return await this.showRepository.save(createShowDto);

    } catch (error) {
      return { message: `${error}` }
    }
  }

  async findAllshow() {
    try {
      const shows = await this.showRepository.find();

      if (!shows) {
        throw new NotFoundException("공연 목록을 찾을 수 없습니다.");
      }

      return shows;
    } catch (error) {
      return { message: `${error}`}
    }
  }

  async findShowById(showId: number) {
    try {
      const show = await this.showRepository.findOneBy({ showId });

      if (!show) {
        throw new NotFoundException("해당 공연을 찾을 수 없습니다.");
      }

      return show;
    } catch (error) {
      return { message: `${error}`};
    }
  }
}
