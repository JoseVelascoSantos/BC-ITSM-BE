"use strict";

const theGraphDAO = require("../daos/theGraphDAO");
const HttpStatus = require('http-status-codes');

const dao = new theGraphDAO();

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

class TheGraphController {

    readSLAByID = async (request, response, next) => {
        await dao.readSLAByID({
            id: Number(request.params.id)
        }, callBack(response, next));
    }

    readSLAsByDateRange = async (request, response, next) => {
        await dao.readSLAsByDateRange({
            start: Number(request.query.start),
            end: Number(request.query.end),
        }, callBack(response, next));
    }

    readSLAsWithServiceBySLADateRange = async (request, response, next) => {
        await dao.readSLAsWithFeatureBySLADateRange({
            feature: 'service',
            featureId: Number(request.params.id),
            start: Number(request.query.start),
            end: Number(request.query.end),
        }, callBack(response, next));
    }

    readSLAsWithServicesBySLADateRange = async (request, response, next) => {
        await dao.readFeaturesBySLADateRange({
            feature: 'service',
            start: Number(request.query.start),
            end: Number(request.query.end),
        }, callBack(response, next));
    }

    readSLAsWithExtraServiceBySLADateRange = async (request, response, next) => {
        await dao.readSLAsWithFeatureBySLADateRange({
            feature: 'extraService',
            featureId: Number(request.params.id),
            start: Number(request.query.start),
            end: Number(request.query.end),
        }, callBack(response, next));
    }

    readSLAsWithExtraServicesBySLADateRange = async (request, response, next) => {
        await dao.readFeaturesBySLADateRange({
            feature: 'extraService',
            start: Number(request.query.start),
            end: Number(request.query.end),
        }, callBack(response, next));
    }

    readSLAsWithServiceSpaceBySLADateRange = async (request, response, next) => {
        await dao.readSLAsWithFeatureBySLADateRange({
            feature: 'serviceSpace',
            featureId: Number(request.params.id),
            start: Number(request.query.start),
            end: Number(request.query.end),
        }, callBack(response, next));
    }

    readSLAsWithServiceSpacesBySLADateRange = async (request, response, next) => {
        await dao.readFeaturesBySLADateRange({
            feature: 'serviceSpace',
            start: Number(request.query.start),
            end: Number(request.query.end),
        }, callBack(response, next));
    }

    readSLAsWithLicenseBySLADateRange = async (request, response, next) => {
        await dao.readSLAsWithFeatureBySLADateRange({
            feature: 'license',
            featureId: Number(request.params.id),
            start: Number(request.query.start),
            end: Number(request.query.end),
        }, callBack(response, next));
    }

    readSLAsWithLicensesBySLADateRange = async (request, response, next) => {
        await dao.readFeaturesBySLADateRange({
            feature: 'license',
            start: Number(request.query.start),
            end: Number(request.query.end),
        }, callBack(response, next));
    }

    readSLAsWithRevisionReportBySLADateRange = async (request, response, next) => {
        await dao.readSLAsWithFeatureBySLADateRange({
            feature: 'revisionReport',
            featureId: Number(request.params.id),
            start: Number(request.query.start),
            end: Number(request.query.end),
        }, callBack(response, next));
    }

    readSLAsWithRevisionReportsBySLADateRange = async (request, response, next) => {
        await dao.readFeaturesBySLADateRange({
            feature: 'revisionReport',
            start: Number(request.query.start),
            end: Number(request.query.end),
        }, callBack(response, next));
    }

    readSLAsWithBillingBySLADateRange = async (request, response, next) => {
        await dao.readSLAsWithFeatureBySLADateRange({
            feature: 'billing',
            featureId: Number(request.params.id),
            start: Number(request.query.start),
            end: Number(request.query.end),
        }, callBack(response, next));
    }

    readSLAsWithBillingsBySLADateRange = async (request, response, next) => {
        await dao.readFeaturesBySLADateRange({
            feature: 'billing',
            start: Number(request.query.start),
            end: Number(request.query.end),
        }, callBack(response, next));
    }

    readSLAsWithBillingMethodBySLADateRange = async (request, response, next) => {
        await dao.readSLAsWithFeatureBySLADateRange({
            feature: 'billingMethod',
            featureId: Number(request.params.id),
            start: Number(request.query.start),
            end: Number(request.query.end),
        }, callBack(response, next));
    }

    readSLAsWithBillingMethodsBySLADateRange = async (request, response, next) => {
        await dao.readFeaturesBySLADateRange({
            feature: 'billingMethod',
            start: Number(request.query.start),
            end: Number(request.query.end),
        }, callBack(response, next));
    }
}

module.exports = TheGraphController;
