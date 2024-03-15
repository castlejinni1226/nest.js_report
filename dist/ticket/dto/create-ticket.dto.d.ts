import { Ticket } from "../entities/ticket.entity";
declare const CreateTicketDto_base: import("@nestjs/mapped-types").MappedType<Pick<Ticket, "userId" | "showId" | "seatId">>;
export declare class CreateTicketDto extends CreateTicketDto_base {
}
export {};
