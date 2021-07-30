// var ERC721 = artifacts.require('../contracts/token/ERC721/ERC721.sol');
var NFT = artifacts.require('../contracts/NFT.sol');

module.exports = function (deployer) {
  deployer.deploy(NFT, 'OSerbinov', 'OS');
};
