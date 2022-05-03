"use strict";

const express = require("express");
const router = express.Router();
const TheGraphController = require('../controllers/theGraphController');

const theGraphController = new TheGraphController();

router.get('/slas', theGraphController.readSLAsByDateRange);
router.get('/services/:id', theGraphController.readSLAsWithServiceBySLADateRange);
router.get('/services/', theGraphController.readSLAsWithServicesBySLADateRange);
router.get('/extraServices/:id', theGraphController.readSLAsWithExtraServiceBySLADateRange);
router.get('/extraServices/', theGraphController.readSLAsWithExtraServicesBySLADateRange);
router.get('/serviceSpaces/:id', theGraphController.readSLAsWithServiceSpaceBySLADateRange);
router.get('/serviceSpaces/', theGraphController.readSLAsWithServiceSpacesBySLADateRange);
router.get('/licenses/:id', theGraphController.readSLAsWithLicenseBySLADateRange);
router.get('/licenses/', theGraphController.readSLAsWithLicensesBySLADateRange);
router.get('/revisionReports/:id', theGraphController.readSLAsWithRevisionReportBySLADateRange);
router.get('/revisionReports/', theGraphController.readSLAsWithRevisionReportsBySLADateRange);
router.get('/billings/:id', theGraphController.readSLAsWithBillingBySLADateRange);
router.get('/billings/', theGraphController.readSLAsWithBillingsBySLADateRange);
router.get('/billingMethods/:id', theGraphController.readSLAsWithBillingMethodBySLADateRange);
router.get('/billingMethods/', theGraphController.readSLAsWithBillingMethodsBySLADateRange);

module.exports = { router };
