"use strict";

const config = require("../config");
const mysql = require("mysql");
const companiesDAO = require("../daos/companiesDAO");
const HttpStatus = require('http-status-codes');

const pool = mysql.createPool(config.mysqlConfig);

const dao = new companiesDAO(pool);

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

class CompaniesController {

    createCompany = (request, response, next) => {
        dao.createCompany({
            cif: request.query.cif,
            name: request.query.name,
            address: request.query.address,
        }, callBack(response, next));
    }
    readCompany = (request, response, next) => {
        dao.readCompany(request.params.cif, callBack(response, next));
    }

    readCompanies = (request, response, next) => {
        dao.readCompanies(callBack(response, next));
    }

    updateCompany = (request, response, next) => {
        dao.updateCompany({
            cif: request.params.cif,
            name: request.query.name,
            address: request.query.address,
        }, callBack(response, next));
    }

    deleteCompany = (request, response, next) => {
        dao.deleteCompany(request.params.cif, callBack(response, next));
    }
}

module.exports = CompaniesController;
