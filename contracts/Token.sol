pragma solidity ^0.8.9;

 import "hardhat/console.sol";

contract Token {
    string public name;
    string public symbol;
    uint256 public decimals;
    uint256 public totalSupply;

    constructor(string memory _name, string memory _symbol,  uint256 _totalSupply) {
        name = _name;
        symbol = _symbol;
        totalSupply = 1000000  * (10**decimals);
    }
}
