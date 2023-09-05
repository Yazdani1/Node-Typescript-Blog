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
exports.deleteSingleMachine = exports.getAllMachineLists = exports.createMachine = void 0;
const uuid_1 = require("uuid");
const TransportMachine_1 = __importDefault(require("../models/TransportMachine"));
/**
 * To create machine
 * @param req
 * @param res
 * @returns
 */
const createMachine = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { workplace, name, description, active, users } = req.body;
        const transportMachineDetails = {
            workplace,
            name,
            description,
            active,
            users,
            slug: (0, uuid_1.v4)(),
        };
        const saveTransportMachine = yield TransportMachine_1.default.create(transportMachineDetails);
        res.status(201).json(saveTransportMachine);
    }
    catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});
exports.createMachine = createMachine;
/**
 * To get all the created machine lists
 */
const getAllMachineLists = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allMachineLists = yield TransportMachine_1.default.find().sort({ date: -1 });
        res.status(200).json(allMachineLists);
    }
    catch (error) {
        // Pass the error to the next middleware or error handler
        next(error);
    }
});
exports.getAllMachineLists = getAllMachineLists;
// export const getAllMachineLists = async (req: Request, res: Response) => {
//   try {
//     const allMachineLists = await TransportMachine.find().sort({ date: -1 });
//     res.status(200).json(allMachineLists);
//   } catch (error) {
//     res.status(500).json({ error: 'Something went wrong' });
//   }
// };
const deleteSingleMachine = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteQuery = { _id: req.params.id };
        const singleMachine = yield TransportMachine_1.default.findById(deleteQuery);
        if (!singleMachine) {
            return res.status(404).json({ error: 'Machine id could not found' });
        }
        const deleteSingleMachine = yield TransportMachine_1.default.findByIdAndDelete(deleteQuery);
        res.status(200).json({ message: 'Machine Deleted Successfully', deleteSingleMachine });
    }
    catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});
exports.deleteSingleMachine = deleteSingleMachine;
