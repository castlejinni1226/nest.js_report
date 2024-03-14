import { Hall } from 'src/hall/entities/hall.entity';
import { Ticket } from 'src/ticket/entities/ticket.entity';
export declare class Seat {
    seatId: number;
    seatnumber: number;
    hallId: number;
    hall: Hall;
    ticket: Ticket | null;
}
