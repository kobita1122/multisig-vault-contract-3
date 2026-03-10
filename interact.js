const { ethers } = require("ethers");

// Example of how to encode a function call for the multisig to execute
function encodeTransfer(recipient, amount) {
    const abi = ["function transfer(address to, uint amount)"];
    const iface = new ethers.Interface(abi);
    return iface.encodeFunctionData("transfer", [recipient, amount]);
}

console.log("Helper loaded: Use this to generate data for submitTransaction()");
