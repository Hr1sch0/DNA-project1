const questions = [
    { q: "Какво е ДНК?", a: [{t: "Генетичен код", c: true}, {t: "Вид клетка", c: false}] },
    { q: "Колко хромозоми има средностатистическият човек?", a: [{t: "46", c: true}, {t: "23", c: false}] },
    { q: "Каква е класическата форма на ДНК?", a: [{t: "Двойна спирала", c: true}, {t: "Единична верига", c: false}] },
    { q: "Какъв процент ДНК приблизително споделяме с банана?", a: [{t: "50%", c: true}, {t: "99%", c: false}] },
    { q: "Къде се съхранява по-голямата част от ДНК при хората?", a: [{t: "В ядрото", c: true}, {t: "В цитоплазмата", c: false}] }
];

let index = 0;
let score = 0;

const startBtn = document.getElementById('start-btn');
const qText = document.getElementById('question-text');
const btnGrid = document.getElementById('answer-buttons');
const progBarIn = document.getElementById('progress-bar-in');
const progCont = document.querySelector('.progress-container');
const currentQSpan = document.getElementById('current-q');
const totalQSpan = document.getElementById('total-q');
const scoreDisp = document.getElementById('score-display');

if (totalQSpan) totalQSpan.innerText = questions.length;

if (startBtn) {
    startBtn.addEventListener('click', () => {
        startBtn.style.display = 'none';
        progCont.style.display = 'block';
        scoreDisp.style.display = 'none';
        index = 0;
        score = 0;
        showQuestion();
    });
}

function showQuestion() {
    clear();
    currentQSpan.innerText = index + 1;
    progBarIn.style.width = `${((index) / questions.length) * 100}%`;

    if (index < questions.length) {
        let q = questions[index];
        qText.innerText = q.q;
        q.a.forEach(ans => {
            const b = document.createElement('button');
            b.innerText = ans.t;
            b.classList.add('btn-quiz-answer');
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
    progCont.style.display = 'none';
    qText.innerText = "Дешифрирането приключи!";
    scoreDisp.innerHTML = `<h3>Твоят Резултат:</h3><div class="score-num">${score} / ${questions.length}</div><p>Ти си ${score > 3 ? 'ДНК Майстор' : 'Новак в генетиката'}.</p>`;
    scoreDisp.style.display = 'block';
    startBtn.innerText = "Опитай пак";
    startBtn.style.display = 'inline-block';
}
