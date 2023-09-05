"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const transPortMachineSchema = new mongoose_1.default.Schema({
    workplace: {
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
    active: {
        type: Boolean,
        required: true,
        default: false,
    },
    users: {
        type: [String],
        required: true,
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
exports.default = mongoose_1.default.model('TransPortMachine', transPortMachineSchema);
