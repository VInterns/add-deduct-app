const { Router } = require("express");
const { normalizeData } = require("../util");

module.exports = (db) => {

    let router = new Router();

    // API: SUBMIT DATA
    router.post("/submit_data", (req, res) => {
        let data = req.body.what_to_submit;
        let collection = req.body.where_to_submit;

        // data received desc: array of arrays => we need to normalize it to array of objects
        // [[val], [val], [val]] => [{0:val}, {1:val}, {2:val}]
        // replace number keys with the actual keys
        let normalized = normalizeData(data[0], data.slice(1));

        db.collection(collection)
            .insertMany(normalized, function (err, result) {
                if (err) {
                    console.error(err);
                    throw err;
                } else {
                    console.info("Records inserted: " + result.insertedCount + " record(s).");
                    return res.status(200).json({
                        "response": `${result.insertedCount} record(s) successfully inserted into ${collection}.`
                    })
                }
            })
    })

    return router;
}