// script.js

// Quiz functionality for the DNA website

// Function to create a Quiz
function createQuiz(questions) {
    let score = 0;
    questions.forEach((question, index) => {
        const userAnswer = prompt(`Q${index + 1}: ${question.prompt}\n${question.answers.join('\n')}`);
        if (userAnswer === question.correctAnswer) {
            score++;
        }
    });
    alert(`Your score: ${score} out of ${questions.length}`);
}

// Sample questions
const quizQuestions = [
    {
        prompt: 'What is the function of DNA?',
        answers: ['Store genetic information', 'Protein synthesis', 'Energy production'],
        correctAnswer: 'Store genetic information'
    },
    {
        prompt: 'What is the shape of DNA?',
        answers: ['Double Helix', 'Single strand', 'Circle'],
        correctAnswer: 'Double Helix'
    }
];

// Start the quiz
createQuiz(quizQuestions);

// Interactive features
function toggleContent(elementId) {
    const element = document.getElementById(elementId);
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

// Dynamic content example
function updateContent() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = 'Welcome to the DNA website! Explore our features.';
}

// Call updateContent on page load
window.onload = updateContent;