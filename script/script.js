const quizQuestions = [
    {
        question: "What's HTML5 stand for?",
        a: 'Hypertext Markup Language, version 5',
        b: 'Hydrate More Low',
        c: 'Hypertext Match Language',
        correct: 'a'
    },

    {
        question: "What's is a VCS",
        a: 'Virtual Case Sensitive',
        b: 'Validation Cover Security',
        c: 'Version Control System',
        correct: 'c'
    },

    {
        question: "Who created GIT",
        a: 'Bill Gates',
        b: 'Linus Torvalds',
        c: 'Shrek',
        correct: 'b'
    },

    {
        question: "Which language is better to create an IA?",
        a: 'PHP',
        b: 'Javascript',
        c: 'Python',
        correct: 'c'
    },

    {
        question: "Which language below it's better to apply styles",
        a: 'NodeJs',
        b: 'CSS',
        c: 'Kotlin',
        correct: 'b'
    },

    {
        question: "Which language came first?",
        a: 'PHP',
        b: 'Python',
        c: 'Javascript',
        correct: 'a'
    },

    {
        question: "Which is NOT progamming language?",
        a: 'HTML',
        b: 'Python',
        c: 'Javascript',
        correct: 'a'
    },

    {
        question: "What means a full stack dev?",
        a: 'A person who can operate as well in front as back end',
        b: 'Only know how to use nodejs',
        c: 'Only use HTML5',
        correct: 'a'
    },

    {
        question: "What KISS means (in the developer world)",
        a: 'I do not know',
        b: 'You aren’t going to need it',
        c: 'Keep it simple stupid',
        correct: 'c'
    },

    {
        question: "Clean code is conseidered...",
        a: 'A bad practice',
        b: 'A good practice',
        c: 'Nothing, just avoid it',
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
