"use strict";

const Web3 = require("web3");
const config = require("./config");

class ethereumDAO {
    constructor() {
        const web3 = new Web3(new Web3.providers.HttpProvider(config.ethereumHost));
        this.contract = new web3.eth.Contract(config.abi, config.contractAddress);
    }

    getProvider(callback) {
        this.contract.methods.provider().call(undefined, (err, result) => {
            if (err) callback(new Error());
            else callback(null, result);
        });
    }

    getSLA(id, callback) {
        this.contract.methods.getSLA(id).call(undefined, (err, result) => {
            if (err) callback(new Error());
            else callback(null, {
                id: Number(id),
                customer: result[0],
                startDate: new Date(Number(result[1])),
                automaticRenewal: result[2],
                service: {
                    name: result[3][0],
                    description: result[3][1],
                    price: Number(result[3][2]),
                    pricePeriodicity: Number(result[3][3]),
                },
                extraService: {
                    name: result[4][0],
                    description: result[4][1],
                    price: Number(result[4][2]),
                    pricePeriodicity: Number(result[4][3]),
                },
                serviceLevel: result[5],
                serviceSpace: {
                    name: result[6][0],
                    startTime: result[6][1],
                    endTime: result[6][2],
                    price: Number(result[6][3]),
                    pricePeriodicity: Number(result[6][4]),
                },
                license: result[7],
                revisionReport: {
                    name: result[8][0],
                    price: Number(result[8][1]),
                    pricePeriodicity: Number(result[8][2]),
                },
                billing: {
                    name: result[9][0],
                    periodicity: Number(result[9][1]),
                },
                billingMethod: Number(result[10]),
            });
        });
    }
}

module.exports = ethereumDAO;
