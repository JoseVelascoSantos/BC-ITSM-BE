"use strict";

const express = require("express");
const router = express.Router();
const Controller = require('./controller')
const controller = new Controller();

router.get('/customers', controller.customers);
router.get('/customer', controller.customer);
router.get('/companies', controller.companies);
router.get('/company', controller.company);
router.get('/slas', controller.slas);
router.get('/sla', controller.sla);

module.exports = { router };
