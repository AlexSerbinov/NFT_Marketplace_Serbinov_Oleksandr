// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./openZeppelinContracts/token/ERC721/ERC721.sol";
import "./openZeppelinContracts/utils/Counters.sol";
import "./openZeppelinContracts/access/Ownable.sol";
import "./openZeppelinContracts/token/ERC721/extensions/ERC721URIStorage.sol";


contract NFT is ERC721, Ownable, ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor(string memory name_, string memory symbol_) ERC721(name_, symbol_) {
    }

    // function mintNft(address receiver, string memory tokenURI) external onlyOwner returns (uint256) {  // _setTokenURI not working on etherscan
    function mintNft(address receiver) external onlyOwner returns (uint256) {
        _tokenIds.increment();
        uint256 newNftTokenId = _tokenIds.current();
        _mint(receiver, newNftTokenId);
        // _setTokenURI(newNftTokenId, tokenURI);     // _setTokenURI not working on etherscan
        return newNftTokenId;
    }
}