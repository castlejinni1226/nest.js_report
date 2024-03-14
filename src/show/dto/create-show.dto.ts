import { PickType } from "@nestjs/mapped-types";
import { Show } from "../entities/show.entity"

export class CreateShowDto extends PickType(Show, [
    'showName',
    'showDateTime',
    'hallId',
    'price'
]) { }