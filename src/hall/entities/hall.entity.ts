import { IsString } from 'class-validator';
import { Seat } from 'src/seat/entities/seat.entity';
import { Show } from 'src/show/entities/show.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'halls' })
export class Hall {
    static hallId(hallId: any) {
        throw new Error('Method not implemented.');
    }
    @PrimaryGeneratedColumn()
    hallId: number;

    @IsString()
    @Column('varchar', { nullable: false })
    address: string;

    @IsString()
    @Column('varchar', { nullable: false })
    hallName: string;

    @OneToMany(() => Show, (show) => show.hall)
    shows: Show[];

    @OneToMany(() => Seat, (seat) => seat.hall)
    seats: Seat[];
}

