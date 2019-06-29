import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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

var callPromise = contract.getValue();

export default class App extends React.Component {

    

    constructor(props) {
          super(props);
          // Don't call this.setState() here!
          this.state = { textForPage: "" };
          //this.handleClick = this.handleClick.bind(this);
          var sendPromise = contract.setName('bryan james Campbell9');
          sendPromise.then(function(transaction){
            console.log(transaction);
          });

    }
    
    componentDidMount() {

      callPromise.then((result) => {
            this.setState({
                  textForPage: result
                })
        });

    }

    render() {
        return (
          <View style={styles.container}>
            <Text> {this.state.textForPage} </Text>
          </View>
        );
    }

};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
