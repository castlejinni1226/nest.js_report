import { Repository } from 'typeorm';
import { CreateShowDto } from './dto/create-show.dto';
import { Show } from './entities/show.entity';
export declare class ShowService {
    private readonly showRepository;
    constructor(showRepository: Repository<Show>);
    createShow(CreateShowDto: CreateShowDto): Promise<void>;
}
