"use strict";

const config = require("./config");
const mysql = require("mysql");
const dbDAO = require("./dbDAO");
const HttpStatus = require('http-status-codes');

const pool = mysql.createPool(config.mysqlConfig);

const dao = new dbDAO(pool);

class ControllerDB {

}

module.exports = ControllerDB;
