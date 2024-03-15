import { HallService } from 'src/hall/hall.service';
import { Repository } from 'typeorm';
import { CreateShowDto } from './dto/create-show.dto';
import { Show } from './entities/show.entity';
export declare class ShowService {
    private readonly showRepository;
    private readonly hallService;
    constructor(showRepository: Repository<Show>, hallService: HallService);
    createShow(createShowDto: CreateShowDto): Promise<(CreateShowDto & Show) | {
        message: string;
    }>;
    findAllshow(): Promise<Show[] | {
        message: string;
    }>;
    findShowById(showId: number): Promise<Show | {
        message: string;
    }>;
}
