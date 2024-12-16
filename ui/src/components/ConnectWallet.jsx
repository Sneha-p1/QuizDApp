import React, { useEffect, useState } from "react";
import getEthers from "../utils/getEthers";

const WalletConnector = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    const { ethersProvider } = await getEthers();

    if (ethersProvider) {
      try {
        // Get the connected wallet address
        const address = await ethersProvider.getAddress();
        setWalletAddress(address);
      } catch (error) {
        console.error("Failed to get wallet address:", error);
      }
    }
  };

  useEffect(() => {
    connectWallet();
  }, []);

  return (
    <div>
      {walletAddress ? (
        <p>Connected Wallet: {walletAddress}</p>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
};

export default WalletConnector;
