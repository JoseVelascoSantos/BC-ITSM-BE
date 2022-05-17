"use strict";

const axios = require('axios');
const config = require("../config");

class theGraphDAO {

    _secondsToMilliseconds(seconds) {
        return seconds * 1000;
    }

    _millisecondsToSeconds(milliseconds) {
        return Math.round(milliseconds / 1000);
    }

    async readSLAByID(request, callback) {
        let query = {query: `query { slas(where : {id: "${request.id}"}) { id customer creationDate startDate automaticRenewal service { id } extraService { id } serviceSpace { id } license { id } revisionReport { id } billing { id } billingMethod { id } totalPrice } }`};
        const response = await axios.post(config.theGraphAPI, query);
        if (response.data.data) {
            response.data.data.slas[0].creationDate = this._secondsToMilliseconds(response.data.data.slas[0].creationDate);
            callback(null, response.data.data.slas[0]);
        } else callback(new Error());
    }

    async readSLAsByDateRange(request, callback) {
        let query;

        if (request.start && request.end)
            query = {query: `query { slas(where: {creationDate_gte: "${this._millisecondsToSeconds(request.start)}", creationDate_lte: "${this._millisecondsToSeconds(request.end)}"}) { id creationDate } }`};
        else if (request.start)
            query = {query: `query { slas(where: {creationDate_gte: "${this._millisecondsToSeconds(request.start)}"}) { id creationDate } }`};
        else if (request.end)
            query = {query: `query { slas(where: {creationDate_lte: "${this._millisecondsToSeconds(request.end)}"}) { id creationDate } }`};
        else
            query = {query: `query { slas { id creationDate } }`};
        const response = await axios.post(config.theGraphAPI, query);
        if (response.data.data) {
            response.data.data.slas.map(sla => sla.creationDate = this._secondsToMilliseconds(sla.creationDate));
            callback(null, response.data.data);
        } else callback(new Error());
    }

    async readSLAsWithFeatureBySLADateRange(request, callback) {
        let query;

        if (request.start && request.end)
            query = {query: `query { ${request.feature}s(where: { id: ${request.featureId} }) { id name slas(where: {creationDate_gte: "${this._millisecondsToSeconds(request.start)}", creationDate_lte: "${this._millisecondsToSeconds(request.end)}"}) { id creationDate } } }`};
        else if (request.start)
            query = {query: `query { ${request.feature}s(where: { id: ${request.featureId} }) { id name slas(where: {creationDate_gte: "${this._millisecondsToSeconds(request.start)}"}) { id creationDate } } }`};
        else if (request.end)
            query = {query: `query { ${request.feature}s(where: { id: ${request.featureId} }) { id name slas(where: {creationDate_lte: "${this._millisecondsToSeconds(request.end)}"}) { id creationDate } } }`};
        else
            query = {query: `query { ${request.feature}s(where: { id: ${request.featureId} }) { id name slas { id creationDate } } }`};
        const response = await axios.post(config.theGraphAPI, query);
        if (response.data.data) {
            response.data.data[request.feature + 's'].map(feature => feature.slas.map(sla => sla.creationDate = this._secondsToMilliseconds(sla.creationDate)));
            callback(null, response.data.data);
        } else callback(new Error());
    }

    async readFeaturesBySLADateRange(request, callback) {
        let query;

        if (request.start && request.end)
            query = {query: `query { ${request.feature}s { id name slas(where: {creationDate_gte: "${this._millisecondsToSeconds(request.start)}", creationDate_lte: "${this._millisecondsToSeconds(request.end)}"}) { id creationDate } } }`};
        else if (request.start)
            query = {query: `query { ${request.feature}s { id name slas(where: {creationDate_gte: "${this._millisecondsToSeconds(request.start)}"}) { id creationDate } } }`};
        else if (request.end)
            query = {query: `query { ${request.feature}s { id name slas(where: {creationDate_lte: "${this._millisecondsToSeconds(request.end)}"}) { id creationDate } } }`};
        else
            query = {query: `query { ${request.feature}s { id name slas { id creationDate } } }`};
        const response = await axios.post(config.theGraphAPI, query);
        if (response.data.data) {
            response.data.data[request.feature + 's'].map(feature => feature.slas.map(sla => sla.creationDate = this._secondsToMilliseconds(sla.creationDate)));
            callback(null, response.data.data);
        } else callback(new Error());
    }
}

module.exports = theGraphDAO;
