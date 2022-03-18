"use strict";

const express = require("express");
const router = express.Router();
const CompaniesController = require('../controllers/companiesController');

const companiesController = new CompaniesController();

router.post('/', companiesController.createCompany);
router.get('/', companiesController.readCompanies);
router.get('/:cif', companiesController.readCompany);
router.put('/:cif', companiesController.updateCompany);
router.delete('/:cif', companiesController.deleteCompany);

module.exports = { router };
