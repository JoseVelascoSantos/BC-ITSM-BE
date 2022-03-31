"use strict";

class companiesDAO {
    constructor(pool) {
        this.pool = pool;
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

    readCompany(cif, callback) {
        this.pool.getConnection((err, connection) => {
            if (err) callback(new Error());
            else {
                connection.query(
                    'SELECT * FROM company WHERE cif = ?',
                    cif,
                    (err, rows) => {
                        connection.release();
                        if (err || rows.length === 0) callback(new Error());
                        else callback(null, rows[0]);
                    }
                );

            }
        });
    }

    readCompanies(callback) {
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

    updateCompany(company, callback) {
        this.pool.getConnection((err, connection) => {
            if (err) callback(new Error());
            else {
                connection.query(
                    'UPDATE company SET name = ?, address = ? WHERE cif = ?',
                    [company.name, company.address, company.cif],
                    (err) => {
                        connection.release();
                        if (err) callback(new Error());
                        else callback(null, true);
                    }
                );

            }
        });
    }

    deleteCompany(cif, callback) {
        this.pool.getConnection((err, connection) => {
            if (err) callback(new Error());
            else {
                connection.query(
                    'DELETE FROM company WHERE cif = ?',
                    cif,
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

module.exports = companiesDAO;
