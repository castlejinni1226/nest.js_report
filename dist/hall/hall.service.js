"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HallService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const hall_entity_1 = require("./entities/hall.entity");
let HallService = class HallService {
    constructor(hallRepository, jwtService) {
        this.hallRepository = hallRepository;
        this.jwtService = jwtService;
    }
    async createHall(createHallDto) {
        try {
            return this.hallRepository.save(createHallDto);
        }
        catch (error) {
            return { message: `${error}` };
        }
    }
    async findAllHall() {
        try {
            const halls = await this.hallRepository.find();
            if (!halls) {
                throw new common_1.NotFoundException('공연장 목록을 조회할 수 없습니다.');
            }
            return halls;
        }
        catch (error) {
            return { message: `${error}` };
        }
    }
    async findHallByid(hallId) {
        try {
            const hall = await this.hallRepository.findOneBy({ hallId });
            if (!hall) {
                throw new common_1.NotFoundException("해당 공연장을 찾을 수 없습니다.");
            }
            return hall;
        }
        catch (error) {
            return { message: `${error}` };
        }
    }
};
exports.HallService = HallService;
exports.HallService = HallService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(hall_entity_1.Hall)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], HallService);
//# sourceMappingURL=hall.service.js.map