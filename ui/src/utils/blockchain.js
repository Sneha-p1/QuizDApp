import { ethers } from "ethers";
import { contractABI } from "./contractABI";

export const getBlockchain = async () => {
  if (!window.ethereum) {
    alert("MetaMask is not installed. Please install it to use this app.");
    return null;
  }

  try {
    await window.ethereum.request({ method: "eth_requestAccounts" });

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
    const quizContract = new ethers.Contract(contractAddress, contractABI, signer);

    return { provider, signer, quizContract };
  } catch (error) {
    console.error("Error connecting to MetaMask:", error);
    return null;
  }
};

