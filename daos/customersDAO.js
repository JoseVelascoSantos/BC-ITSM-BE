"use strict";

class customersDAO {
    constructor(pool) {
        this.pool = pool;
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

    readCustomer(ethAddress, callback) {
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

    readCustomers(callback) {
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

    updateCustomer(customer, callback) {
        this.pool.getConnection((err, connection) => {
            if (err) callback(new Error());
            else {
                connection.query(
                    'UPDATE customer SET DNI = ?, name = ?, surname = ?, email = ?, phone = ?, gender = ?, province = ?, city = ?, country = ? WHERE eth_address = ?',
                    [customer.dni, customer.name, customer.surname, customer.email, customer.phone, 0, customer.province, customer.city, 0, customer.ethAddress],
                    (err) => {
                        connection.release();
                        if (err) callback(new Error());
                        else callback(null, true);
                    }
                );

            }
        });
    }

    deleteCustomer(ethAddress, callback) {
        this.pool.getConnection((err, connection) => {
            if (err) callback(new Error());
            else {
                connection.query(
                    'DELETE FROM customer WHERE eth_address = ?',
                    ethAddress,
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

module.exports = customersDAO;
