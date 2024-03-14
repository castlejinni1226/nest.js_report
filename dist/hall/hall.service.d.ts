import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { CreateHallDto } from './dto/create-hall.dto';
import { Hall } from './entities/hall.entity';
export declare class HallService {
    private hallRepository;
    private readonly jwtService;
    constructor(hallRepository: Repository<Hall>, jwtService: JwtService);
    createHall(createHallDto: CreateHallDto): Promise<(CreateHallDto & Hall) | {
        message: string;
    }>;
    findAllHall(): Promise<Hall[] | {
        message: string;
    }>;
    findHallByid(hallId: number): Promise<Hall | {
        message: string;
    }>;
}
