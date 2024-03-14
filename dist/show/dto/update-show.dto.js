"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateShowDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_show_dto_1 = require("./create-show.dto");
class UpdateShowDto extends (0, mapped_types_1.PartialType)(create_show_dto_1.CreateShowDto) {
}
exports.UpdateShowDto = UpdateShowDto;
//# sourceMappingURL=update-show.dto.js.map