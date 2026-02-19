document.addEventListener('DOMContentLoaded', () => {
    // Translations
    const translations = {
        ua: {
            app_title: "Interview Test",
            welcome_title: "Готові до тесту?",
            welcome_text: "Оберіть категорію або пройдіть всі 148 питань.",
            start_all: "Всі питання",
            loading_question: "Запитання з'явиться тут...",
            exit_btn: "Вийти",
            next_btn: "Далі",
            result_title: "Тест завершено!",
            result_label: "Результат",
            correct_label: "Правильно",
            home_btn: "На головну",
            results_label: "Результати",
            quiz_exit_confirm: "Бажаєте вийти з тесту? Прогрес буде втрачено.",
            back_confirm: "Бажаєте повернутися? Прогрес буде втрачено.",
            no_data_alert: "Дані не завантажено або категорія порожня. Спробуйте оновити сторінку.",
            result_msg_100: "Чудово! Ви знаєте все на 100%!",
            result_msg_80: "Гарний результат! Ви майже готові.",
            result_msg_50: "Непогано, але варто ще підучити.",
            result_msg_0: "Спробуйте ще раз, попереду багато цікавого."
        },
        en: {
            app_title: "Interview Test",
            welcome_title: "Ready for the test?",
            welcome_text: "Choose a category or complete all 148 questions.",
            start_all: "All questions",
            loading_question: "The question will appear here...",
            exit_btn: "Exit",
            next_btn: "Next",
            result_title: "Test completed!",
            result_label: "Score",
            correct_label: "Correct",
            home_btn: "Home",
            results_label: "Results",
            quiz_exit_confirm: "Do you want to exit the test? Progress will be lost.",
            back_confirm: "Do you want to go back? Progress will be lost.",
            no_data_alert: "Data not loaded or category is empty. Try refreshing the page.",
            result_msg_100: "Excellent! You know everything at 100%!",
            result_msg_80: "Good result! You are almost ready.",
            result_msg_50: "Not bad, but it's worth studying more.",
            result_msg_0: "Try again, there are many interesting things ahead."
        },
        de: {
            app_title: "Interview Test",
            welcome_title: "Bereit für den Test?",
            welcome_text: "Wählen Sie eine Kategorie oder beantworten Sie alle 148 Fragen.",
            start_all: "Alle Fragen",
            loading_question: "Die Frage wird hier erscheinen...",
            exit_btn: "Beenden",
            next_btn: "Weiter",
            result_title: "Test abgeschlossen!",
            result_label: "Ergebnis",
            correct_label: "Richtig",
            home_btn: "Zum Hauptmenü",
            results_label: "Ergebnisse",
            quiz_exit_confirm: "Möchten Sie den Test beenden? Der Fortschritt geht verloren.",
            back_confirm: "Möchten Sie zurückkehren? Der Fortschritt geht verloren.",
            no_data_alert: "Daten nicht geladen oder Kategorie ist leer. Versuchen Sie, die Seite zu aktualisieren.",
            result_msg_100: "Hervorragend! Sie wissen alles zu 100%!",
            result_msg_80: "Gutes Ergebnis! Sie sind fast bereit.",
            result_msg_50: "Nicht schlecht, aber es lohnt sich, noch mehr zu lernen.",
            result_msg_0: "Versuchen Sie es noch einmal, es gibt noch viel Interessantes zu entdecken."
        }
    };

    // State management
    let state = {
        quizData: [],
        currentQuestions: [],
        currentIndex: 0,
        score: 0,
        answered: false,
        selectedTopic: 'all',
        currentLang: localStorage.getItem('quiz_lang') || 'ua'
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
    const langBtns = document.querySelectorAll('.lang-btn');

    // Initialization
    function init() {
        switchLanguage(state.currentLang);
        renderTopics();
    }

    function switchLanguage(lang) {
        state.currentLang = lang;
        localStorage.setItem('quiz_lang', lang);

        // Update active class on buttons
        langBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Set quiz data based on language
        if (lang === 'en') {
            state.quizData = window.QUIZ_DATA_EN || [];
        } else if (lang === 'de') {
            state.quizData = window.QUIZ_DATA_DE || [];
        } else {
            state.quizData = window.QUIZ_DATA || [];
        }

        // Update Static strings
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (translations[lang][key]) {
                el.innerText = translations[lang][key];
            }
        });

        // Re-render topics if on home screen
        if (screens.home.classList.contains('active')) {
            renderTopics();
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
            alert(translations[state.currentLang].no_data_alert);
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

        if (isCorrect) {
            element.classList.add('correct');
            state.score++;
        } else {
            element.classList.add('wrong');
            const q = state.currentQuestions[state.currentIndex];
            Array.from(options).find(opt => opt.textContent === q.answer)?.classList.add('correct');
        }

        nextBtn.classList.remove('hidden');
        if (state.currentIndex === state.currentQuestions.length - 1) {
            nextBtn.textContent = translations[state.currentLang].results_label;
        } else {
            nextBtn.textContent = translations[state.currentLang].next_btn;
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
        const t = translations[state.currentLang];
        if (percent === 100) msg = t.result_msg_100;
        else if (percent > 80) msg = t.result_msg_80;
        else if (percent > 50) msg = t.result_msg_50;
        else msg = t.result_msg_0;

        document.getElementById('result-message').textContent = msg;
    }

    // Event Listeners
    startAllBtn.addEventListener('click', () => startQuiz('all'));
    nextBtn.addEventListener('click', nextQuestion);
    exitBtn.addEventListener('click', () => {
        if (confirm(translations[state.currentLang].quiz_exit_confirm)) {
            showScreen('home');
        }
    });
    restartBtn.addEventListener('click', () => showScreen('home'));
    backBtn.addEventListener('click', () => {
        if (screens.quiz.classList.contains('active')) {
            if (confirm(translations[state.currentLang].back_confirm)) {
                showScreen('home');
            }
        } else {
            showScreen('home');
        }
    });

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
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
