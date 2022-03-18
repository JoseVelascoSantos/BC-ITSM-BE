"use strict";

const express = require("express");
const router = express.Router();
const ControllerEthereum = require('./controllerEthereum')
const controllerEthereum = new ControllerEthereum();

router.get('/bc/provider', controllerEthereum.provider);
router.get('/bc/sla/:id', controllerEthereum.sla);

module.exports = { router };
