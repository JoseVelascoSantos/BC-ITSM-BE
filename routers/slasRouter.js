"use strict";

const express = require("express");
const router = express.Router();
const SLAsController = require('../controllers/slasController');

const slasController = new SLAsController();

router.post('/', slasController.createSLA);
router.get('/', slasController.readSLAs);
router.get('/:id', slasController.readSLA);

module.exports = { router };
