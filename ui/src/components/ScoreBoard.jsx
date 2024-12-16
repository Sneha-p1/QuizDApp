import React, { useEffect, useState } from "react";
import { getBlockchain } from "../utils/blockchain.js";

const ScoreBoard = () => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchScore = async () => {
      const { quizContract, signer } = await getBlockchain();
      if (!quizContract || !signer) return;
      const userAddress = await signer.getAddress();
      const userScore = await quizContract.getScore(userAddress);
      setScore(userScore.toNumber());
    };

    fetchScore();
  }, []);

  return <p>Your Score: {score}</p>;
};

export default ScoreBoard;

