import { Ticket } from "../entities/ticket.entity";
declare const CreateTicketDto_base: import("@nestjs/mapped-types").MappedType<Pick<Ticket, "show" | "seat" | "ticketId" | "showId">>;
export declare class CreateTicketDto extends CreateTicketDto_base {
}
export {};
