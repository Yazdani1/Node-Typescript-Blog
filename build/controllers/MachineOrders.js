"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMachineOrder = exports.getMachineDetailsandMachineOrders = exports.getAllMachineOrders = exports.createMachineOrders = void 0;
const uuid_1 = require("uuid");
const MachineOrders_1 = __importDefault(require("../models/MachineOrders"));
const TransportMachine_1 = __importDefault(require("../models/TransportMachine"));
/**
 * To create machine orders
 * @param req
 * @param res
 * @returns
 */
const createMachineOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { creation_user, assigned_user, machine, name, description, state } = req.body;
        const transportMachineOrder = {
            creation_user,
            assigned_user,
            machine,
            name,
            description,
            state,
            slug: (0, uuid_1.v4)(),
        };
        const saveTransportMachineOrders = yield MachineOrders_1.default.create(transportMachineOrder);
        res.status(201).json(saveTransportMachineOrders);
    }
    catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});
exports.createMachineOrders = createMachineOrders;
/**
 * To get all machine orders
 */
const getAllMachineOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allMachineOrders = yield MachineOrders_1.default.find().sort({ date: -1 });
        res.status(200).json(allMachineOrders);
    }
    catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});
exports.getAllMachineOrders = getAllMachineOrders;
/**
 * To get machine details and all the machine orders for a single machine
 */
const getMachineDetailsandMachineOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const singleMachineQuery = { slug: req.params.slug };
        const singleMachine = yield TransportMachine_1.default.findOne(singleMachineQuery);
        if (!singleMachine) {
            return res.status(404).json({ error: 'Machine could not found' });
        }
        const machineOrders = yield MachineOrders_1.default.find({ machine: singleMachine._id }).sort({ date: -1 });
        res.status(200).json({ singleMachine, machineOrders });
    }
    catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});
exports.getMachineDetailsandMachineOrders = getMachineDetailsandMachineOrders;
/**
 * To delete machine order
 */
const deleteMachineOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteQuery = { _id: req.params.id };
        const singleMachineOrder = yield MachineOrders_1.default.findById(deleteQuery);
        if (!singleMachineOrder) {
            return res.status(404).json({ error: 'Machine Order id could not found' });
        }
        const deleteSingleMachineOrder = yield MachineOrders_1.default.findByIdAndDelete(deleteQuery);
        res.status(200).json({ message: 'Machine Order Deleted Successfully', deleteSingleMachineOrder });
    }
    catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});
exports.deleteMachineOrder = deleteMachineOrder;
