import { Seat } from 'src/seat/entities/seat.entity';
import { Show } from 'src/show/entities/show.entity';
export declare class Hall {
    static hallId(hallId: any): void;
    hallId: number;
    address: string;
    hallName: string;
    shows: Show[];
    seats: Seat[];
}
