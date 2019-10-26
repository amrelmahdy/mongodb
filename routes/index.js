const express = require("express");
const router = express.Router();
const db = require("./../db");


router.get("/", async (req, res, next) => {
   const data = await db.getDb().collection("flightData").find().toArray();
   res.json(data);
});

module.exports = router;