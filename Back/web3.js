import Web3 from 'web3';
var web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:9545');
export default web3;