"use strict";

const express = require("express");
const router = express.Router();
const ControllerDB = require('./controllerDB')
const ControllerEthereum = require('./controllerEthereum')
const controllerDB = new ControllerDB();
const controllerEthereum = new ControllerEthereum();

router.get('/db/customers', controllerDB.customers);
router.get('/db/customer', controllerDB.customer);
router.post('/db/customer', controllerDB.createCustomer);
router.get('/db/companies', controllerDB.companies);
router.get('/db/company', controllerDB.company);
router.post('/db/company', controllerDB.createCompany);
router.get('/db/slas', controllerDB.slas);
router.get('/db/sla', controllerDB.sla);
router.post('/db/sla', controllerDB.createSLA);
router.get('/bc/provider', controllerEthereum.provider);
router.get('/bc/sla', controllerEthereum.sla);

module.exports = { router };
