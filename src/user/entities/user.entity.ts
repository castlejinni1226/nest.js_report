import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Ticket } from 'src/ticket/entities/ticket.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity({ name: 'users' })
@Unique(['email'])
export class User {
    @PrimaryGeneratedColumn()
    userId: number;

    @IsString()
    @Column('varchar', { length: 30, nullable: false })
    @IsNotEmpty({ message : '이름을 입력하세요.'})
    userName: string;

    @IsEmail()
    @Column('varchar', { length: 30, nullable: false })
    @IsNotEmpty({ message : '이메일을 입력하세요.'})
    email: string;

    @IsString()
    @Column('varchar', { select: false, nullable: false })
    @IsNotEmpty({ message : '비밀번호를 입력하세요.'})
    password: string;

    @Column('int', { nullable: false })
    point: number;

    @Column('boolean', { select: false, default: false })
    admin: boolean;

    @OneToMany(() => Ticket, (ticket) => ticket.user)
    tickets: Ticket[];
}