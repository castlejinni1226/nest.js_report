"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateHallDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const hall_entity_1 = require("../entities/hall.entity");
class CreateHallDto extends (0, mapped_types_1.PickType)(hall_entity_1.Hall, [
    'address',
    'hallName',
]) {
}
exports.CreateHallDto = CreateHallDto;
//# sourceMappingURL=create-hall.dto.js.map