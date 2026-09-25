/* =========================================
   DIGITAL LIFE & CHARACTER ACADEMY
   Main Application
========================================= */


/* =========================================
   COURSE DATA
========================================= */

const courses = [

    {
        id: "anger",
        icon: "😡",
        title: "Managing Anger",
        description: "Learn how to understand anger and respond in healthy ways.",

        lesson: {
            title: "Understanding and Managing Anger",

            introduction:
                "Anger is a normal human emotion. The important thing is learning how to respond to it in a healthy way.",

            objectives: [
                "Identify your anger triggers.",
                "Understand how anger affects your body.",
                "Learn how to pause before reacting.",
                "Use healthy ways to express anger."
            ],

            content: `
                <h3>What is anger?</h3>

                <p>
                Anger is an emotional response to situations we see
                as unfair, hurtful, threatening or frustrating.
                </p>

                <h3>Before you react</h3>

                <p>
                Stop for a moment. Take slow breaths. Give yourself
                time to think before speaking or sending a message.
                </p>

                <h3>Healthy ways to manage anger</h3>

                <ul>
                    <li>Take slow breaths.</li>
                    <li>Walk away from the situation for a short time.</li>
                    <li>Talk to someone you trust.</li>
                    <li>Write down what you are feeling.</li>
                    <li>Return to the problem when you feel calmer.</li>
                </ul>
            `
        }
    },


    {
        id: "humility",
        icon: "🤝",
        title: "Humility",
        description: "Learn the difference between confidence and arrogance.",

        lesson: {
            title: "Confidence Without Arrogance",

            introduction:
                "Confidence helps you believe in your abilities. Arrogance causes you to look down on other people.",

            objectives: [
                "Understand arrogance.",
                "Understand humility.",
                "Learn to accept correction.",
                "Respect other people's abilities."
            ],

            content: `
                <h3>What is arrogance?</h3>

                <p>
                Arrogance happens when someone believes they are
                better or more important than other people.
                </p>

                <h3>What is humility?</h3>

                <p>
                Humility means recognising your strengths while
                respecting the strengths and dignity of others.
                </p>

                <h3>Practise humility</h3>

                <ul>
                    <li>Listen before responding.</li>
                    <li>Accept correction.</li>
                    <li>Give credit to others.</li>
                    <li>Admit when you make a mistake.</li>
                    <li>Help others without seeking praise.</li>
                </ul>
            `
        }
    },


    {
        id: "anxiety",
        icon: "🧠",
        title: "Managing Anxiety",
        description: "Learn practical techniques for dealing with anxious feelings.",

        lesson: {
            title: "Understanding Anxiety",

            introduction:
                "Anxiety involves feelings of worry, fear or nervousness. Learning healthy coping skills helps you respond to these feelings.",

            objectives: [
                "Recognise anxious thoughts.",
                "Identify possible triggers.",
                "Practise grounding techniques.",
                "Build healthy daily habits."
            ],

            content: `
                <h3>Recognising anxiety</h3>

                <p>
                Anxiety may affect your thoughts, emotions,
                body and behaviour.
                </p>

                <h3>Try the 5-4-3-2-1 grounding exercise</h3>

                <ul>
                    <li>Name 5 things you see.</li>
                    <li>Name 4 things you can touch.</li>
                    <li>Name 3 things you hear.</li>
                    <li>Name 2 things you smell.</li>
                    <li>Name 1 thing you taste.</li>
                </ul>

                <h3>Healthy habits</h3>

                <ul>
                    <li>Get enough sleep.</li>
                    <li>Take breaks from screens.</li>
                    <li>Exercise regularly.</li>
                    <li>Talk to someone you trust.</li>
                </ul>
            `
        }
    },


    {
        id: "safety",
        icon: "🔐",
        title: "Online Safety",
        description: "Learn how to protect yourself, your accounts and your information.",

        lesson: {
            title: "Staying Safe Online",

            introduction:
                "Your digital identity needs protection. Small security habits reduce many common online risks.",

            objectives: [
                "Recognise phishing.",
                "Create strong passwords.",
                "Protect personal information.",
                "Use privacy settings."
            ],

            content: `
                <h3>Protect your accounts</h3>

                <ul>
                    <li>Use unique passwords.</li>
                    <li>Use multi-factor authentication.</li>
                    <li>Do not share passwords.</li>
                    <li>Keep your software updated.</li>
                </ul>

                <h3>Recognise phishing</h3>

                <p>
                Be careful with unexpected messages asking you
                to click links, send money or provide personal information.
                </p>

                <h3>Protect your privacy</h3>

                <p>
                Think carefully before sharing your address,
                phone number, school information, location or other
                personal details online.
                </p>
            `
        }
    },


    {
        id: "stewardship",
        icon: "🌍",
        title: "Digital Stewardship",
        description: "Learn how to use technology and social media responsibly.",

        lesson: {
            title: "Being a Digital Steward",

            introduction:
                "Digital stewardship means using technology in ways that protect people, information and the wider community.",

            objectives: [
                "Think before posting.",
                "Respect people's privacy.",
                "Avoid spreading misinformation.",
                "Use social media responsibly."
            ],

            content: `
                <h3>Think before you post</h3>

                <p>
                Before posting something, ask yourself:
                </p>

                <ul>
                    <li>Is it true?</li>
                    <li>Is it respectful?</li>
                    <li>Do I have permission?</li>
                    <li>Could it harm someone?</li>
                    <li>Would I be comfortable seeing it later?</li>
                </ul>

                <h3>Your digital footprint</h3>

                <p>
                Your online actions leave records. Think about
                how your posts, comments and shared content represent you.
                </p>
            `
        }
    },


    {
        id: "creator",
        icon: "🎨",
        title: "Digital Creator",
        description: "Learn how to create useful, original and responsible content.",

        lesson: {
            title: "Becoming a Responsible Digital Creator",

            introduction:
                "Digital creators use technology to educate, entertain, inform and communicate with audiences.",

            objectives: [
                "Plan useful content.",
                "Understand copyright.",
                "Give credit to creators.",
                "Use AI responsibly."
            ],

            content: `
                <h3>Start with a purpose</h3>

                <p>
                Before creating content, decide what you want
                your audience to learn, feel or do.
                </p>

                <h3>Respect creators</h3>

                <ul>
                    <li>Do not steal other people's work.</li>
                    <li>Give credit when required.</li>
                    <li>Respect copyright.</li>
                    <li>Ask permission when appropriate.</li>
                </ul>

                <h3>Responsible AI use</h3>

                <p>
                Check AI-generated information before publishing it.
                Do not use AI to deceive people or copy another person's work.
                </p>
            `
        }
    },


    {
        id: "literacy",
        icon: "💻",
        title: "Digital Literacy",
        description: "Develop the skills needed to understand and use digital technology.",

        lesson: {
            title: "Digital Literacy Basics",

            introduction:
                "Digital literacy helps you use technology effectively, safely and responsibly.",

            objectives: [
                "Search for information effectively.",
                "Evaluate online information.",
                "Understand digital privacy.",
                "Use AI responsibly."
            ],

            content: `
                <h3>Do not believe everything online</h3>

                <p>
                Check who published information. Look for evidence.
                Compare information with trusted sources.
                </p>

                <h3>Search skills</h3>

                <ul>
                    <li>Use specific search terms.</li>
                    <li>Check the date.</li>
                    <li>Check the source.</li>
                    <li>Compare different sources.</li>
                </ul>

                <h3>AI literacy</h3>

                <p>
                AI tools produce useful results, but their answers
                still need checking.
                </p>
            `
        }
    }

];


/* =========================================
   QUIZ DATA
========================================= */

const quizQuestions = [

    {
        question: "What should you do before responding when you are very angry?",

        answers: [
            "Send the message immediately",
            "Pause and calm yourself",
            "Insult the other person",
            "Break something"
        ],

        correct: 1
    },


    {
        question: "Which behaviour shows humility?",

        answers: [
            "Refusing correction",
            "Looking down on others",
            "Listening to other people",
            "Always demanding praise"
        ],

        correct: 2
    },


    {
        question: "Which is a useful response to anxious feelings?",

        answers: [
            "Slow breathing",
            "Ignoring every problem",
            "Attacking someone",
            "Sharing private information"
        ],

        correct: 0
    },


    {
        question: "Which action improves online security?",

        answers: [
            "Sharing your password",
            "Using the same password everywhere",
            "Using multi-factor authentication",
            "Clicking every link"
        ],

        correct: 2
    },


    {
        question: "What should you do before sharing information online?",

        answers: [
            "Check whether it is reliable",
            "Share it immediately",
            "Remove the source",
            "Change the facts"
        ],

        correct: 0
    },


    {
        question: "What should a digital creator do when using another person's work?",

        answers: [
            "Pretend it is their own",
            "Give appropriate credit",
            "Remove the creator's name",
            "Sell it without permission"
        ],

        correct: 1
    }

];


/* =========================================
   DAILY CHALLENGES
========================================= */

const challenges = [

    "Before replying to an angry message today, pause for 30 seconds.",

    "Check the privacy settings on one of your social media accounts.",

    "Spend 30 minutes away from social media today.",

    "Give credit to the original creator of something you share.",

    "Before sharing a news story, check its source.",

    "Teach someone one digital skill today.",

    "Write down three things you are grateful for."
];


/* =========================================
   APP STATE
========================================= */

let state = JSON.parse(
    localStorage.getItem("digitalAcademy")
) || {

    points: 0,

    completedLessons: [],

    quizScore: 0,

    quizAttempts: 0,

    challengeCompleted: false,

    streak: 0

};


/* =========================================
   SAVE STATE
========================================= */

function saveState() {

    localStorage.setItem(
        "digitalAcademy",
        JSON.stringify(state)
    );

}


/* =========================================
   DASHBOARD
========================================= */

function updateDashboard() {

    document.getElementById("points").textContent =
        state.points;

    document.getElementById("completed").textContent =
        state.completedLessons.length;

    document.getElementById("quizScore").textContent =
        state.quizAttempts > 0
            ? Math.round(
                state.quizScore / state.quizAttempts
            ) + "%"
            : "0%";

    document.getElementById("streak").textContent =
        state.streak;


    const percentage =
        Math.round(
            (state.completedLessons.length / courses.length) * 100
        );

    document.getElementById("progressText").textContent =
        percentage + "%";

    document.getElementById("progressFill").style.width =
        percentage + "%";

    updateBadges();

}


/* =========================================
   DISPLAY COURSES
========================================= */

function displayCourses() {

    const grid =
        document.getElementById("courseGrid");

    grid.innerHTML = "";

    courses.forEach(course => {

        const completed =
            state.completedLessons.includes(course.id);

        const card =
            document.createElement("div");

        card.className = "course-card";

        card.innerHTML = `

            <div class="course-icon">
                ${course.icon}
            </div>

            <h3>
                ${course.title}
            </h3>

            <p>
                ${course.description}
            </p>

            <button
                class="btn primary"
                onclick="openLesson('${course.id}')">

                ${completed ? "Review Lesson" : "Start Lesson"}

            </button>

        `;

        grid.appendChild(card);

    });

}


/* =========================================
   OPEN LESSON
========================================= */

function openLesson(id) {

    const course =
        courses.find(item => item.id === id);

    if (!course) return;

    const section =
        document.getElementById("lessonSection");

    const content =
        document.getElementById("lessonContent");

    content.innerHTML = `

        <h2>
            ${course.lesson.title}
        </h2>

        <p>
            ${course.lesson.introduction}
        </p>

        <h3>
            Learning Objectives
        </h3>

        <ul>
            ${course.lesson.objectives
                .map(item => `<li>${item}</li>`)
                .join("")}
        </ul>

        ${course.lesson.content}

        <br>

        <button
            class="btn primary"
            onclick="completeLesson('${course.id}')">

            Mark Lesson Complete

        </button>

    `;

    section.classList.remove("hidden");

    section.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================
   COMPLETE LESSON
========================================= */

function completeLesson(id) {

    if (!state.completedLessons.includes(id)) {

        state.completedLessons.push(id);

        state.points += 20;

        state.streak += 1;

        saveState();

        updateDashboard();

        displayCourses();

        alert("Lesson completed! You earned 20 points.");

    } else {

        alert("You already completed this lesson.");

    }

}


/* =========================================
   BACK BUTTON
========================================= */

document
    .getElementById("backBtn")
    .addEventListener("click", () => {

        document
            .getElementById("lessonSection")
            .classList.add("hidden");

        document
            .getElementById("learn")
            .scrollIntoView({
                behavior: "smooth"
            });

    });


/* =========================================
   QUIZ SYSTEM
========================================= */

let currentQuestion = 0;

let quizCorrect = 0;

function loadQuizQuestion() {

    const question =
        quizQuestions[currentQuestion];

    document.getElementById("quizQuestion")
        .textContent =
        question.question;

    const answers =
        document.getElementById("quizAnswers");

    answers.innerHTML = "";

    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");

            button.className = "answer";

            button.textContent = answer;

            button.onclick = () =>
                checkAnswer(index, button);

            answers.appendChild(button);

        }
    );

    document
        .getElementById("nextQuestion")
        .classList.add("hidden");

}


function checkAnswer(index, button) {

    const question =
        quizQuestions[currentQuestion];

    const buttons =
        document.querySelectorAll(".answer");

    buttons.forEach(btn => {
        btn.disabled = true;
    });


    if (index === question.correct) {

        button.classList.add("correct");

        quizCorrect++;

        state.points += 10;

    } else {

        button.classList.add("wrong");

        buttons[question.correct]
            .classList.add("correct");

    }

    document
        .getElementById("nextQuestion")
        .classList.remove("hidden");

    saveState();

    updateDashboard();

}


document
    .getElementById("nextQuestion")
    .addEventListener("click", () => {

        currentQuestion++;

        if (
            currentQuestion >=
            quizQuestions.length
        ) {

            finishQuiz();

        } else {

            loadQuizQuestion();

        }

    });


function finishQuiz() {

    const percentage =
        Math.round(
            (quizCorrect /
                quizQuestions.length) * 100
        );

    state.quizScore += percentage;

    state.quizAttempts++;

    saveState();

    document.getElementById("quizQuestion")
        .textContent =
        "Quiz Complete!";

    document.getElementById("quizAnswers")
        .innerHTML = `

            <h3>
                Your score: ${percentage}%
            </h3>

            <p>
                You earned ${quizCorrect * 10} points.
            </p>

            <button
                class="btn primary"
                onclick="restartQuiz()">

                Try Again

            </button>
        `;

    document
        .getElementById("nextQuestion")
        .classList.add("hidden");

    updateDashboard();

}


function restartQuiz() {

    currentQuestion = 0;

    quizCorrect = 0;

    loadQuizQuestion();

}


/* =========================================
   DAILY CHALLENGE
========================================= */

function loadDailyChallenge() {

    const today =
        new Date().getDate();

    const challenge =
        challenges[
            today % challenges.length
        ];

    document
        .getElementById("dailyChallenge")
        .textContent = challenge;

}


document
    .getElementById("completeChallenge")
    .addEventListener("click", () => {

        if (state.challengeCompleted) {

            alert(
                "You already completed today's challenge."
            );

            return;
        }

        state.challengeCompleted = true;

        state.points += 15;

        saveState();

        updateDashboard();

        alert(
            "Challenge completed! You earned 15 points."
        );

    });


/* =========================================
   BADGES
========================================= */

function updateBadges() {

    const badges =
        document.getElementById("badges");

    badges.innerHTML = "";

    const badgeData = [

        {
            name: "🌱 Digital Beginner",
            unlocked:
                state.completedLessons.length >= 1
        },

        {
            name: "🧘 Calm Mind",
            unlocked:
                state.completedLessons.includes("anger")
        },

        {
            name: "🤝 Humble Heart",
            unlocked:
                state.completedLessons.includes("humility")
        },

        {
            name: "🧠 Healthy Mind",
            unlocked:
                state.completedLessons.includes("anxiety")
        },

        {
            name: "🔐 Online Guardian",
            unlocked:
                state.completedLessons.includes("safety")
        },

        {
            name: "🌍 Digital Steward",
            unlocked:
                state.completedLessons.includes("stewardship")
        },

        {
            name: "🎨 Creative Mind",
            unlocked:
                state.completedLessons.includes("creator")
        },

        {
            name: "💻 Digital Citizen",
            unlocked:
                state.completedLessons.includes("literacy")
        },

        {
            name: "🏆 Digital Champion",
            unlocked:
                state.completedLessons.length === courses.length
        }

    ];


    badgeData.forEach(badge => {

        const element =
            document.createElement("div");

        element.className =
            "badge-item " +
            (badge.unlocked
                ? "unlocked"
                : "");

        element.textContent =
            badge.name;

        badges.appendChild(element);

    });

}


/* =========================================
   DARK MODE
========================================= */

const themeBtn =
    document.getElementById("themeBtn");

themeBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle("dark");

        const dark =
            document.body.classList.contains("dark");

        localStorage.setItem(
            "darkMode",
            dark
        );

        themeBtn.textContent =
            dark ? "☀️" : "🌙";

    }
);


if (
    localStorage.getItem("darkMode") === "true"
) {

    document.body.classList.add("dark");

    themeBtn.textContent = "☀️";

}


/* =========================================
   MOBILE MENU
========================================= */

document
    .getElementById("menuBtn")
    .addEventListener("click", () => {

        document
            .getElementById("navLinks")
            .classList.toggle("show");

    });


/* =========================================
   RESET
========================================= */

document
    .getElementById("resetBtn")
    .addEventListener("click", () => {

        const confirmReset =
            confirm(
                "Are you sure you want to reset all your progress?"
            );

        if (!confirmReset) return;

        localStorage.removeItem(
            "digitalAcademy"
        );

        location.reload();

    });


/* =========================================
   INITIALISE APP
========================================= */

displayCourses();

loadQuizQuestion();

loadDailyChallenge();

updateDashboard();