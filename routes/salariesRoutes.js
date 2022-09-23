const express = require("express")
 const connectEnsureLogin = require("connect-ensure-login");

 const router = express.Router()

 router.get("/salaries", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
     if(req.user.role === "manager" || (req.user.role === "ceo")){
    res.render("salaries")}
    else{
        res.redirect("/regulardash")
    }
})
 module.exports = router
