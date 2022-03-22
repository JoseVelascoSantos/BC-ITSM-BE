"use strict";

class customersDAO {
    constructor(pool) {
        this.pool = pool;
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

    readSLA(id, callback) {
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

    readSLAs(callback) {
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

    updateSLA(sla, callback) {
        this.pool.getConnection((err, connection) => {
            if (err) callback(new Error());
            else {
                connection.query(
                    'UPDATE sla SET customer = ?, company = ?, price = ? WHERE id = ?',
                    [sla.customer, sla.company, Number(sla.price), sla.id],
                    (err) => {
                        connection.release();
                        if (err) callback(new Error());
                        else callback(null, true);
                    }
                );

            }
        });
    }

    deleteSLA(id, callback) {
        this.pool.getConnection((err, connection) => {
            if (err) callback(new Error());
            else {
                connection.query(
                    'DELETE FROM sla WHERE id = ?',
                    id,
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
