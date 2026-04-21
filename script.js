// --- 3D ИНТЕРАКТИВНА ХЕЛИПСА ---
const initHelix = () => {
    const container = document.getElementById('helix-container');
    if (!container) return;

    const numNodes = 50;
    const nodes = [];
    let rotation = 0;

    for (let i = 0; i < numNodes; i++) {
        // Създаване на двете вериги
        const nodeA = document.createElement('div');
        const nodeB = document.createElement('div');
        
        nodeA.className = 'helix-node';
        nodeB.className = 'helix-node';
        
        // Цветове
        nodeA.style.color = i % 2 === 0 ? 'var(--neon-blue)' : 'var(--neon-sage)';
        nodeB.style.color = i % 2 === 0 ? 'var(--neon-sage)' : 'var(--neon-blue)';
        
        container.appendChild(nodeA);
        container.appendChild(nodeB);
        
        nodes.push({
            elA: nodeA,
            elB: nodeB,
            index: i
        });
    }

    function animate() {
        rotation += 0.015;
        const centerX = container.offsetWidth / 2;
        const centerY = container.offsetHeight / 2;
        const radius = 120; // Колко широка е спиралата
        const speed = 0.4; // Разстояние между нивата

        nodes.forEach(node => {
            const angle = rotation + (node.index * speed);
            
            // Верига A
            const xA = Math.sin(angle) * radius;
            const zA = Math.cos(angle) * radius;
            
            // Верига B (на 180 градуса)
            const xB = Math.sin(angle + Math.PI) * radius;
            const zB = Math.cos(angle + Math.PI) * radius;
            
            const y = (node.index * 12) - (numNodes * 6);

            // Дълбочина (Scale и Opacity според Z)
            const sA = (zA + radius) / (2 * radius) + 0.4;
            const sB = (zB + radius) / (2 * radius) + 0.4;

            node.elA.style.transform = `translate3d(${xA}px, ${y}px, ${zA}px) scale(${sA})`;
            node.elB.style.transform = `translate3d(${xB}px, ${y}px, ${zB}px) scale(${sB})`;
            
            node.elA.style.opacity = sA;
            node.elB.style.opacity = sB;
        });

        requestAnimationFrame(animate);
    }

    animate();
};

// --- QUIZ LOGIC (Запазена и интегрирана) ---
const questions = [
    { q: "Какво е ДНК?", a: [{t: "Генетичен код", c: true}, {t: "Вид клетка", c: false}, {t: "Протеин", c: false}] },
    { q: "Колко хромозоми има човек?", a: [{t: "46", c: true}, {t: "23", c: false}, {t: "48", c: false}] },
    { q: "Коя база се свързва с Аденин (A)?", a: [{t: "Тимин (T)", c: true}, {t: "Цитозин (C)", c: false}, {t: "Гуанин (G)", c: false}] },
    // ... добавете останалите въпроси тук
];

// Стартиране на всичко
window.onload = () => {
    initHelix();
    // Тук може да се инициализира и квиза, ако сме на quiz.html
};
