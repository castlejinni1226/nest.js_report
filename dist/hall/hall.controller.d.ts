import { HallService } from './hall.service';
import { CreateHallDto } from './dto/create-hall.dto';
import { Hall } from './entities/hall.entity';
export declare class HallController {
    private readonly hallService;
    constructor(hallService: HallService);
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
