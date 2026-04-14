const questions = [
    { q: "Какво е ДНК?", a: [{t: "Генетичен код", c: true}, {t: "Вид клетка", c: false}] },
    { q: "Колко хромозоми има човек?", a: [{t: "46", c: true}, {t: "23", c: false}] },
    { q: "Каква е формата на ДНК?", a: [{t: "Двойна спирала", c: true}, {t: "Кръг", c: false}] },
    { q: "Колко ДНК споделяме с банана?", a: [{t: "50%", c: true}, {t: "10%", c: false}] },
    { q: "Къде се съхранява ДНК?", a: [{t: "В ядрото", c: true}, {t: "В кожата", c: false}] }
];

let index = 0;
let score = 0;

const startBtn = document.getElementById('start-btn');
const qText = document.getElementById('question-text');
const btnGrid = document.getElementById('answer-buttons');
const progBar = document.getElementById('progress-bar');
const progCont = document.querySelector('.progress-container');

if (startBtn) {
    startBtn.addEventListener('click', () => {
        startBtn.style.display = 'none';
        progCont.style.display = 'block';
        showQuestion();
    });
}

function showQuestion() {
    clear();
    progBar.style.width = `${(index / questions.length) * 100}%`;

    if (index < questions.length) {
        let q = questions[index];
        qText.innerText = q.q;
        q.a.forEach(ans => {
            const b = document.createElement('button');
            b.innerText = ans.t;
            b.classList.add('button');
            b.onclick = () => {
                if (ans.c) score++;
                index++;
                showQuestion();
            };
            btnGrid.appendChild(b);
        });
    } else {
        finish();
    }
}

function clear() {
    while (btnGrid.firstChild) btnGrid.removeChild(btnGrid.firstChild);
}

function finish() {
    progBar.style.width = '100%';
    qText.innerText = "Тестът приключи!";
    document.getElementById('score-display').innerHTML = `Резултат: ${score} от ${questions.length}`;
    startBtn.innerText = "Опитай пак";
    startBtn.style.display = 'inline-block';
    startBtn.onclick = () => location.reload();
}
