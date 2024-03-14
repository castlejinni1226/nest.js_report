import { SeatService } from './seat.service';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
export declare class SeatController {
    private readonly seatService;
    constructor(seatService: SeatService);
    create(createSeatDto: CreateSeatDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSeatDto: UpdateSeatDto): string;
    remove(id: string): string;
}
