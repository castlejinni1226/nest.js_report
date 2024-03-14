import { Show } from "../entities/show.entity";
declare const CreateShowDto_base: import("@nestjs/mapped-types").MappedType<Pick<Show, "hallId" | "showName" | "showDateTime" | "price">>;
export declare class CreateShowDto extends CreateShowDto_base {
}
export {};
