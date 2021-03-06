
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const cors = require('cors');
const app = express();
const web3 = require('./web3');
const { abi, contract_address } = require('./abi')
const jwt = require('jsonwebtoken');
const contract_C = new web3.eth.Contract(abi, contract_address);
// const authroute = require('./routes/auth');
const dotenv = require('dotenv')
const contract = {
    c: contract_C
}
const reqAuth = require('./middlewares/reqAuth')

dotenv.config();
app.use(cors());
require("./db/database");
app.use('/api', bodyParser.json(), router);
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

require('./routes/createUser')({ router, web3 });
require('./routes/transfer')({ router, contract });
require('./routes/checkin')({router,contract})
const User = require('./model/userModel');
// const loginValidation = require ('./validation')

const crypto = require('./routes/cryptography1');


router.route('/login').post(async (req,res)=>{
        const {username,password} = req.body

        if (!username || !password){
                return res.status(422).send(err,'Must provide username and password');
        }

        const user = await User.findOne({username});
        if(!user){      
                return res.status(404).send({error:'user not found'});
        }
        try{
                let decryptedPrivateKey = crypto.decrypt(JSON.parse(user.privateKey),req.body.password);
                decryptedPrivateKey = decryptedPrivateKey.substring(2, decryptedPrivateKey.length);
                // const token = jwt.sign({userId:user._id},'kpkjriosjdjkvndjsia');
                // res.send(token);
                const token = jwt.sign({userId:user._id},'kpkjriosjdjkvndjsia');
                res.send({token});
        }catch(e){
                return res.status(422).send({error:'Invalid password .'});
        }
        
        // User.findOne({
        // username:req.body.username
        // })
        // .then(ret => {
        // try{
        // let decryptedPrivateKey = crypto.decrypt(JSON.parse(user.privateKey),req.body.password);
        // decryptedPrivateKey = decryptedPrivateKey.substring(2, decryptedPrivateKey.length);
        // const user = ret[0].username;
        // const token = jwt.sign({userId:user._id},'kpkjriosjdjkvndjsia');
        // res.send(token);
        // }catch(e){
        //         return res.status(400).json({
        //                 error:"Invalid password."
        //         })
        // }
        
        // // await AsyncStorage.setItem('token', response.data.token);
        
        // // res.json({status:200,
        // // message:"login success"}) 
        // })
})

router.route('/getUser').get(reqAuth,(req,res)=>{
        res.send(`HELLO! ${req.user.firstname}`);
})

router.route('/getBalance').get(reqAuth,(req,res)=>{
        contract_C.methods.balanceOf(`${req.user.address}`).call().then(bal => res.send(bal))
})

router.route('/balanceTest').get((req,res)=>{
        // console.log(contract_C)
        contract_C.methods.balanceOf(req.body.address).call().then(bal => res.send(bal))
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