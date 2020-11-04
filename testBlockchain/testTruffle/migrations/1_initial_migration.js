const Migrations = artifacts.require("Migrations");
const CheckinCoin = artifacts.require("CheckinCoin");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(CheckinCoin,10000);
};
