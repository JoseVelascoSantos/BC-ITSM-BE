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
                        if (err || rows.length === 0) callback(new Error());
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
}

module.exports = customersDAO;
