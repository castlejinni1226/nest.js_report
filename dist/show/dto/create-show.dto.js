"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateShowDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const show_entity_1 = require("../entities/show.entity");
class CreateShowDto extends (0, mapped_types_1.PickType)(show_entity_1.Show, [
    'showName',
    'showDateTime',
    'hallId',
    'price'
]) {
}
exports.CreateShowDto = CreateShowDto;
//# sourceMappingURL=create-show.dto.js.map