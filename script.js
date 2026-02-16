// ====== Показ разделов ======
function showSection(id) {
    document.querySelectorAll('.section').forEach(sec => {
        sec.style.display = "none";
    });
    document.getElementById(id).style.display = "block";
}

// ====== Система очков ======
let score = 0;

function updateScore() {
    let scoreBox = document.getElementById("score");
    if (scoreBox) {
        scoreBox.innerText = "🏆 Очки: " + score;
    }
}

// ====== ТРИГОНОМЕТРИЯ ======
function trigEasy() {
    const questions = [
        { q: "sin(90°) = ?", a: 1 },
        { q: "cos(0°) = ?", a: 1 },
        { q: "tan(45°) = ?", a: 1 }
    ];
    generateQuestion("trig", questions);
}

function trigHard() {
    const questions = [
        { q: "cos(60°) = ?", a: 0.5 },
        { q: "sin(30°) = ?", a: 0.5 },
        { q: "tan(60°) ≈ ?", a: 1.73 }
    ];
    generateQuestion("trig", questions);
}

// ====== ЛОГАРИФМЫ ======
function logEasy() {
    const questions = [
        { q: "log₁₀(100) = ?", a: 2 },
        { q: "log₁₀(1000) = ?", a: 3 },
        { q: "log₂(4) = ?", a: 2 }
    ];
    generateQuestion("log", questions);
}

function logHard() {
    const questions = [
        { q: "log₂(8) = ?", a: 3 },
        { q: "log₃(9) = ?", a: 2 },
        { q: "log₅(25) = ?", a: 2 }
    ];
    generateQuestion("log", questions);
}

// ====== Генерация вопросов ======
function generateQuestion(type, questions) {
    const random = questions[Math.floor(Math.random() * questions.length)];
    const container = document.getElementById(type + "Question");
    const resultBox = document.getElementById(type + "Result");

    container.innerHTML = `
        <p>${random.q}</p>
        <input id="${type}Ans" type="number" step="any">
        <button onclick="checkAnswer('${type}', ${random.a})">Ответ</button>
    `;

    resultBox.innerHTML = "";
}

// ====== Проверка ответа ======
function checkAnswer(type, correct) {
    const ans = parseFloat(document.getElementById(type + "Ans").value);
    const resultBox = document.getElementById(type + "Result");

    if (Math.abs(ans - correct) < 0.01) {
        resultBox.innerHTML = "✅ Верно! +10 очков";
        resultBox.style.color = "lightgreen";
        score += 10;
    } else {
        resultBox.innerHTML = "❌ Неверно! Попробуй ещё";
        resultBox.style.color = "red";
    }

    updateScore();
}

// ====== Новогодний снег ======
function createSnowflake() {
    const snow = document.createElement("div");
    snow.classList.add("snowflake");
    snow.innerHTML = "❄";
    snow.style.left = Math.random() * window.innerWidth + "px";
    snow.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.body.appendChild(snow);

    setTimeout(() => {
        snow.remove();
    }, 5000);
}

setInterval(createSnowflake, 200);

// ====== Новогодний фейерверк при 50 очках ======
function checkWinner() {
    if (score >= 50) {
        alert("🎆 Поздравляем! Вы мастер математики 2026 года! 🎄");
        score = 0;
        updateScore();
    }
}

// Проверка победы каждые 2 секунды
setInterval(checkWinner, 2000);

// ====== Инициализация ======
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");

    // Добавляем табло очков
    const scoreDiv = document.createElement("div");
    scoreDiv.id = "score";
    scoreDiv.style.marginTop = "10px";
    scoreDiv.style.fontSize = "20px";
    header.appendChild(scoreDiv);

    updateScore();
});
