"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const MachineOrders_1 = require("../controllers/MachineOrders");
//Validation
const { validateTransportMachineOrders } = require('../validators/MachineOrdersValidation');
const { runValidation } = require('../validators/Index');
/**
 * To create machine orders
 */
router.post('/create-machine-orders', validateTransportMachineOrders, runValidation, MachineOrders_1.createMachineOrders);
/**
 * To get all the machine orders
 */
router.get('/all-machine-orders', MachineOrders_1.getAllMachineOrders);
/**
 * To delete single machine orders
 */
router.delete('/delete-machine-order/:id', MachineOrders_1.deleteMachineOrder);
/**
 * To get machine orders for single machine
 */
router.get('/machine-details/:slug', MachineOrders_1.getMachineDetailsandMachineOrders);
module.exports = router;
