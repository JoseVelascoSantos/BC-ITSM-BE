"use strict";

class dbDAO {
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

    createCustomer(customer, callback) {
        this.pool.getConnection((err, connection) => {
            if (err) callback(new Error());
            else {
                connection.query(
                    'INSERT INTO customer VALUES (?, ?, ?, ?, ?, ?, ?, ? ,?, ?)',
                    [customer.ethAddress, customer.dni, customer.name, customer.surname, customer.email, customer.phone, 0, customer.province, customer.city, 0],
                    (err) => {
                        connection.release();
                        if (err) callback(new Error());
                        else callback(null, true);
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

    createCompany(company, callback) {
        this.pool.getConnection((err, connection) => {
            if (err) callback(new Error());
            else {
                connection.query(
                    'INSERT INTO company VALUES (?, ?, ?)',
                    [company.cif, company.name, company.address],
                    (err) => {
                        connection.release();
                        if (err) callback(new Error());
                        else callback(null, true);
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

    createSLA(sla, callback) {
        this.pool.getConnection((err, connection) => {
            if (err) callback(new Error());
            else {
                connection.query(
                    'INSERT INTO sla VALUES (?, ?, ?, ?)',
                    [sla.id, sla.customer, sla.company, sla.price],
                    (err) => {
                        connection.release();
                        if (err) callback(new Error());
                        else callback(null, true);
                    }
                );

            }
        });
    }
}

module.exports = dbDAO;
