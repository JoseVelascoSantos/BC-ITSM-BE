const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const config = require('./config');
const session = require("express-session");
const mysqlSession = require('express-mysql-session');
const mysqlStore = mysqlSession(session);
const router = require('./router');
const customersRouter = require('./routers/customersRouter');
const companyRouter = require('./routers/companiesRouter');
const slaRouter = require('./routers/slasRouter');
const contactRequestsRouter = require('./routers/contactRequestsRouter');
const bodyParser = require('body-parser');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));

const sessionStore = new mysqlStore(config.mysqlConfig);

app.use('/', router.router);
app.use('/customers', customersRouter.router);
app.use('/companies', companyRouter.router);
app.use('/slas', slaRouter.router);
app.use('/contactRequests', contactRequestsRouter.router);

app.listen(config.port, function (err) {
    if (err) {
        console.log('ERROR!!!');
    } else {
        console.log(`Start at ${config.port}`);
    }
});

module.exports = app;
