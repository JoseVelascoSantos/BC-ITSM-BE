"use strict";

const config = require("./config");
const mysql = require("mysql");
const DAO = require("./dao");
const HttpStatus = require('http-status-codes');

// Create a connection pool to the MySQL database
const pool = mysql.createPool(config.mysqlConfig);

const dao = new DAO(pool);

class Controller{

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

}

module.exports = Controller;
