import { IsDate, IsNumber, IsString } from 'class-validator';
import { Seat } from 'src/seat/entities/seat.entity';
import { Show } from 'src/show/entities/show.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tickets' })
export class Ticket {
    @PrimaryGeneratedColumn()
    ticketId: number;

    @IsNumber()
    @Column('int', { nullable: false })
    seatId: number;

    @IsNumber()
    @Column('int', { select: false, default: false })
    showId: number;

    @IsNumber()
    @Column('int', { select: false, default: false })
    userId: number;

    @ManyToOne(() => Show, (show) => show.tickets)
    @JoinColumn({ name: "showId", referencedColumnName: "showId" })
    show: Show;

    @ManyToOne(() => User, (user) => user.tickets)
    @JoinColumn({ name: "userId", referencedColumnName: "userId" })
    user: User;

    @OneToOne(() => Seat, (seat) => seat.ticket)
    @JoinColumn({ name: "seatId", referencedColumnName: "seatId" })
    seat: Seat;
}