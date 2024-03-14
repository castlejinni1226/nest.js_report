import { Hall } from "../entities/hall.entity";
declare const CreateHallDto_base: import("@nestjs/mapped-types").MappedType<Pick<Hall, "address" | "hallName">>;
export declare class CreateHallDto extends CreateHallDto_base {
}
export {};
