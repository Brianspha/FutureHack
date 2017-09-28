var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var MyContract = artifacts.require("./MyContract.sol");
var CommunityInvest = artifacts.require("./CommunityInvest.sol");
module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  deployer.link(ConvertLib,MyContract);
  deployer.deploy(MyContract);
  deployer.link(ConvertLib,CommunityInvest);
  deployer.deploy(CommunityInvest);
};
