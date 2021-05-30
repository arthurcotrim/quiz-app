const quizQuestions = [
    {
        question: "What's my name?",
        a: 'Arthur',
        b: 'Artur',
        c: 'Arthu',
        correct: 'a'
    },

    {
        question: "How old is Arthur",
        a: '15',
        b: '20',
        c: '18',
        correct: 'c'
    },

    {
        question: "Which month Arthur was born?",
        a: 'December',
        b: 'January',
        c: 'August',
        correct: 'b'
    },

    {
        question: "Which language Arthur knows more?",
        a: 'PHP',
        b: 'Python',
        c: 'Javascript',
        correct: 'c'
    },

    {
        question: "Which language Arthur doesn't know?",
        a: 'PHP',
        b: 'Python',
        c: 'Javascript',
        correct: 'b'
    },

    {
        question: "Which language came first?",
        a: 'PHP',
        b: 'Python',
        c: 'Javascript',
        correct: 'c'
    },

    {
        question: "Which is NOT progamming language?",
        a: 'HTML',
        b: 'Python',
        c: 'Javascript',
        correct: 'a'
    },

    {
        question: "Do Arthur like orange juice?",
        a: 'Yes',
        b: 'No',
        c: 'Only mango juice',
        correct: 'a'
    },

    {
        question: "Do Arthur like to watch animes?",
        a: 'Yes',
        b: 'No',
        c: 'Nah, what is an anime?',
        correct: 'a'
    },

    {
        question: "Do Arthur is practicing exercises?",
        a: 'Yes',
        b: 'No',
        c: 'Every single day',
        correct: 'b'
    },
]

const inputs = document.querySelectorAll('.answer')
const btn = document.querySelector('button')
const quiz = document.querySelector('.quiz')

const question = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')

const result = document.querySelector('.final-result')
const body = document.querySelector('body')
const feedback = document.querySelector('.feedback')
const percent = document.querySelector('.percent')


let currentQuestion = 0
let score = 0

loadQuiz();

function loadQuiz() {
    clearInputs()
    const quizData = quizQuestions[currentQuestion]

    question.innerText = quizData.question
    a_text.innerText = quizData.a
    b_text.innerText = quizData.b
    c_text.innerText = quizData.c

    btn.classList.remove('correct')
    btn.classList.remove('wrong')
}

function verifyInput() {
    let selectedInput = undefined

    inputs.forEach(input => {
        if (input.checked) {
            selectedInput = input.id
        }
    })

    return selectedInput
}

function clearInputs() {
    inputs.forEach(input => {
        input.checked = false
    })
}

function badScore(score) {
    body.classList.add('negative');
    percent.classList.add('low')

    feedback.innerText = 'Sorry, that was bad, but keep trying'
    percent.innerText = `${score}/${quizQuestions.length}`

    result.classList.remove('invisible');
    quiz.classList.add('invisible');
}

function neutralScore(score) {
    body.classList.add('neutral');

    percent.classList.add('center')

    feedback.innerText = 'Yeah, that was nice, congrats'
    percent.innerText = `${score}/${quizQuestions.length}`

    result.classList.remove('invisible');
    quiz.classList.add('invisible');
}

function positiveScore(score) {
    body.classList.add('positive');

    percent.classList.add('high')

    feedback.innerText = "Great, you are amazing. Good job!"
    percent.innerText = `${score}/${quizQuestions.length}`

    result.classList.remove('invisible');
    quiz.classList.add('invisible');
}

btn.onclick = () => {
    const answer = verifyInput();

    if (answer) {
        if (answer === quizQuestions[currentQuestion].correct) {
            score++;
            btn.classList.toggle('correct')

        } else {
            btn.classList.toggle('wrong')
        }

        currentQuestion++;

        if (currentQuestion < quizQuestions.length) {
            setTimeout(() => {
                loadQuiz();
            }, 1000);
        } else {
            if (score < 4) {
                badScore(score);
            }
            else if (score >= 4 && score <= 6) {
                neutralScore(score);
            }
            else {
                positiveScore(score);
            }
        }
    }
}
