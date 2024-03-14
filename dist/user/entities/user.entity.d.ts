import { Ticket } from 'src/ticket/entities/ticket.entity';
export declare class User {
    userId: number;
    userName: string;
    email: string;
    password: string;
    point: number;
    admin: boolean;
    tickets: Ticket[];
}
