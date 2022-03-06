"use strict";

class DAO {
    constructor(pool) {
        this.pool = pool;
    }

    getCustomers(callback) {
        this.pool.getConnection((err, connection) => {
            if (err) callback(new Error());
            else {
                connection.query(
                    'SELECT * FROM customer',
                    (err, rows) => {
                        connection.release();
                        if (err) callback(new Error());
                        else callback(null, rows);
                    }
                );

            }
        });
    }

    getCustomer(ethAddress, callback) {
        this.pool.getConnection((err, connection) => {
            if (err) callback(new Error());
            else {
                connection.query(
                    'SELECT * FROM customer WHERE eth_address = ?',
                    ethAddress,
                    (err, rows) => {
                        connection.release();
                        if (err) callback(new Error());
                        else callback(null, rows[0]);
                    }
                );

            }
        });
    }

    getCompanies(callback) {
        this.pool.getConnection((err, connection) => {
            if (err) callback(new Error());
            else {
                connection.query(
                    'SELECT * FROM company',
                    (err, rows) => {
                        connection.release();
                        if (err) callback(new Error());
                        else callback(null, rows);
                    }
                );

            }
        });
    }

    getCompany(cif, callback) {
        this.pool.getConnection((err, connection) => {
            if (err) callback(new Error());
            else {
                connection.query(
                    'SELECT * FROM company WHERE cif = ?',
                    cif,
                    (err, rows) => {
                        connection.release();
                        if (err) callback(new Error());
                        else callback(null, rows[0]);
                    }
                );

            }
        });
    }

    getSLAs(callback) {
        this.pool.getConnection((err, connection) => {
            if (err) callback(new Error());
            else {
                connection.query(
                    'SELECT * FROM sla',
                    (err, rows) => {
                        connection.release();
                        if (err) callback(new Error());
                        else callback(null, rows);
                    }
                );

            }
        });
    }

    getSLA(id, callback) {
        this.pool.getConnection((err, connection) => {
            if (err) callback(new Error());
            else {
                connection.query(
                    'SELECT * FROM sla WHERE id = ?',
                    id,
                    (err, rows) => {
                        connection.release();
                        if (err) callback(new Error());
                        else callback(null, rows[0]);
                    }
                );

            }
        });
    }
}

module.exports = DAO;
