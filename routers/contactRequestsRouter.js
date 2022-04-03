"use strict";

const express = require("express");
const router = express.Router();
const ContactRequestsController = require('../controllers/contactRequestsController');

const contactRequestsController = new ContactRequestsController();

router.post('/', contactRequestsController.createContactRequest);
router.get('/', contactRequestsController.readContactRequests);
router.delete('/:id', contactRequestsController.deleteContactRequest);

module.exports = { router };
