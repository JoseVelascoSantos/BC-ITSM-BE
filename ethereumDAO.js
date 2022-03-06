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
            else callback(null, result);
        });
    }
}

module.exports = ethereumDAO;
