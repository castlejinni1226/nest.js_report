"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./user/user.module");
const ticket_module_1 = require("./ticket/ticket.module");
const show_module_1 = require("./show/show.module");
const seat_module_1 = require("./seat/seat.module");
const hall_module_1 = require("./hall/hall.module");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const joi_1 = __importDefault(require("joi"));
const hall_entity_1 = require("./hall/entities/hall.entity");
const seat_entity_1 = require("./seat/entities/seat.entity");
const show_entity_1 = require("./show/entities/show.entity");
const ticket_entity_1 = require("./ticket/entities/ticket.entity");
const user_entity_1 = require("./user/entities/user.entity");
const auth_module_1 = require("./auth/auth.module");
const core_1 = require("@nestjs/core");
const typeOrmModuleOptions = {
    useFactory: async (configService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [hall_entity_1.Hall, seat_entity_1.Seat, show_entity_1.Show, ticket_entity_1.Ticket, user_entity_1.User],
        synchronize: configService.get('DB_SYNC'),
        logging: true,
    }),
    inject: [config_1.ConfigService],
};
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                validationSchema: joi_1.default.object({
                    DB_HOST: joi_1.default.string().required(),
                    DB_PORT: joi_1.default.number().required(),
                    DB_USERNAME: joi_1.default.string().required(),
                    DB_PASSWORD: joi_1.default.string().required(),
                    DB_NAME: joi_1.default.string().required(),
                    DB_SYNC: joi_1.default.boolean().required(),
                }),
            }),
            typeorm_1.TypeOrmModule.forRootAsync(typeOrmModuleOptions),
            user_module_1.UserModule, ticket_module_1.TicketModule, show_module_1.ShowModule, seat_module_1.SeatModule, hall_module_1.HallModule, auth_module_1.AuthModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_PIPE,
                useClass: common_1.ValidationPipe,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map