'use strict';

const bcrypt = require('bcryptjs');

let collection = 'users';

module.exports.id = 'more-users';

module.exports.up = function (done) {

    let salt = bcrypt.genSaltSync();

    // HR Admin
    this.db
        .collection(collection)
        .insertOne({
            username: 'hr_admin_2',
            password: bcrypt.hashSync('hradmin2', salt),
            roles: ['hr']
        })

    // Salary Adjust
    this.db
        .collection(collection)
        .insertOne({
            username: 'salary_adjust_2',
            password: bcrypt.hashSync('salary2', salt),
            roles: ['salary-adjust']
        })

    // Overtime
    this.db
        .collection(collection)
        .insertOne({
            username: 'overtime_2',
            password: bcrypt.hashSync('overtime2', salt),
            roles: ['overtime']
        })

    // Next Expense
    this.db
        .collection(collection)
        .insertOne({
            username: 'net_expenses_2',
            password: bcrypt.hashSync('ntxpns', salt),
            roles: ['net-expenses']
        })

    // Night Shift
    this.db
        .collection(collection)
        .insertOne({
            username: 'night_shift_2',
            password: bcrypt.hashSync('nshft2', salt),
            roles: ['night-shift']
        })

    // Lost Hours
    this.db
        .collection(collection)
        .insertOne({
            username: 'lost_hours_2',
            password: bcrypt.hashSync('lohrs2', salt),
            roles: ['lost-hours']
        })

    // Overtime Reward Gross
    this.db
        .collection(collection)
        .insertOne({
            username: 'overtime_reward_gross_2',
            password: bcrypt.hashSync('otrwgrs2', salt),
            roles: ['overtime-reward-gross']
        })

    // No Show Detailed
    this.db
        .collection(collection)
        .insertOne({
            username: 'no_show_detailed_2',
            password: bcrypt.hashSync('nshowd2', salt),
            roles: ['no-show-detailed']
        })

    // No Shows
    this.db
        .collection(collection)
        .insertOne({
            username: 'no_shows_2',
            password: bcrypt.hashSync('nshows2', salt),
            roles: ['no-shows']
        })

    // Incentives Gross
    this.db
        .collection(collection)
        .insertOne({
            username: 'incentives_gross_2',
            password: bcrypt.hashSync('incntgrs2', salt),
            roles: ['incentives-gross']
        })

    // Incentives Net
    this.db
        .collection(collection)
        .insertOne({
            username: 'incentives_net_2',
            password: bcrypt.hashSync('incntnet2', salt),
            roles: ['incentives-net']
        })

    // Mobile Bill
    this.db
        .collection(collection)
        .insertOne({
            username: 'mobile_bill_2',
            password: bcrypt.hashSync('mblbl2', salt),
            roles: ['mobile-bill']
        })

    // Sick Leave Detailed
    this.db
        .collection(collection)
        .insertOne({
            username: 'sick_leave_detailed_2',
            password: bcrypt.hashSync('sklvde2', salt),
            roles: ['sick-leave-detailed']
        })

    // Sick Leave Cons
    this.db
        .collection(collection)
        .insertOne({
            username: 'sick_leave_cons_2',
            password: bcrypt.hashSync('sklvco2', salt),
            roles: ['sick-leave-cons']
        })

    // UKDE Referral
    this.db
        .collection(collection)
        .insertOne({
            username: 'ukde_referral_2',
            password: bcrypt.hashSync('ukde2', salt),
            roles: ['ukde']
        })

    // Award Gross Amount
    this.db
        .collection(collection)
        .insertOne({
            username: 'award_gross_2',
            password: bcrypt.hashSync('awgrs2', salt),
            roles: ['award-gross']
        })

    // Gym
    this.db
        .collection(collection)
        .insertOne({
            username: 'gym_2',
            password: bcrypt.hashSync('gym_2', salt),
            roles: ['gym']
        })

    // Penalties Detailed
    this.db
        .collection(collection)
        .insertOne({
            username: 'penalties_detailed_2',
            password: bcrypt.hashSync('pendet2', salt),
            roles: ['penalties']
        })

    // On Call
    this.db
        .collection(collection)
        .insertOne({
            username: 'on_call_2',
            password: bcrypt.hashSync('call2', salt),
            roles: ['on-call']
        })

    // Profile Change
    this.db
        .collection(collection)
        .insertOne({
            username: 'profile_change_2',
            password: bcrypt.hashSync('profcha2', salt),
            roles: ['profile']
        }).then(() => done());

};

module.exports.down = function (done) {
    this.db
        .collection(collection)
        .drop()
        .then(() => done());
};