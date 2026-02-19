document.addEventListener('DOMContentLoaded', () => {
    // State management
    let state = {
        quizData: [],
        currentQuestions: [],
        currentIndex: 0,
        score: 0,
        answered: false,
        selectedTopic: 'all'
    };

    // DOM Elements
    const screens = {
        home: document.getElementById('home-screen'),
        quiz: document.getElementById('quiz-screen'),
        result: document.getElementById('result-screen')
    };

    const topicList = document.getElementById('topic-list');
    const startAllBtn = document.getElementById('start-all');
    const questionText = document.getElementById('question-text');
    const optionsList = document.getElementById('options-list');
    const categoryBadge = document.getElementById('question-category');
    const progressFill = document.getElementById('progress-fill');
    const scoreText = document.getElementById('score-text');
    const progressContainer = document.getElementById('progress-container');
    const nextBtn = document.getElementById('next-question');
    const exitBtn = document.getElementById('exit-quiz');
    const restartBtn = document.getElementById('restart-btn');
    const backBtn = document.getElementById('back-btn');

    // Initialization
    function init() {
        if (typeof QUIZ_DATA !== 'undefined') {
            state.quizData = QUIZ_DATA;
            renderTopics();
        } else {
            console.error('Quiz data not found!');
        }
    }

    function renderTopics() {
        const topics = [...new Set(state.quizData.map(q => q.topic))];
        topicList.innerHTML = topics.map(topic => `
            <button class="topic-btn" data-topic="${topic}">
                ${topic}
            </button>
        `).join('');

        topicList.querySelectorAll('.topic-btn').forEach(btn => {
            btn.addEventListener('click', () => startQuiz(btn.dataset.topic));
        });
    }

    // Navigation
    function showScreen(screenId) {
        Object.values(screens).forEach(s => s.classList.remove('active'));
        screens[screenId].classList.add('active');

        if (screenId === 'quiz' || screenId === 'result') {
            backBtn.classList.remove('hidden');
        } else {
            backBtn.classList.add('hidden');
        }

        if (screenId === 'quiz') {
            progressContainer.classList.remove('hidden');
        } else {
            progressContainer.classList.add('hidden');
        }
    }

    // Quiz Logic
    function startQuiz(topic) {
        state.selectedTopic = topic;
        const filtered = topic === 'all'
            ? [...state.quizData]
            : state.quizData.filter(q => q.topic === topic);

        if (filtered.length === 0) {
            alert('Дані не завантажено або категорія порожня. Спробуйте оновити сторінку.');
            return;
        }

        state.currentQuestions = filtered.sort(() => Math.random() - 0.5);
        state.currentIndex = 0;
        state.score = 0;
        state.answered = false;

        showScreen('quiz');
        renderQuestion();
    }

    function renderQuestion() {
        state.answered = false;
        nextBtn.classList.add('hidden');
        const q = state.currentQuestions[state.currentIndex];

        categoryBadge.textContent = q.topic;
        questionText.textContent = q.question;

        // Prepare options
        const options = [
            { text: q.answer, correct: true },
            ...q.wrongAnswers.map(text => ({ text, correct: false }))
        ].sort(() => Math.random() - 0.5);

        optionsList.innerHTML = '';
        options.forEach(opt => {
            const btn = document.createElement('div');
            btn.className = 'option';
            btn.textContent = opt.text;
            btn.addEventListener('click', () => handleSelect(btn, opt.correct));
            optionsList.appendChild(btn);
        });

        updateProgress();
    }

    function handleSelect(element, isCorrect) {
        if (state.answered) return;
        state.answered = true;

        const options = optionsList.querySelectorAll('.option');
        options.forEach(opt => {
            // Find which one was correct to highlight it if user was wrong
            // We'll just highlight the one clicked and the correct one anyway
        });

        if (isCorrect) {
            element.classList.add('correct');
            state.score++;
        } else {
            element.classList.add('wrong');
            // Show the correct one
            const q = state.currentQuestions[state.currentIndex];
            Array.from(options).find(opt => opt.textContent === q.answer)?.classList.add('correct');
        }

        nextBtn.classList.remove('hidden');
        if (state.currentIndex === state.currentQuestions.length - 1) {
            nextBtn.textContent = 'Результати';
        } else {
            nextBtn.textContent = 'Далі';
        }
    }

    function updateProgress() {
        const current = state.currentIndex + 1;
        const total = state.currentQuestions.length;
        const percent = (state.currentIndex / total) * 100;
        progressFill.style.width = `${percent}%`;
        scoreText.textContent = `${current}/${total}`;
    }

    function nextQuestion() {
        if (state.currentIndex < state.currentQuestions.length - 1) {
            state.currentIndex++;
            renderQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        showScreen('result');
        const total = state.currentQuestions.length;
        const percent = Math.round((state.score / total) * 100);

        document.getElementById('final-score').textContent = `${percent}%`;
        document.getElementById('correct-count').textContent = `${state.score}/${total}`;

        let msg = '';
        if (percent === 100) msg = 'Чудово! Ви знаєте все на 100%!';
        else if (percent > 80) msg = 'Гарний результат! Ви майже готові.';
        else if (percent > 50) msg = 'Непогано, але варто ще підучити.';
        else msg = 'Спробуйте ще раз, попереду багато цікавого.';

        document.getElementById('result-message').textContent = msg;
    }

    // Event Listeners
    startAllBtn.addEventListener('click', () => startQuiz('all'));
    nextBtn.addEventListener('click', nextQuestion);
    exitBtn.addEventListener('click', () => {
        if (confirm('Бажаєте вийти з тесту? прогрес буде втрачено.')) {
            showScreen('home');
        }
    });
    restartBtn.addEventListener('click', () => showScreen('home'));
    backBtn.addEventListener('click', () => {
        if (screens.quiz.classList.contains('active')) {
            if (confirm('Бажаєте повернутися? Прогрес буде втрачено.')) {
                showScreen('home');
            }
        } else {
            showScreen('home');
        }
    });

    // PWA Support
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('sw.js')
                .then(reg => console.log('Service Worker registered'))
                .catch(err => console.log('Service Worker registration failed', err));
        });
    }

    init();
});
