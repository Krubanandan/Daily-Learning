const questions = [
    { question: "Qualification", options: ["XII", "X", "B.E"] },
    { question: "Thermodynamics", options: ["Conduction", "Radiation", "Convection"] },
    { question: "Mechanical", options: ["Manufacturing", "Designing", "Fluid"] }
];

const quiz = document.getElementById('quiz-container');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const submitBtn = document.getElementById('submit');
const addBtn = document.getElementById('add');
const addQuestionForm = document.getElementById('addques');
const addQuestionBtn = document.getElementById('addQBtn');

let currentQuestionIndex = 0;

// Function to create a question div
function createQuestionElement(qObj, index) {
    const div = document.createElement('div');
    div.classList.add('questions');
    if (index !== 0) div.classList.add('hidden');
    div.id = `q${index}`;

    const p = document.createElement('p');
    p.innerText = qObj.question;
    div.appendChild(p);

    qObj.options.forEach(option => {
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = qObj.question;

        const label = document.createElement('label');
        label.innerText = option;

        div.appendChild(radio);
        div.appendChild(label);
        div.appendChild(document.createElement('br'));
    });

    quiz.appendChild(div);
}

// Initialize all questions
function loadQuestions() {
    quiz.innerHTML = ''; // Clear existing questions
    questions.forEach((qObj, index) => {
        createQuestionElement(qObj, index);
    });
}

// Navigation Functions
function showQuestion(index) {
    document.querySelectorAll('.questions').forEach((div, i) => {
        div.classList.toggle('hidden', i !== index);
    });

    prevBtn.classList.toggle('hidden', index === 0);
    nextBtn.classList.toggle('hidden', index === questions.length - 1);
    submitBtn.classList.toggle('hidden', index !== questions.length - 1);
}

// Event Listeners
nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
});

prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
});

addBtn.addEventListener('click', () => {
    addQuestionForm.classList.toggle('hidden');
});

addQuestionBtn.addEventListener('click', () => {
    const qName = document.getElementById('qName').value.trim();
    const o1 = document.getElementById('oN1').value.trim();
    const o2 = document.getElementById('oN2').value.trim();
    const o3 = document.getElementById('oN3').value.trim();

    if (qName && o1 && o2 && o3) {
        const newQuestion = { question: qName, options: [o1, o2, o3] };
        questions.push(newQuestion);
        createQuestionElement(newQuestion, questions.length - 1);
        addQuestionForm.classList.add('hidden');
    } else {
        alert("Please fill all fields!");
    }
});

// Initial load
loadQuestions();
