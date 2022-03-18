"use strict";

const express = require("express");
const router = express.Router();
const CustomerController = require('../controllers/customersController');

const customerController = new CustomerController();

router.post('/', customerController.createCustomer);
router.get('/', customerController.readCustomers);
router.get('/:ethAddress', customerController.readCustomer);
router.put('/:ethAddress', customerController.updateCustomer);
router.delete('/:ethAddress', customerController.deleteCustomer);

module.exports = { router };
