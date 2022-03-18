"use strict";

const config = require("../config");
const mysql = require("mysql");
const customersDAO = require("../daos/customersDAO");
const companiesDAO = require("../daos/companiesDAO");
const slasDAO = require("../daos/slasDAO");
const HttpStatus = require('http-status-codes');

const pool = mysql.createPool(config.mysqlConfig);

const customerDAO = new customersDAO(pool);
const companyDAO = new companiesDAO(pool);
const slaDAO = new slasDAO(pool);

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

class SLAsController {

    createSLA = (request, response, next) => {
        slaDAO.createSLA({
            id: request.query.id,
            customer: request.query.customer,
            company: request.query.company,
            price: request.query.price,
        }, callBack(response, next));
    }

    readSLA = (request, response, next) => {
        slaDAO.readSLA(request.params.id, (err, result) => {
            if (err) next(err);
            else if (!result) {
                response.sendStatus(HttpStatus.NOT_FOUND);
            } else {
                customerDAO.readCustomer(result.customer, (err, _result) => {
                    if (err) next(err);
                    else if (!_result) {
                        response.sendStatus(HttpStatus.NOT_FOUND);
                    } else {
                        result.customer = _result;
                        companyDAO.readCompany(result.company, (err, __result) => {
                            if (err) next(err);
                            else if (!__result) {
                                response.sendStatus(HttpStatus.NOT_FOUND);
                            } else {
                                result.company = __result;
                                response.status(HttpStatus.OK);

                                //TODO This is just for develop
                                response.set('Access-Control-Allow-Origin', '*');

                                response.send(result);
                            }
                        });
                    }
                });
            }
        });
    }

    readSLAs = (request, response, next) => {
        slaDAO.readSLAs(callBack(response, next));
    }

    updateSLA = (request, response, next) => {
        slaDAO.updateSLA({
            id: request.params.id,
            customer: request.query.customer,
            company: request.query.company,
            price: request.query.price,
        }, callBack(response, next));
    }

    deleteSLA = (request, response, next) => {
        slaDAO.deleteSLA(request.params.id, callBack(response, next));
    }
}

module.exports = SLAsController;
