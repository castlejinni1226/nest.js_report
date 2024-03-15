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
exports.ShowService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const hall_service_1 = require("../hall/hall.service");
const typeorm_2 = require("typeorm");
const show_entity_1 = require("./entities/show.entity");
let ShowService = class ShowService {
    constructor(showRepository, hallService) {
        this.showRepository = showRepository;
        this.hallService = hallService;
    }
    async createShow(createShowDto) {
        try {
            const hall = await this.hallService.findHallByid(createShowDto.hallId);
            if (!hall) {
                throw new common_1.NotFoundException("해당 공연장을 찾을 수 없습니다.");
            }
            return await this.showRepository.save(createShowDto);
        }
        catch (error) {
            return { message: `${error}` };
        }
    }
    async findAllshow() {
        try {
            const shows = await this.showRepository.find();
            if (!shows) {
                throw new common_1.NotFoundException("공연 목록을 찾을 수 없습니다.");
            }
            return shows;
        }
        catch (error) {
            return { message: `${error}` };
        }
    }
    async findShowById(showId) {
        try {
            const show = await this.showRepository.findOneBy({ showId });
            if (!show) {
                throw new common_1.NotFoundException("해당 공연을 찾을 수 없습니다.");
            }
            return show;
        }
        catch (error) {
            return { message: `${error}` };
        }
    }
};
exports.ShowService = ShowService;
exports.ShowService = ShowService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(show_entity_1.Show)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        hall_service_1.HallService])
], ShowService);
//# sourceMappingURL=show.service.js.map