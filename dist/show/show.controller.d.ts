import { ShowService } from './show.service';
import { CreateShowDto } from './dto/create-show.dto';
export declare class ShowController {
    private readonly showService;
    constructor(showService: ShowService);
    createShow(createShowDto: CreateShowDto): Promise<void>;
}
