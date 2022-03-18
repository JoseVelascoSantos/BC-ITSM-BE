"use strict";

const config = require("../config");
const mysql = require("mysql");
const customersDAO = require("../daos/customersDAO");
const HttpStatus = require('http-status-codes');

const pool = mysql.createPool(config.mysqlConfig);

const dao = new customersDAO(pool);

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

class CustomersController {

    createCustomer = (request, response, next) => {
        dao.createCustomer({
            ethAddress: request.query.ethAddress,
            dni: request.query.dni,
            name: request.query.name,
            surname: request.query.surname,
            email: request.query.email,
            phone: request.query.phone,
            province: request.query.province,
            city: request.query.city,
        }, callBack(response, next));
    }

    readCustomer = (request, response, next) => {
        dao.readCustomer(request.params.ethAddress, callBack(response, next));
    }

    readCustomers = (request, response, next) => {
        dao.readCustomers(callBack(response, next));
    }

    updateCustomer = (request, response, next) => {
        dao.updateCustomer({
            ethAddress: request.params.ethAddress,
            dni: request.query.dni,
            name: request.query.name,
            surname: request.query.surname,
            email: request.query.email,
            phone: request.query.phone,
            province: request.query.province,
            city: request.query.city,
        }, callBack(response, next));
    }

    deleteCustomer = (request, response, next) => {
        dao.deleteCustomer(request.params.ethAddress, callBack(response, next));
    }
}

module.exports = CustomersController;
