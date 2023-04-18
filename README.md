npm install web3

create js file -> connectingToBlockchain.js
let Web3 = require("web3"); // import package
let provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"); (Ganache RPC serrver url)
let web3 = new Web3(provider);
console.log(web3);
To check it is working or not run command node connectingToBlockchain.js

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

    ---> node connectingToBlockchain.js

create js file -> sendEther.js
let Web3 = require("web3"); // import package
let provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
let web3 = new Web3(provider);

    async function sendEther() {
    		await web3.eth.sendTransaction({
      		from: "0x4B0E2CF343108b50cE7d6569729E933Bd2391170",
      		to: "0xBa37F0a938999bc4cb9BBE37E9A746712bCAB39B",
      		value: web3.utils.toWei("10", "ether"),
    		});
    	console.log("Transaction Successful");
    }
    sendEther();

    ---> node sendEther.js

Now connect metamask to ganache using localhost network and deploy any contract with getter and setter function

create js file -> readSmart.js

// Reading of smart Contract function getter

const Contract = require("web3-eth-contract");
Contract.setProvider("HTTP://127.0.0.1:7545");

// ABI and contract addrees

async function readContract() {

    const ABI = [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_num",
                    "type": "uint256"
                }
            ],
            "name": "setter",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getter",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "num",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];

    const contractAddress = "0xde5BeDA2d8287F9C73D61f61a4A734A178dB47c3";

    const contract = new Contract(ABI, contractAddress);

    const data = await contract.methods.getter().call();  
    console.log(data);

}

readContract();

---> node readSmart.js

// Incase of using a read function we need to use .call() method 






create js file -> writeSmart.js

// Writing of smart Contract function setter

const Contract = require("web3-eth-contract");
Contract.setProvider("HTTP://127.0.0.1:7545");

// ABI and contract addrees

async function writeContract() {
  const ABI = [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_num",
          type: "uint256",
        },
      ],
      name: "setter",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "getter",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "num",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];

  const contractAddress = "0x84A6812Bb7BD4Bf60197146D13633D7c2177A7B2";

  const contract = new Contract(ABI, contractAddress);

  const data = await contract.methods
    .setter(200)
    .send({ from: "0x3368eE14788fAebD7C4cD0AC1De679f88AD64607" });
  console.log(data);
}

writeContract();

---> node writeSmart.js

// Incase of using a write function we need to use .send() method with an object containing the address of sender



Now your task is to try above read and write operation using truffle and not metamask