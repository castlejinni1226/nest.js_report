import { Hall } from 'src/hall/entities/hall.entity';
import { Ticket } from 'src/ticket/entities/ticket.entity';
export declare class Show {
    showId: number;
    showName: string;
    showDateTime: Date;
    hallId: number;
    price: number;
    hall: Hall;
    tickets: Ticket[];
}
