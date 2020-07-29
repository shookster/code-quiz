// variables
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");

const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

//event listeners for clicks

//timer variables and function. currently starts when page loads. FIX
// variables
var timeEl = document.querySelector(".timer");
var mainEl = document.getElementById("main");

// number of seconds timer starts at

//actual countdown fuction
startButton.onclick = function () {
  var secondsLeft = 10;
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds until start.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      startGame();
    }
  }, 1000);
};

//in the activity from class, this was the "colorsplosion" that triggered when countdown reached zero
function sendMessage() {
  timeEl.textContent = " Begin ";

  var imgEl = document.createElement("h1");

  imgEl.setAttribute("Begin");
  mainEl.appendChild(imgEl);
}

//back to quiz code
function startGame() {
  console.log("Started");
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.foreach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.textbutton.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.datset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: "How old is the earth?",
    answers: [
      { text: "4 billion", correct: true },
      { text: "4 million", correct: false },
    ],
  },
  {
    question: "How old is the earth?",
    answers: [
      { text: "4 billion", correct: true },
      { text: "4 million", correct: false },
    ],
  },
  {
    question: "How old is the earth?",
    answers: [
      { text: "4 billion", correct: true },
      { text: "4 million", correct: false },
    ],
  },
  {
    question: "How old is the earth?",
    answers: [
      { text: "4 billion", correct: true },
      { text: "4 million", correct: false },
    ],
  },
  {
    question: "How old is the earth?",
    answers: [
      { text: "4 billion", correct: true },
      { text: "4 million", correct: false },
    ],
  },
];
