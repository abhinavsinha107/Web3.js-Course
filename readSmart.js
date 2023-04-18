const Contract = require("web3-eth-contract");
Contract.setProvider("HTTP://127.0.0.1:7545");

// ABI and contract addrees

async function readContract() {
  const ABI = [
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
      constant: true,
    },
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
      constant: true,
    },
  ];

  const contractAddress = "0xb54286A4b443d8CD3B7152bFde2bD779E5720D3C";

  const contract = new Contract(ABI, contractAddress);

  const data = await contract.methods.getter().call();
  console.log(data);
}

readContract();
