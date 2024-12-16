const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("quizApp", (m) => {
    const quizContract = m.contract("QuizContract");
    return {quizContract};
});