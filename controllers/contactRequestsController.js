"use strict";

const config = require("../config");
const mysql = require("mysql");
const contactRequestsDAO = require("../daos/contactRequestsDAO");
const HttpStatus = require('http-status-codes');

const pool = mysql.createPool(config.mysqlConfig);

const dao = new contactRequestsDAO(pool);

const callBack = (response, next) => (err, result) => {
    if (err) next(err);
    else if (!result) {
        //TODO Send valid error code
        response.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
    } else {
        response.status(HttpStatus.OK);

        //TODO This is just for develop
        response.set('Access-Control-Allow-Origin', '*');

        response.send(result);
    }
};

class ContactRequestsController {

    createContactRequest = (request, response, next) => {
        dao.createContactRequest({
            firstName: request.query.firstName,
            lastName: request.query.lastName,
            email: request.query.email,
            ethAddress: request.query.ethAddress ?? null,
            subject: request.query.subject,
            message: request.query.message,
        }, callBack(response, next));
    }

    readContactRequests = (request, response, next) => {
        dao.readContactRequests(callBack(response, next));
    }

    deleteContactRequest = (request, response, next) => {
        dao.deleteContactRequest(request.params.id, callBack(response, next));
    }
}

module.exports = ContactRequestsController;
