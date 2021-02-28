
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const cors = require('cors');
const app = express();
const web3 = require('./web3');
const { abi, address, contract_address } = require('./abi')
const jwt = require('jsonwebtoken');
const contract_C = new web3.eth.Contract(abi, contract_address);
const authroute = require('./routes/auth');
const dotenv = require('dotenv')
const contract = {
    c: contract_C
}

dotenv.config();
app.use(cors());
require("./src/database");
app.use('/api', bodyParser.json(), router);
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

require('./routes/createUser')({ router, web3 });
require('./routes/transfer')({ router, contract });

const User = require('./model/userModel');
const loginValidation = require ('./validation')

const crypto = require('./routes/cryptography1');


router.route('/login').post((req,res)=>{
        User.find({
        username:req.body.username
        }).then(ret => {
        try{
        let decryptedPrivateKey = crypto.decrypt(JSON.parse(ret[0].privateKey),req.body.password);
        decryptedPrivateKey = decryptedPrivateKey.substring(2, decryptedPrivateKey.length);
        }catch(e){
                return res.status(400).json({
                        error:"Invalid password."
                })
        }
        const user = ret[0].username;
        const token = jwt.sign({_id:user._id},process.env.TOKEN_SECRET);
        // await AsyncStorage.setItem('token', response.data.token);
        res.header('auth-token',token).send(token);
        // res.json({status:200,
        // message:"login success"}) 
        })
})


        //password check
        // let decryptedPrivateKey;
        // try {
        //     decryptedPrivateKey = crypto.decrypt(JSON.parse(ret[0].privateKey), req.body.password);
        //     decryptedPrivateKey = decryptedPrivateKey.substring(2, decryptedPrivateKey.length);
        // } catch (e) {
        //     res.json({
        //         status: 400,
        //         message: "Wrong password"
        //     })
        // }
        // res.send("Success Login")



module.exports = router;







// router.route('/balanceOf')
// .post((req, res) => {
//     contract_C.methods.balanceOf(req.body.address).call().then(function (bal) {
//         res.json({
//             amount:bal
//         })
//      })
    
// });

// router.route('/symbol')
// .get((req,res) => {
//     contract_C.methods.getSymbol().call().then(function(sym){
//         res.json({
//             symbol:sym
//         })
//     })

// });

// router.route('/balanceOf')
//     .post((req, res) => {
//         try {
//             contract[req.body.coin].methods.balanceOf(req.body.address).call().then(ret => {
//                 res.json({
//                     coin: req.body.coin,
//                     balance: ret
//                 })
//             });
//         } catch (err) {
//             res.json({
//                 status: 400,
//                 message: "No " + req.body.coin + " Coin"
//             })
//         };
//     })


///// middle

app.use("*", (req, res) => res.status(404).send('404 Not found'));
app.listen(8000, () => console.log("Server is running 8000"));