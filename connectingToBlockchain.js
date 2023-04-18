let Web3 = require("web3"); // import package
let provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
let web3 = new Web3(provider);

// console.log(web3);

async function getBalance() {
    const weiBalance = await web3.eth.getBalance(
      "0x4B0E2CF343108b50cE7d6569729E933Bd2391170"
    );
    // console.log(weiBalance);
    const etherBalance = web3.utils.fromWei(weiBalance, "ether");
    // console.log(etherBalance);
    const balanceWei = web3.utils.toWei(etherBalance, "ether");
    console.log(balanceWei);
}
getBalance();