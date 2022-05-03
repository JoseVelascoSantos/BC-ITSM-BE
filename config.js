"use strict"
module.exports = {
    mysqlConfig: {
        host: "localhost",
        user: "root",
        password: "12345678",
        database: "slinkV1",
        multipleStatements: true
    },
    port: 2000,
    contractAddress: '0xBB4792d84F31AB9C7AA5c537A2537Dc546a018c7',
    ethereumHost: 'https://rinkeby.infura.io/v3/81180162079b4ba49d02599e949fff5a',
    theGraphAPI: 'https://api.studio.thegraph.com/query/26123/slinkv6/3',
    abi: [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "customer",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "startDate",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "automaticRenewal",
                            "type": "bool"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "string",
                                    "name": "name",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "description",
                                    "type": "string"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "price",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "pricePeriodicity",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct SlinkV1.Service",
                            "name": "service",
                            "type": "tuple"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "string",
                                    "name": "name",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "description",
                                    "type": "string"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "price",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "pricePeriodicity",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct SlinkV1.Service",
                            "name": "extraService",
                            "type": "tuple"
                        },
                        {
                            "internalType": "string",
                            "name": "serviceLevel",
                            "type": "string"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "string",
                                    "name": "name",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "startTime",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "endTime",
                                    "type": "string"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "price",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "pricePeriodicity",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct SlinkV1.ServiceSpace",
                            "name": "serviceSpace",
                            "type": "tuple"
                        },
                        {
                            "internalType": "string",
                            "name": "license",
                            "type": "string"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "string",
                                    "name": "name",
                                    "type": "string"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "price",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "pricePeriodicity",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct SlinkV1.RevisionReport",
                            "name": "revisionReport",
                            "type": "tuple"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "string",
                                    "name": "name",
                                    "type": "string"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "periodicity",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct SlinkV1.Billing",
                            "name": "billing",
                            "type": "tuple"
                        },
                        {
                            "internalType": "uint256",
                            "name": "billingMethod",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct SlinkV1.SLA",
                    "name": "sla",
                    "type": "tuple"
                }
            ],
            "name": "addSLA",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                }
            ],
            "name": "getSLA",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "customer",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "startDate",
                            "type": "uint256"
                        },
                        {
                            "internalType": "bool",
                            "name": "automaticRenewal",
                            "type": "bool"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "string",
                                    "name": "name",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "description",
                                    "type": "string"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "price",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "pricePeriodicity",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct SlinkV1.Service",
                            "name": "service",
                            "type": "tuple"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "string",
                                    "name": "name",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "description",
                                    "type": "string"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "price",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "pricePeriodicity",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct SlinkV1.Service",
                            "name": "extraService",
                            "type": "tuple"
                        },
                        {
                            "internalType": "string",
                            "name": "serviceLevel",
                            "type": "string"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "string",
                                    "name": "name",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "startTime",
                                    "type": "string"
                                },
                                {
                                    "internalType": "string",
                                    "name": "endTime",
                                    "type": "string"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "price",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "pricePeriodicity",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct SlinkV1.ServiceSpace",
                            "name": "serviceSpace",
                            "type": "tuple"
                        },
                        {
                            "internalType": "string",
                            "name": "license",
                            "type": "string"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "string",
                                    "name": "name",
                                    "type": "string"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "price",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "pricePeriodicity",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct SlinkV1.RevisionReport",
                            "name": "revisionReport",
                            "type": "tuple"
                        },
                        {
                            "components": [
                                {
                                    "internalType": "string",
                                    "name": "name",
                                    "type": "string"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "periodicity",
                                    "type": "uint256"
                                }
                            ],
                            "internalType": "struct SlinkV1.Billing",
                            "name": "billing",
                            "type": "tuple"
                        },
                        {
                            "internalType": "uint256",
                            "name": "billingMethod",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct SlinkV1.SLA",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "provider",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
}
