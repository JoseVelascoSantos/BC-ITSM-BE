"use strict";

class contactRequestsDAO {
    constructor(pool) {
        this.pool = pool;
    }

    createContactRequest(request, callback) {
        this.pool.getConnection((err, connection) => {
            if (err) callback(new Error());
            else {
                connection.query(
                    'INSERT INTO contactRequest (firstName, lastName, email, ethAddress, subject, message) VALUES (?, ?, ?, ?, ?, ?)',
                    [request.firstName, request.lastName, request.email, request.ethAddress, request.subject, request.message],
                    (err) => {
                        connection.release();
                        if (err) callback(new Error());
                        else callback(null, true);
                    }
                );

            }
        });
    }

    readContactRequests(callback) {
        this.pool.getConnection((err, connection) => {
            if (err) callback(new Error());
            else {
                connection.query(
                    'SELECT * FROM contactRequest',
                    (err, rows) => {
                        connection.release();
                        if (err) callback(new Error());
                        else callback(null, rows);
                    }
                );

            }
        });
    }

    deleteContactRequest(id, callback) {
        this.pool.getConnection((err, connection) => {
            if (err) callback(new Error());
            else {
                connection.query(
                    'DELETE FROM contactRequest WHERE id = ?',
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

module.exports = contactRequestsDAO;
