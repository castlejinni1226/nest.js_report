import { ShowService } from './show.service';
import { CreateShowDto } from './dto/create-show.dto';
export declare class ShowController {
    private readonly showService;
    constructor(showService: ShowService);
    createShow(createShowDto: CreateShowDto): Promise<(CreateShowDto & import("src/show/entities/show.entity").Show) | {
        message: string;
    }>;
    findAllShow(): Promise<import("src/show/entities/show.entity").Show[] | {
        message: string;
    }>;
    findShowById(showId: number): Promise<import("src/show/entities/show.entity").Show | {
        message: string;
    }>;
}
