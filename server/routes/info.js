const moment = require("moment");
const { Router } = require("express");

module.exports = (db) => {
  const collection = "codes";
  const router = new Router();
  router.get("/", (req, res) => {
    res.json({ environment: process.env.NODE_ENV });
  });

  router.post("/verifyCode", (req, res) => {
    db.collection(collection).findOne({ email: req.body.email }, function (
      err,
      record
    ) {
      if (err) throw err;
      if (record.code === req.body.toVerify) {
        return res.status(200).json({
          response: "Code Verified",
        });
      } else {
        return res.status(400).json({
          response: "Code not Verified",
        });
      }
    });
  });

  // setDeadline
  router.post("/setDeadline", (req, res) => {
    const { endDate } = req.body;
    db.collection("deadlines").insertOne(
      {
        createdAt: moment().format(),
        deadline: endDate,
      },
      (err, doc) => {
        if (err) {
          res.json({ message: err }).end();
        }

        res.status(200).json({ message: "Successfully set deadline" }).end();
      }
    );
  });
  return router;
};
