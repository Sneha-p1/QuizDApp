export const contractABI = [
    {
      "inputs": [],
      "name": "getQuestionsCount",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "uint256", "name": "_index", "type": "uint256" }],
      "name": "getQuestion",
      "outputs": [
        { "internalType": "string", "name": "questionText", "type": "string" },
        { "internalType": "string[]", "name": "options", "type": "string[]" },
        { "internalType": "uint256", "name": "correctOption", "type": "uint256" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "payToJoin",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "uint256", "name": "_questionIndex", "type": "uint256" },
        { "internalType": "uint256", "name": "_selectedOption", "type": "uint256" }
      ],
      "name": "submitAnswer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
  ];
  