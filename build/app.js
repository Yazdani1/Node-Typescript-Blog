"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
require('./models/db');
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: '4.5mb' }));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/api/v0', require('./routers/Blog'));
// app.use('/api/v0', require('./routers/MachineOrders'));
app.listen(port, () => {
    console.log('Server connected');
});
//    "dev": "nodemon src/app.ts",
