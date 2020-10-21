const Migrations = artifacts.require("Migrations");
const CheckIncoin = artifacts.require("CheckInCoin");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(CheckIncoin,10000);
};
