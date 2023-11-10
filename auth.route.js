const { registerUser, loginUser } = require("../controllers/auth.controller");

const express = require("express");
const { connection } = require("../database");
const router = express.Router();
const bodyParser = require('body-parser')

router.post("/register", registerUser);
router.post("/login", loginUser, (req, res) => {
    res.render('chatroom', { user: req.user })
});

router.post("/sent", (req, res) => {
    res.render('sent', { user: req.user })
});
// router.get("/display", (req, res) => {
//   const sql = "SELECT * FROM shoppers";
//   connection.query(sql, (err, data) => {
//     if (err) throw err;
//     res.status(200).json({ data });
//   });
// });

module.exports = { authRoute: router };
