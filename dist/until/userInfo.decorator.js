"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfo = void 0;
const common_1 = require("@nestjs/common");
exports.UserInfo = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    if (request.user) {
        return request.user;
    }
    return null;
});
//# sourceMappingURL=userInfo.decorator.js.map