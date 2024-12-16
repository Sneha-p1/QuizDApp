const Header = ({ walletAddress }) => (
    <header>
      <h1>QuizApp</h1>
      <p>Participate in quizzes and test your knowledge!</p>
      {walletAddress && <p>Connected Wallet: {walletAddress}</p>}
    </header>
  );
  
  export default Header;
  