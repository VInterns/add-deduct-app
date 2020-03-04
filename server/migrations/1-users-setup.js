"use strict";

const bcrypt = require('bcryptjs');

let collection = 'users';

module.exports.id = 'initial-users-setup';

module.exports.up = function (done) {

    let salt = bcrypt.genSaltSync();

    // Admin
    this.db
        .collection(collection)
        .insertOne({
            username: 'admin@app.com',
            password: bcrypt.hashSync('admin', salt),
            roles: ['admin']
        })

    // Salary Adjust
    this.db
        .collection(collection)
        .insertOne({
            username: 'salary-adjust@app.com',
            password: bcrypt.hashSync('salary', salt),
            roles: ['admin', 'sa']
        })

    // Overtime
    this.db
        .collection(collection)
        .insertOne({
            username: 'overtime@app.com',
            password: bcrypt.hashSync('over', salt),
            roles: ['admin', 'ot']
        })

    // Next Expense
    this.db
        .collection(collection)
        .insertOne({
            username: 'net-expense@app.com',
            password: bcrypt.hashSync('expense', salt),
            roles: ['admin', 'nx']
        })
    
    // Night Shift
    this.db
        .collection(collection)
        .insertOne({
            username: 'night-shift@app.com',
            password: bcrypt.hashSync('shift', salt),
            roles: ['admin','ns']
        })
    
    // Lost Hours
    this.db
        .collection(collection)
        .insertOne({
            username: 'lost-hours@app.com',
            password: bcrypt.hashSync('lost', salt),
            roles: ['admin', 'lh']
        })
        .then(() => done());

};

module.exports.down = function(done) {
    this.db
        .collection(collection)
        .drop()
        .then(() => done());
};