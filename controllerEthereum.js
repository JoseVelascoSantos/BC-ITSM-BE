"use strict";

const ethereumDAO = require("./ethereumDAO");
const HttpStatus = require('http-status-codes');

const dao = new ethereumDAO();

class ControllerEthereum {
    provider = (request, response, next) => {
        dao.getProvider( (err, result) => {
            if (err) next(err);
            else {
                response.status(HttpStatus.OK);
                response.send(result);
            }
        });
    }

    sla = (request, response, next) => {
        dao.getSLA(request.query.id, (err, result) => {
            if (err) next(err);
            else {
                response.status(HttpStatus.OK);
                response.send(result);
            }
        });
    }
}

module.exports = ControllerEthereum;
