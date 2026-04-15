// Масив с въпроси (Добавени са 10 за пример, лесно се разширяват до 25)
const questions = [
    { q: "Какво е ДНК?", a: [{t: "Генетичен код", c: true}, {t: "Вид клетка", c: false}, {t: "Протеин", c: false}] },
    { q: "Колко хромозоми има средностатистическият човек?", a: [{t: "46", c: true}, {t: "23", c: false}, {t: "48", c: false}] },
    { q: "Каква е класическата форма на ДНК?", a: [{t: "Двойна спирала", c: true}, {t: "Единична верига", c: false}, {t: "Тройна хеликса", c: false}] },
    { q: "Какъв процент ДНК приблизително споделяме с банана?", a: [{t: "50%", c: true}, {t: "99%", c: false}, {t: "10%", c: false}] },
    { q: "Къде се съхранява по-голямата част от ДНК при хората?", a: [{t: "В ядрото", c: true}, {t: "В цитоплазмата", c: false}, {t: "В рибозомите", c: false}] },
    { q: "Кои са четирите азотни бази в ДНК?", a: [{t: "A, T, C, G", c: true}, {t: "A, U, C, G", c: false}, {t: "A, T, U, G", c: false}] },
    { q: "Коя база винаги се свързва с Аденин (A)?", a: [{t: "Тимин (T)", c: true}, {t: "Цитозин (C)", c: false}, {t: "Гуанин (G)", c: false}] },
    { q: "Как се наричат краищата на хромозомите, които се скъсяват при стареене?", a: [{t: "Теломери", c: true}, {t: "Центромери", c: false}, {t: "Хистони", c: false}] },
    { q: "Коя технология позволява прецизно редактиране на гени?", a: [{t: "CRISPR-Cas9", c: true}, {t: "PCR", c: false}, {t: "ЯМР", c: false}] },
    { q: "Кой е първият успешно клониран бозайник?", a: [{t: "Овцата Доли", c: true}, {t: "Кучето Снупи", c: false}, {t: "Котката Ники", c: false}] },
    // Тук добави още 15 въпроса по същия образец, за да станат 25.
];

let index = 0;
let score = 0;

// Елементи от DOM
const startBtn = document.getElementById('start-btn');
const qText = document.getElementById('question-text');
const btnGrid = document.getElementById('answer-buttons');
const progBarIn = document.getElementById('progress-bar-in-pastel');
const progCont = document.querySelector('.progress-container-pastel');
const currentQSpan = document.getElementById('current-q');
const totalQSpan = document.getElementById('total-q');
const scoreDisp = document.getElementById('score-display');

// Динамично задаване на общия брой въпроси
if (totalQSpan) totalQSpan.innerText = questions.length;

if (startBtn) {
    startBtn.addEventListener('click', startQuiz);
}

function startQuiz() {
    startBtn.style.display = 'none';
    progCont.style.display = 'block';
    scoreDisp.style.display = 'none';
    btnGrid.style.display = 'grid'; // Показва бутоните
    index = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    clear();
    currentQSpan.innerText = index + 1;
    // Обновяване на прогрес бар
    progBarIn.style.width = `${((index) / questions.length) * 100}%`;

    if (index < questions.length) {
        let q = questions[index];
        qText.innerText = q.q;
        qText.classList.add('fade-in'); // Лека анимация

        q.a.forEach(ans => {
            const b = document.createElement('button');
            b.innerText = ans.t;
            b.classList.add('btn-quiz-answer-pastel');
            b.onclick = () => {
                if (ans.c) score++;
                index++;
                // Кратко изчакване за ефект
                setTimeout(showQuestion, 200);
            };
            btnGrid.appendChild(b);
        });
    } else {
        finishQuiz();
    }
}

function clear() {
    while (btnGrid.firstChild) btnGrid.removeChild(btnGrid.firstChild);
    qText.classList.remove('fade-in');
}

function finishQuiz() {
    progCont.style.display = 'none';
    btnGrid.style.display = 'none'; // Скрива бутоните
    qText.innerText = "Дешифрирането приключи!";
    
    let message = score > (questions.length * 0.7) ? 'Ти си DNA Майстор!' : 'Браво за опита! Генетиката е сложна.';
    
    scoreDisp.innerHTML = `<h3>Твоят Резултат:</h3><div class="score-num-pastel">${score} / ${questions.length}</div><p>${message}</p>`;
    scoreDisp.style.display = 'block';
    
    startBtn.innerText = "Опитай пак";
    startBtn.style.display = 'inline-block';
}
