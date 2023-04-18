let Web3 = require("web3"); // import package
let provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
let web3 = new Web3(provider);

async function sendEther() {
    await web3.eth.sendTransaction({
      from: "0x7872d79C7cb9931E1423A00E78e171570fE51519",
      to: "0x4642711335847f7a6C5A8b4f2faC94f648a7D60F",
      value: web3.utils.toWei("10", "ether"),
    });
    console.log("Transaction Successful");
}
sendEther();