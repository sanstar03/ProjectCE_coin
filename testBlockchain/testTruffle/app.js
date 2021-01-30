const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const cors = require('cors');
const app = express();
const web3 = require('./web3');
const { abi, address, contract_address } = require('./abi')

const contract_C = new web3.eth.Contract(abi, contract_address);
// const contract_H = new web3.eth.Contract(abi.h, address.h);
// const contract_S = new web3.eth.Contract(abi.s, address.s);
// const contract_Y = new web3.eth.Contract(abi.y, address.y);
const contract = {
    c: contract_C
}
app.use(cors());
require("./src/database");
app.use('/api', bodyParser.json(), router);
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

require('./model/createUser')({ router, web3 });
require('./transfer')({ router, contract });


router.route('/balanceOf')
.post((req, res) => {
    contract_C.methods.balanceOf(req.body.address).call()
      
    
});
console.log(contract_C.methods.balanceOf("0xf313FCe009d8ECDF840674A9C00E35cDd888229a").call())
app.use("*", (req, res) => res.status(404).send('404 Not found'));
app.listen(8000, () => console.log("Server is running 8000"));