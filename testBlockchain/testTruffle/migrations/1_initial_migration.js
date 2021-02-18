
const CheckinCoin = artifacts.require("CheckinCoin");

module.exports = function (deployer) {
  deployer.deploy(CheckinCoin,100)
};
