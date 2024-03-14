import { Seat } from 'src/seat/entities/seat.entity';
import { Show } from 'src/show/entities/show.entity';
import { User } from 'src/user/entities/user.entity';
export declare class Ticket {
    ticketId: number;
    seatId: number;
    showId: number;
    userId: number;
    show: Show;
    user: User;
    seat: Seat;
}
