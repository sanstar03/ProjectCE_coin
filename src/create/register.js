const web3 = require('./web3.js.js')

async function createAccount(username,password){
    const acc = await web3.eth.accounts.create();
}