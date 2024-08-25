const comprehensions = [
    {
        title: "Animals",
        questions: [
            { questionText: "What is the name of deer in the island?", correctAnswer: "The name of the Deer was KOKO." },
            { questionText: "What was he doing over there?", correctAnswer: "He was drinking water over there." },
            { questionText: "With whom did he use to live?", correctAnswer: "He used to live with his mother and little brother." },
            { questionText: "He ran faster than whom?", correctAnswer: "He ran so fast than the Tiger." }
        ]
    },
    {
        title: "Boat",
        questions: [
            { questionText: "What were the names of the two kids in the story?", correctAnswer: "Sam and Lily." },
            { questionText: "Where did Sam and Lily decide to explore on a sunny Saturday?", correctAnswer: "They decided to explore the old, mysterious forest at the edge of their town." },
            { questionText: "What did people in town say about the forest?", correctAnswer: "People in town said the forest was enchanted." },
            { questionText: "What did Sam and Lily hear and see as they walked deeper into the forest?", correctAnswer: "They heard birds singing and saw squirrels playing in the trees." }
        ]
    },
    {
        title: "Forest",
        questions: [
            { questionText: "What was the name of the forest?", correctAnswer: "The forest was called the Enchanted Woods." },
            { questionText: "What did the children discover in the forest?", correctAnswer: "They discovered a hidden treasure chest." },
            { questionText: "Who guided the children in the forest?", correctAnswer: "A wise old owl guided them." },
            { questionText: "What did the children find inside the treasure chest?", correctAnswer: "They found sparkling jewels and gold coins." }
        ]
    }
];

let currentQuizIndex = 0;
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(index) {
    currentQuizIndex = index;
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('menu').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    displayQuestion();
}

function displayQuestion() {
    const question = comprehensions[currentQuizIndex].questions[currentQuestionIndex];
    document.getElementById('question-text').textContent = question.questionText;
    document.getElementById('answer-input').value = '';
    document.getElementById('result').textContent = '';
}

function submitAnswer() {
    const userAnswer = document.getElementById('answer-input').value.trim();
    const correctAnswer = comprehensions[currentQuizIndex].questions[currentQuestionIndex].correctAnswer;
    const result = document.getElementById('result');
    
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        result.textContent = "Correct! Score: 2/2";
        result.style.color = "green";
        score += 2;
    } else {
        result.textContent = `Incorrect! Score: 0/2. Correct answer: ${correctAnswer}`;
        result.style.color = "red";
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < comprehensions[currentQuizIndex].questions.length) {
        displayQuestion();
    } else {
        displayScore();
    }
}

function displayScore() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('score').style.display = 'block';
    
    const totalQuestions = comprehensions[currentQuizIndex].questions.length;
    const totalScore = document.getElementById('total-score');
    const rating = document.getElementById('rating');
    
    totalScore.textContent = `You scored ${score}/${totalQuestions * 2}`;
    
    if (score === totalQuestions * 2) {
        rating.textContent = "Excellent! ⭐⭐⭐";
    } else if (score >= totalQuestions * 1.5) {
        rating.textContent = "Good job! ⭐⭐";
    } else if (score >= totalQuestions) {
        rating.textContent = "Keep trying! ⭐";
    } else {
        rating.textContent = "Better luck next time!";
    }
}

function exitQuiz() {
    document.getElementById('main-container').innerHTML = `
        <div id="goodbye">
            <h1>Goodbye!</h1>
            <p>Thanks for playing! 😊</p>
        </div>
    `;
}
