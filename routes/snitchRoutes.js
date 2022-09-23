const express = require("express")
//const workerModel = require("../models/workerModel")
const connectEnsureLogin = require("connect-ensure-login");
const workerModel = require("../models/workerModel");

const router = express.Router()

//  //router.get("/snitch", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
// //     if (req.user.role === "dev" || req.user.role === "ceo") {
// //     res.render("snitch")
// // }
// //     else {
// //         res.redirect("/managerDash")
// //     }
// // })


router.get("/snitch", connectEnsureLogin.ensureLoggedIn(), async(req, res) => {
    try {
        if (req.user.role === "dev" || req.user.role === "ceo") {
        //await workerModel.find((items) => {
        //console.log(items)
    //res.render("snitch", { workers: items, username: req.user.role })
//})
const items = await workerModel.find({})
res.render("snitch", { workers: items, username: req.user.role })
        }
    else {
        res.redirect("/managerDash")
    }
        
    } catch (error) {
        
    }
})
module.exports = router