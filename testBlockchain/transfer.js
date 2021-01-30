const web3 = require('../web3')
const { Router } = require('express')
const {CheckInCoin_Contract} = require('../abi');
const account = '0xa6f8085a7fc921d43470b156128c2b22e2b5fe5a';
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const cors = require('cors');
const app = express();
app.use(cors());
app.use('/api', bodyParser.json(), router);
app.use('/api', bodyParser.urlencoded({ extended: false }), router);


// module.exports = ({rounter,contract}) => {
    async function transfer(recieve,token){
        const gas = await CheckInCoin_Contract.methods.transfer(recieve,token).estimatGas();
        GAS = gas;
        encodeABI = await CheckInCoin_Contract.methods.transfer(recieve,token).encodeABI();
        await CheckInCoin_Contract.methods.transfer(recieve,token).send({from: account,gas: gas});
        const _bool = await CheckInCoin_Contract.methods.transfer(recieve,token).call();
        bool = _bool;
    }

    async function sayHello(){
        const word = ("Hello World !!! ")

    }

//============================================================================================ 
  
    router.route('/transfer')
        .get((req,res) => {
            res.json({
                status: 200,ABI: encodeABI
            });
        })
        .put((req,res) => {
            transfer(req.body.recieve,req.body.token)
            res.json({message:'Done !!!'})
        })
    
    router.route('/hello')
        .get((req,res) => {
            res.json({message:'Hello world '})
        })
// }
app.use("*", (req, res) => res.status(404).send('404 Not found'));
app.listen(8000, () => console.log("Server is running 8000"));
