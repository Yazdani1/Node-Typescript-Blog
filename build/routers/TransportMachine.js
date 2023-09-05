"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { createMachine } = require('../controllers/TransportMachine');
const router = (0, express_1.Router)();
/**
 * To create machine
 */
router.post('/create-machine', createMachine);
module.exports = router;
