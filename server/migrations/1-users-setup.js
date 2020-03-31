"use strict";

const bcrypt = require('bcryptjs');

let collection = 'users';

module.exports.id = 'initial-users-setup';

module.exports.up = function (done) {

    let salt = bcrypt.genSaltSync();

    // HR Admin
    this.db
        .collection(collection)
        .insertOne({
            username: 'admin@app.com',
            password: bcrypt.hashSync('hradmin', salt),
            roles: ['admin', "hr"]
        })

    // Salary Adjust
    this.db
        .collection(collection)
        .insertOne({
            username: 'salary-adjust@app.com',
            password: bcrypt.hashSync('salary', salt),
            roles: ['admin', 'salary-adjust']
        })

    // Overtime
    this.db
        .collection(collection)
        .insertOne({
            username: 'overtime@app.com',
            password: bcrypt.hashSync('over', salt),
            roles: ['admin', 'overtime']
        })

    // Next Expense
    this.db
        .collection(collection)
        .insertOne({
            username: 'net-expense@app.com',
            password: bcrypt.hashSync('expenses', salt),
            roles: ['admin', 'net-expenses']
        })

    // Night Shift
    this.db
        .collection(collection)
        .insertOne({
            username: 'night-shift@app.com',
            password: bcrypt.hashSync('shift', salt),
            roles: ['admin', 'night-shift']
        })

    // Lost Hours
    this.db
        .collection(collection)
        .insertOne({
            username: 'lost-hours@app.com',
            password: bcrypt.hashSync('lost', salt),
            roles: ['admin', 'lost-hours']
        })

    // Overtime Reward Gross
    this.db
        .collection(collection)
        .insertOne({
            username: 'overtime-reward-gross@app.com',
            password: bcrypt.hashSync('reward', salt),
            roles: ["admin", "overtime-reward-gross"]
        })

    // No Show Detailed
    this.db
        .collection(collection)
        .insertOne({
            username: 'no-show-detailed@app.com',
            password: bcrypt.hashSync('showd', salt),
            roles: ["admin", "no-show-detailed"]
        })

    // No Shows
    this.db
        .collection(collection)
        .insertOne({
            username: 'no-shows@app.com',
            password: bcrypt.hashSync('shows', salt),
            roles: ["admin", "no-shows"]
        })

    // Incentives Gross
    this.db
        .collection(collection)
        .insertOne({
            username: 'incentives-gross@app.com',
            password: bcrypt.hashSync('incentivesg', salt),
            roles: ["admin", "incentives-gross"]
        })

    // Incentives Net
    this.db
        .collection(collection)
        .insertOne({
            username: 'incentives-net@app.com',
            password: bcrypt.hashSync('incentivesn', salt),
            roles: ["admin", "incentives-net"]
        })

    // Mobile Bill
    this.db
        .collection(collection)
        .insertOne({
            username: 'mobile-bill@app.com',
            password: bcrypt.hashSync('mobile', salt),
            roles: ["admin", "mobile-bill"]
        })

    // Sick Leave Detailed
    this.db
        .collection(collection)
        .insertOne({
            username: 'sick-leave-detailed@app.com',
            password: bcrypt.hashSync('sickd', salt),
            roles: ["admin", "sick-leave-detailed"]
        })

    // Sick Leave Cons
    this.db
        .collection(collection)
        .insertOne({
            username: 'sick-leave-cons@app.com',
            password: bcrypt.hashSync('sickc', salt),
            roles: ["admin", "sick-leave-cons"]
        })

    // UKDE Referral
    this.db
        .collection(collection)
        .insertOne({
            username: 'ukde-referral@app.com',
            password: bcrypt.hashSync('ukde', salt),
            roles: ["admin", "ukde"]
        })

    // Award Gross Amount
    this.db
        .collection(collection)
        .insertOne({
            username: 'award-gross@app.com',
            password: bcrypt.hashSync('award', salt),
            roles: ["admin", "award-gross"]
        })

    // Gym
    this.db
        .collection(collection)
        .insertOne({
            username: 'gym@app.com',
            password: bcrypt.hashSync('gym', salt),
            roles: ["admin", "gym"]
        })

    // Penalties Detailed
    this.db
        .collection(collection)
        .insertOne({
            username: 'penalties-detailed@app.com',
            password: bcrypt.hashSync('penalty', salt),
            roles: ["admin", "penalties"]
        })

    // On Call
    this.db
        .collection(collection)
        .insertOne({
            username: 'on-call@app.com',
            password: bcrypt.hashSync('call', salt),
            roles: ["admin", "on-call"]
        })

    // Profile Change
    this.db
        .collection(collection)
        .insertOne({
            username: 'profile-change@app.com',
            password: bcrypt.hashSync('profile', salt),
            roles: ["admin", "profile"]
        })
        .then(() => done());

};

module.exports.down = function (done) {
    this.db
        .collection(collection)
        .drop()
        .then(() => done());
};