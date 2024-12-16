import { ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";

let provider;
let ethersProvider;

const getEthers = async () => {
  const detectedProvider = await detectEthereumProvider();

  if (detectedProvider) {
    // Initialize ethers.js with the detected provider
    provider = new ethers.providers.Web3Provider(detectedProvider);
    ethersProvider = provider.getSigner(); // Get the signer (connected account)
  } else {
    console.error("MetaMask is not installed. Please install it to use this app.");
  }

  return { provider, ethersProvider };
};

export default getEthers;
