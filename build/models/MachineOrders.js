"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const transPortMachineOPrdersSchema = new mongoose_1.default.Schema({
    creation_user: {
        type: String,
        required: true,
    },
    assigned_user: {
        type: String,
        required: true,
    },
    machine: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        enum: ['Waiting', 'In_Progress', 'Done'],
        default: 'Waiting',
    },
    slug: {
        type: String,
        lowercase: true,
        unique: true,
        index: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
exports.default = mongoose_1.default.model('TransPortMachineOrders', transPortMachineOPrdersSchema);
