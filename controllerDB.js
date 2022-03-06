"use strict";

const config = require("./config");
const mysql = require("mysql");
const dbDAO = require("./dbDAO");
const HttpStatus = require('http-status-codes');

const pool = mysql.createPool(config.mysqlConfig);

const dao = new dbDAO(pool);

class ControllerDB {

    constructor(pool) {
        this.pool = pool;
    }

    customers = (request, response, next) => {
        dao.getCustomers((err, result) => {
            if (err) next(err);
            else {
                response.status(HttpStatus.OK);
                response.send({customers: result});
            }
        });
    }

    customer = (request, response, next) => {
        dao.getCustomer(request.query.ethAddress, (err, result) => {
            if (err) next(err);
            else if (!result) {
                response.sendStatus(HttpStatus.NOT_FOUND);
            } else {
                response.status(HttpStatus.OK);
                response.send(result);
            }
        });
    }

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
        }, (err, result) => {
            if (err) next(err);
            else if (!result) {
                response.sendStatus(HttpStatus.NOT_FOUND);
            } else {
                response.status(HttpStatus.OK);
                response.send(result);
            }
        });
    }

    companies = (request, response, next) => {
        dao.getCompanies((err, result) => {
            if (err) next(err);
            else {
                response.status(HttpStatus.OK);
                response.send({companies: result});
            }
        });
    }

    company = (request, response, next) => {
        dao.getCompany(request.query.cif, (err, result) => {
            if (err) next(err);
            else if (!result) {
                response.sendStatus(HttpStatus.NOT_FOUND);
            } else {
                response.status(HttpStatus.OK);
                response.send(result);
            }
        });
    }

    createCompany = (request, response, next) => {
        dao.createCompany({
            cif: request.query.cif,
            name: request.query.name,
            address: request.query.address,
        }, (err, result) => {
            if (err) next(err);
            else if (!result) {
                response.sendStatus(HttpStatus.NOT_FOUND);
            } else {
                response.status(HttpStatus.OK);
                response.send(result);
            }
        });
    }

    slas = (request, response, next) => {
        dao.getSLAs((err, result) => {
            if (err) next(err);
            else {
                response.status(HttpStatus.OK);
                response.send({slas: result});
            }
        });
    }

    sla = (request, response, next) => {
        dao.getSLA(request.query.id, (err, result) => {
            if (err) next(err);
            else if (!result) {
              response.sendStatus(HttpStatus.NOT_FOUND);
            } else {
                dao.getCustomer(result.customer, (err, _result) => {
                    if (err) next(err);
                    else if (!_result) {
                        response.sendStatus(HttpStatus.NOT_FOUND);
                    } else {
                        result.customer = _result;
                        dao.getCompany(result.company, (err, __result) => {
                            if (err) next(err);
                            else if (!__result) {
                                response.sendStatus(HttpStatus.NOT_FOUND);
                            } else {
                                result.company = __result;
                                response.status(HttpStatus.OK);
                                response.send(result);
                            }
                        });
                    }
                });
            }
        });
    }

    createSLA = (request, response, next) => {
        dao.createSLA({
            id: request.query.id,
            customer: request.query.customer,
            company: request.query.company,
        }, (err, result) => {
            if (err) next(err);
            else if (!result) {
                response.sendStatus(HttpStatus.NOT_FOUND);
            } else {
                response.status(HttpStatus.OK);
                response.send(result);
            }
        });
    }

}

module.exports = ControllerDB;
