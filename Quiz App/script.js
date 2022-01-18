const quizData = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];  

const questao = document.getElementById('question');
const a = document.getElementById('questa');
const b = document.getElementById('questb');
const c = document.getElementById('questc');
const d = document.getElementById('questd');
const submit = document.getElementById("submit");
const answersEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
    deselectAnswers();
const currentQuizData = quizData[currentQuiz];
questao.innerText = currentQuizData.question;
a.innerText = currentQuizData.a;
b.innerText = currentQuizData.b;
c.innerText = currentQuizData.c;
d.innerText = currentQuizData.d;

}


function getSelected() {
    
    let answer = undefined;


    answersEls.forEach((answerEl) => {
    if(answerEl.checked) {
    answer = answerEl.id;

     }
    });
   
    return answer;
}


function deselectAnswers() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}


submit.addEventListener("click", () => {
    //check to see the answer
    const answer =  getSelected();
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button style="margin-top:200px;" onclick="location.reload()">Reload</button>
            `;
        }
    }


   

    
});
