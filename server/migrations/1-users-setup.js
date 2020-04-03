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
            username: 'hr_admin_1',
            password: bcrypt.hashSync('hradmin1', salt),
            roles: ['hr']
        })

    // Salary Adjust"admin","admin",
    this.db
        .collection(collection)
        .insertOne({
            username: 'salary_adjust_1',
            password: bcrypt.hashSync('salary1', salt),
            roles: ['salary-adjust']
        })

    // Overtime
    this.db
        .collection(collection)
        .insertOne({
            username: 'overtime_1',
            password: bcrypt.hashSync('overtime1', salt),
            roles: ['overtime']
        })

    // Next Expense
    this.db
        .collection(collection)
        .insertOne({
            username: 'net_expenses_1',
            password: bcrypt.hashSync('ntxpns', salt),
            roles: ['net-expenses']
        })

    // Night Shift
    this.db
        .collection(collection)
        .insertOne({
            username: 'night_shift_1',
            password: bcrypt.hashSync('nshft1', salt),
            roles: ['night-shift']
        })

    // Lost Hours
    this.db
        .collection(collection)
        .insertOne({
            username: 'lost_hours_1',
            password: bcrypt.hashSync('lohrs1', salt),
            roles: ['lost-hours']
        })

    // Overtime Reward Gross
    this.db
        .collection(collection)
        .insertOne({
            username: 'overtime_reward_gross_1',
            password: bcrypt.hashSync('otrwgrs1', salt),
            roles: ['overtime-reward-gross']
        })

    // No Show Detailed
    this.db
        .collection(collection)
        .insertOne({
            username: 'no_show_detailed_1',
            password: bcrypt.hashSync('nshowd1', salt),
            roles: ['no-show-detailed']
        })

    // No Shows
    this.db
        .collection(collection)
        .insertOne({
            username: 'no_shows_1',
            password: bcrypt.hashSync('nshows1', salt),
            roles: ['no-shows']
        })

    // Incentives Gross
    this.db
        .collection(collection)
        .insertOne({
            username: 'incentives_gross_1',
            password: bcrypt.hashSync('incntgrs1', salt),
            roles: ['incentives-gross']
        })

    // Incentives Net
    this.db
        .collection(collection)
        .insertOne({
            username: 'incentives_net_1',
            password: bcrypt.hashSync('incntnet1', salt),
            roles: ['incentives-net']
        })

    // Mobile Bill
    this.db
        .collection(collection)
        .insertOne({
            username: 'mobile_bill_1',
            password: bcrypt.hashSync('mblbl1', salt),
            roles: ['mobile-bill']
        })

    // Sick Leave Detailed
    this.db
        .collection(collection)
        .insertOne({
            username: 'sick_leave_detailed_1',
            password: bcrypt.hashSync('sklvde1', salt),
            roles: ['sick-leave-detailed']
        })

    // Sick Leave Cons
    this.db
        .collection(collection)
        .insertOne({
            username: 'sick_leave_cons_1',
            password: bcrypt.hashSync('sklvco1', salt),
            roles: ['sick-leave-cons']
        })

    // UKDE Referral
    this.db
        .collection(collection)
        .insertOne({
            username: 'ukde_referral_1',
            password: bcrypt.hashSync('ukde1', salt),
            roles: ['ukde']
        })

    // Award Gross Amount
    this.db
        .collection(collection)
        .insertOne({
            username: 'award_gross_1',
            password: bcrypt.hashSync('awgrs1', salt),
            roles: ['award-gross']
        })

    // Gym
    this.db
        .collection(collection)
        .insertOne({
            username: 'gym_1',
            password: bcrypt.hashSync('gym_1', salt),
            roles: ['gym']
        })

    // Penalties Detailed
    this.db
        .collection(collection)
        .insertOne({
            username: 'penalties_detailed_1',
            password: bcrypt.hashSync('pendet1', salt),
            roles: ['penalties']
        })

    // On Call
    this.db
        .collection(collection)
        .insertOne({
            username: 'on_call_1',
            password: bcrypt.hashSync('call1', salt),
            roles: ['on-call']
        })

    // Profile Change
    this.db
        .collection(collection)
        .insertOne({
            username: 'profile_change_1',
            password: bcrypt.hashSync('profcha1', salt),
            roles: ['profile']
        }).then(() => done());

};

module.exports.down = function (done) {
    this.db
        .collection(collection)
        .drop()
        .then(() => done());
};