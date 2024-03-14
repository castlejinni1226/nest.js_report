import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHallDto } from './dto/create-hall.dto';
import { Hall } from './entities/hall.entity';

@Injectable()
export class HallService {
    constructor(
        @InjectRepository(Hall) private hallRepository: Repository<Hall>,
        private readonly jwtService: JwtService,
    ) { }

    async createHall(createHallDto: CreateHallDto) {
        try {
            return this.hallRepository.save(createHallDto);
        } catch (error) {
            return { message: `${error}` };
        }
    }

    async findAllHall() {
        try {
            const halls = await this.hallRepository.find();
            if (!halls) {throw new NotFoundException('공연장 목록을 조회할 수 없습니다.');}
            return halls;
        } catch (error) {
            return { message: `${error}` };
        }
    }

    async findHallByid(hallId: number) {
        try {
            const hall = await this.hallRepository.findOneBy({ hallId })
            if (!hall) {throw new NotFoundException("해당 공연장을 찾을 수 없습니다.");}
            return hall;
        } catch (error) {
            return { message: `${error}`};
        }
    }
}
