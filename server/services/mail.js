"use strict";
require('dotenv').config();

const nodemailer = require("nodemailer");
const { getDB } = require("../db");

let hotmailTransporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    secure: false,
    port: 587,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    },
    tls: {
        ciphers: 'SSLv3'
    }
})
const fromEmail = 'hashad.d2d@gmail.com';

let gmailTransporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    auth: {
            type: 'oAuth2',
            user: fromEmail,
            clientId: '849051165442-gmqv3barpd07r9hui6dn6nt0074lh5sj.apps.googleusercontent.com',
            clientSecret: 'HNPPrnlhQbnrftJMk5jn6vGy',
            refreshToken: '1//04ZyR-viFqs2vCgYIARAAGAQSNwF-L9IrRSZXXamO8gVPbdlyl_aBmRKNwg0VwAShfLSuMg-agvYnAd_Kcr_qdumNCV7S8hmYxuo'     
    }
})
/////////////////////////////////////////////////////////////
const sendMail = async function (req, res) {

    /* Email Options Setup */
    let options = {
        from: "abokahfa@outlook.com",
        to: req.body.mailList,
        subject: req.body.subject,
        text: req.body.text
    }

    /* SendMail */
    gmailTransporter.sendMail(options, function (err, info) {

        if (err) {

            console.log(err);

            /* Error Message Setup */
            let errorMessage = {
                "error": "Couldn't send message",
                "response": ""
            }

            /* Error Response */
            let resCode = err.responseCode;
            let smtpResponse = err.response;

            /* Error Response Check */
            if (resCode != undefined) {
                errorMessage["response"] = `${smtpResponse}`;
            } else {
                errorMessage["response"] = `${err}`;
            }

            return res.status(400).json(errorMessage);
        }
        else {

            /**
             * bind code to email
             * store it into db
            */
            let record = {
                email: req.body.mailList,
                code: req.body.code
            }

            let _db = getDB();
            let collection = "codes";

            _db.collection(collection).insertOne(record, function (err) {
                if (err) {
                    throw err;
                }
                else {
                    // _db.close();
                    return res.status(200).json({
                        // "response": `Message successfully sent to ${info.envelope.to}`,
                        // "messageId": `${info.messageId}`
                    })
                }
            })

        }

    })
}

/////////////////////////////////////////////////////////////

const sendPhaseUpdate = function (req, res) {

    let sendTo = [];
    let db = getDB();
    let query = { roles: { $in: ['hr', 'manager'] } };

    db.collection('users')
        .find(query)
        .toArray((err, users) => {
            if (err) throw err;

            sendTo = users.map(user => {
                return user.username
            })

            let options = {
                from: fromEmail,
                to: sendTo,
                subject: "Phase Update",
                text: "Phase Updated"
            }

            gmailTransporter.sendMail(options, (err, info) => {
                if (err) {
                    return console.log(err);
                }
                else {
                    return res.json({
                        "response": `email sent to ${info.envelope.to}`
                    })
                }
            })
        })
 
}
/////////////////////////////////////////////////////////////
const sendEmail = (toMailList, subject, htmlbody, callBack, errCallBack = () => { }) => {


    // TODO: make the mail template ready

    let mailOptions = {
        from: fromEmail,
        to: toMailList,
        subject: subject,
        html: htmlbody
    };
    console.log(mailOptions);
    gmailTransporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            errCallBack();
            throw error;
        } else {
            callBack();
            console.log("Email sent: " + info.response);
        }
    });
}


/////////////////////////////////////////////////////////////
const onLastWorkDayUpdate = (subject, text, callBack, errCallBack = () => { }) => {

    let toMailList = [];
    let db = getDB();
    let query = { roles: { $in: ['hr', 'vendor'] } };

    db.collection('users')
        .find(query)
        .toArray((err, users) => {
            if (err) throw err;

            toMailList = users.map(user => {
                return user.username
            })

            let mailOptions = {
                from:fromEmail,
                to: toMailList,
                subject: subject,
                text: text
            }

            gmailTransporter.sendMail(mailOptions, function (err, info) {
                if (err) {
                    errCallBack();
                    throw err;
                } else {
                    callBack();
                    console.log("Last Work Day Notification Sent: ", info.response)
                }
            })
        })
}
module.exports = { sendMail, sendPhaseUpdate, sendEmail, onLastWorkDayUpdate }

