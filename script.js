const questions = [
    {
        q: "Какво е основната функция на ДНК?",
        a: [{ text: "Съхранение на генетична информация", correct: true }, { text: "Производство на енергия", correct: false }]
    },
    {
        q: "Каква е формата на ДНК молекулата?",
        a: [{ text: "Двойна спирала", correct: true }, { text: "Кръгла", correct: false }]
    },
    {
        q: "Колко хромозоми има в нормална човешка клетка?",
        a: [{ text: "46", correct: true }, { text: "23", correct: false }]
    },
    {
        q: "Кои са основите в ДНК?",
        a: [{ text: "A, T, C, G", correct: true }, { text: "X, Y, Z", correct: false }]
    },
    {
        q: "Къде се намира ДНК в клетката?",
        a: [{ text: "В ядрото", correct: true }, { text: "В цитоплазмата", correct: false }]
    },
    {
        q: "Колко процента ДНК споделяме с бананите?",
        a: [{ text: "Около 50%", correct: true }, { text: "99%", correct: false }]
    },
    {
        q: "Коя база се свързва винаги с Цитозин (C)?",
        a: [{ text: "Гуанин (G)", correct: true }, { text: "Аденин (A)", correct: false }]
    },
    {
        q: "Какво означава ДНК?",
        a: [{ text: "Дезоксирибонуклеинова киселина", correct: true }, { text: "Динамична Нано Киселина", correct: false }]
    },
    {
        q: "Може ли UV светлината да повреди ДНК?",
        a: [{ text: "Да", correct: true }, { text: "Не", correct: false }]
    },
    {
        q: "Колко процента от ДНК на всички хора е еднаква?",
        a: [{ text: "99.9%", correct: true }, { text: "50%", correct: false }]
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

    currentQuestion.a.sort(() => Math.random() - 0.5).forEach(answer => {
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
