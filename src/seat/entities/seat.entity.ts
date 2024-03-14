import { IsNumber } from 'class-validator';
import { Hall } from 'src/hall/entities/hall.entity';
import { Ticket } from 'src/ticket/entities/ticket.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'seats' })
export class Seat {
    @PrimaryGeneratedColumn()
    seatId: number;

    @IsNumber()
    @Column('int', { nullable: false })
    seatnumber: number;

    @IsNumber()
    @Column('int', { select: false, nullable: false })
    hallId: number;

    @ManyToOne(() => Hall, (hall) => hall.seats)
    @JoinColumn({ name: "hallId", referencedColumnName: "hallId" })
    hall: Hall;

    @OneToOne(() => Ticket, (ticket) => ticket.seat)
    ticket: Ticket | null;
}