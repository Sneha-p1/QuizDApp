// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract QuizContract {
    struct Question {
        string questionText;
        string[] options;
        uint correctOption;
    }

    Question[] public questions;
    mapping(address => uint) public scores;
    mapping(address => bool) public hasPaid;

    uint public participationFee = 1000000000000000000; // Fee in wei


    event PaymentConfirmed(address indexed user, uint amount);
    event QuizParticipated(address indexed user);
    event AnswerSubmitted(address indexed user, uint questionIndex, bool correct);

    function addQuestion(
    string memory _questionText,
    string[] memory _options,
    uint _correctOption
) public {
    // Ensure the options array has enough elements
    require(_options.length > _correctOption, "Invalid correct option index");
    
    // Push the question to the storage
    questions.push(Question({
        questionText: _questionText,
        options: _options,
        correctOption: _correctOption
    }));
}

    function payToJoin() public payable {
        require(msg.value == participationFee, "Incorrect participation fee");
        hasPaid[msg.sender] = true;
        emit PaymentConfirmed(msg.sender, msg.value);
    }

    function getQuestionsCount() public view returns (uint) {
        return questions.length;
    }

    function getQuestion(uint _index) public view returns (
        string memory questionText,
        string[] memory options,
        uint correctOption
    )  { 
        require(_index < questions.length, "Invalid question index");
        Question storage question = questions[_index];
        return (question.questionText, question.options, question.correctOption);
    }



    function submitAnswer(uint _questionIndex, uint _selectedOption) public {
        require(hasPaid[msg.sender], "Payment required to participate");
        require(_questionIndex < questions.length, "Invalid question index");
        
        Question memory question = questions[_questionIndex];
        bool isCorrect = (_selectedOption == question.correctOption);

        if (isCorrect) {
            scores[msg.sender]++;
        }

        emit AnswerSubmitted(msg.sender, _questionIndex, isCorrect);
    }

    function getScore(address _user) public view returns (uint) {
        return scores[_user];
    }
}