import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
export declare class SeatService {
    create(createSeatDto: CreateSeatDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSeatDto: UpdateSeatDto): string;
    remove(id: number): string;
}
