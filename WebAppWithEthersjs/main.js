/*
1) Go to remix.ethereum.org  and lanch th following

//Solidity Begins here
pragma solidity^0.5.0;

contract HelloWorld {
    string public name;

    function setName(string memory newName) public {
        name = newName;

    }
    function getValue() public view returns (string memory _name){
        _name = name;
        return _name;
    }

}
//Solidity Ends here

2) After launch
  i) get abi data
  ii) get contract hash

3) npm init
  npm install browserify
  npm install --save ethers
  browserify main.js -o bundle.js

4) coppy code below and run browserify in cli

*/



var ethers = require('ethers');

let provider = ethers.getDefaultProvider('ropsten');

var contractAddress  = '0x8bcca0861803d97f564245273c402696f1e986fe';
var abi = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "newName",
        "type": "string"
      }
    ],
    "name": "setName",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getValue",
    "outputs": [
      {
        "name": "_name",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

var privateKey = '0x83F60EDED8A4F80BFA3399498C4F7FD24F4717E92A0F32B13BDB4F6BC163F3EA';

var wallet = new ethers.Wallet(privateKey,provider);
var contract = new ethers.Contract(contractAddress,abi,wallet);

var sendPromise = contract.setName('bryan2');


sendPromise.then(function(transaction){
  console.log(transaction);
  alert("just set name");

});
});


var callPromise = contract.getValue();

callPromise.then(function(result){
  alert("inside callpromise");
  console.log(result);
  //alert(result);
});