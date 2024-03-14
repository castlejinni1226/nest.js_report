"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SigninUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const user_entity_1 = require("../entities/user.entity");
class SigninUserDto extends (0, mapped_types_1.PickType)(user_entity_1.User, [
    'email',
    'password'
]) {
}
exports.SigninUserDto = SigninUserDto;
//# sourceMappingURL=signin-user.dto.js.map