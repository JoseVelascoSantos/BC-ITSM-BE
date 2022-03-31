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
                    'INSERT INTO customer VALUES (?, ?, ?, ?, ?, ?, ?, ? ,?, ?, ?)',
                    [customer.ethAddress, customer.dni, customer.name, customer.surname, customer.email, customer.phone, Number(customer.gender), customer.province, customer.city, customer.country, customer.company],
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
                    'SELECT * FROM customer WHERE ethAddress = ?',
                    ethAddress,
                    (err, rows) => {
                        connection.release();
                        if (err || rows.length === 0) callback(new Error());
                        else {
                            if (rows[0]) rows[0].gender = rows[0].gender[0];
                            callback(null, rows[0]);
                        }
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
                        else {
                            rows.map(row => row.gender = row.gender[0]);
                            callback(null, rows);
                        }
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
                    'UPDATE customer SET DNI = ?, name = ?, surname = ?, email = ?, phone = ?, gender = ?, province = ?, city = ?, country = ?, company = ? WHERE ethAddress = ?',
                    [customer.dni, customer.name, customer.surname, customer.email, customer.phone, Number(customer.gender), customer.province, customer.city, customer.country, customer.company, customer.ethAddress],
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
                    'DELETE FROM customer WHERE ethAddress = ?',
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
