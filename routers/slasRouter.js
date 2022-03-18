"use strict";

const express = require("express");
const router = express.Router();
const SLAsController = require('../controllers/slasController');

const slasController = new SLAsController();

router.post('/', slasController.createSLA);
router.get('/', slasController.readSLAs);
router.get('/:id', slasController.readSLA);
router.put('/:id', slasController.updateSLA);
router.delete('/:id', slasController.deleteSLA);

module.exports = { router };
