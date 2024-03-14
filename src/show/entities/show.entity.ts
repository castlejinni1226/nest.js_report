import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Hall } from 'src/hall/entities/hall.entity';
import { Ticket } from 'src/ticket/entities/ticket.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity({ name: 'shows' })
@Unique(['showName', 'showDateTime'])
export class Show {
    @PrimaryGeneratedColumn()
    showId: number;

    @IsString()
    @Column('varchar', { nullable: false })
    @IsNotEmpty({ message: '공연 제목을 입력하세요.' })
    showName: string;

    @IsDate()
    @Column('date', { nullable: false })
    @IsNotEmpty({ message: '공연 날짜와 시간을 입력하세요.' })
    showDateTime: Date;

    @IsNumber()
    @Column('int', { select: false, nullable: false })
    @IsNotEmpty({ message: '공연장을 입력하세요.' })
    hallId: number;

    @IsNumber()
    @Column('int', { nullable: false })
    @IsNotEmpty({ message: '가격을 입력하세요.' })
    price: number;

    @ManyToOne(() => Hall, (hall) => hall.shows)
    @JoinColumn({ name: "hallId", referencedColumnName: "hallId" })
    hall: Hall;

    @OneToMany(() => Ticket, (ticket) => ticket.show)
    tickets: Ticket[]
}