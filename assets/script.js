const startButton = document.getElementById("start-btn");
const questionContainerElement - document.getElementById("question-container")

const shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame);

function startGame() {
    console.log("Started")
    startButton.classList.add("hide")
    setNextQuestion()
}

function setNextQuestion() {}

function selectAnswer() {}

const questions = [
    {
        question: "How old is the earth?",
        answers: [
            { text: "4 billion", correct: true},
            { text: "4 million", correct: false}
        ]
    }
]
