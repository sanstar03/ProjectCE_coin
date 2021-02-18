const router = require('express').Router();
const User = require('../model/userModel');
const loginValidation = require ('../validation')
const crypto = require('./cryptography1');


router.post('/login',async (req,res)=>{
    const {error} = loginValidation(req.body);
    if(error) return res.send(400).send(error.details[0].message);
        const userExit = await User.findOne({user:req.body.username});
        //user check
        if (!userExit) return res.status(400).send("User not exit !!");
        //password check
        let decryptedPrivateKey;
        try {
            decryptedPrivateKey = crypto.decrypt(JSON.parse(ret[0].privateKey), req.body.password);
            decryptedPrivateKey = decryptedPrivateKey.substring(2, decryptedPrivateKey.length);
        } catch (e) {
            res.json({
                status: 400,
                message: "Wrong password"
            })
        }
        res.send("Success Login")
});


module.exports = router;
