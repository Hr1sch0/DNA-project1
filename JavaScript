// Разширена база данни с въпроси за ДНК
const questions = [
    {
        q: "Какво е основната функция на ДНК?",
        a: [
            { text: "Съхранение на генетична информация", correct: true },
            { text: "Производство на енергия", correct: false },
            { text: "Пренасяне на кислород", correct: false }
        ]
    },
    {
        q: "Каква е формата на ДНК молекулата?",
        a: [
            { text: "Кръгла", correct: false },
            { text: "Двойна спирала (Double Helix)", correct: true },
            { text: "Единична нишка", correct: false }
        ]
    },
    {
        q: "Колко хромозоми има в една нормална човешка клетка?",
        a: [
            { text: "23", correct: false },
            { text: "46", correct: true },
            { text: "98", correct: false }
        ]
    },
    {
        q: "Кои са четирите азотни основи в ДНК?",
        a: [
            { text: "A, T, C, G", correct: true },
            { text: "X, Y, Z, W", correct: false },
            { text: "Alpha, Beta, Gamma", correct: false }
        ]
    },
    {
        q: "Къде се намира ДНК в клетката?",
        a: [
            { text: "В рибозомите", correct: false },
            { text: "В ядрото", correct: true },
            { text: "В стената на клетката", correct: false }
        ]
    }
];

const startButton = document.getElementById('start-btn');
const questionElement = document.getElementById('question-text');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreDisplay = document.getElementById('score-display');

let currentQuestionIndex = 0;
let score = 0;

startButton.addEventListener('click', startQuiz);

function startQuiz() {
    startButton.style.display = 'none';
    currentQuestionIndex = 0;
    score = 0;
    scoreDisplay.innerText = '';
    showQuestion();
}

function showQuestion() {
    clearStatus();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = `Въпрос ${currentQuestionIndex + 1}: ${currentQuestion.q}`;

    currentQuestion.a.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('button');
        button.addEventListener('click', () => selectAnswer(answer.correct));
        answerButtonsElement.appendChild(button);
    });
}

function clearStatus() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(isCorrect) {
    if (isCorrect) score++;
    
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    clearStatus();
    questionElement.innerText = "Мисията изпълнена! 🧬";
    scoreDisplay.innerHTML = `Твоят резултат: <strong>${score}</strong> от <strong>${questions.length}</strong>`;
    startButton.innerText = "Рестартирай мисията";
    startButton.style.display = 'block';
}
