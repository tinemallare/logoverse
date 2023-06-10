const quizData = [
  {
    question: "1. Which social media platform does this icon represent?",
    image: "images/facebook.png",
    answer: "facebook"
  },
  {
    question: "2. Which social media platform does this icon represent?",
    image: "images/twitter.png",
    answer: "twitter"
  },
  {
    question: "3. Which social media platform does this icon represent?",
    image: "images/instagram.png",
    answer: "instagram"
  },
  {
    question: "4. Which social media platform does this icon represent?",
    image: "images/ml.jpg",
    answer: "mobile legends"
  },
  {
    question: "5. Which social media platform does this icon represent?",
    image: "images/coc.jpg",
    answer: "clash of clans"
  },
  {
    question: "6. Which social media platform does this icon represent?",
    image: "images/youtube.jfif",
    answer: "youtube"
  },
  {
    question: "7. Which social media platform does this icon represent?",
    image: "images/snapchat.png",
    answer: "snapchat"
  },
  {
    question: "8. Which social media platform does this icon represent?",
    image: "images/cod.jpg",
    answer: "call of duty"
  },
  {
    question: "9. Which social media platform does this icon represent?",
    image: "images/pubg.jpg",
    answer: "pubg"
  },
  {
    question: "10. Which social media platform does this icon represent?",
    image: "images/tiktok.png",
    answer: "tiktok"
  },
  {
    question: "11. Which social media platform does this icon represent?",
    image: "images/xbox.jfif",
    answer: "xbox"
  },
  {
    question: "12. Which social media platform does this icon represent?",
    image: "images/omegle.png",
    answer: "omegle"
  },
  {
    question: "13. Which social media platform does this icon represent?",
    image: "images/nintendo.jfif",
    answer: "nintendo"
  },
  {
    question: "14. Which social media platform does this icon represent?",
    image: "images/ometv.png",
    answer: "ome tv"
  },
  {
    question: "15. Which social media platform does this icon represent?",
    image: "images/litmatch.jpg",
    answer: "litmatch"
  },
  {
    question: "16. Which social media platform does this icon represent?",
    image: "images/playstation.jfif",
    answer: "playstation network"
  },
  {
    question: "17. Which social media platform does this icon represent?",
    image: "images/ubisoft.jfif",
    answer: "ubisoft"
  },
  {
    question: "18. Which social media platform does this icon represent?",
    image: "images/twitch.jfif",
    answer: "twitch"
  },
  {
    question: "19. Which social media platform does this icon represent?",
    image: "images/discord.jfif",
    answer: "discord"
  },
  {
    question: "20. Which social media platform does this icon represent?",
    image: "images/whatsapp.png",
    answer: "whatsapp"
  },
  // Add more social media icons and their answers here
];


let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerInputElement = document.getElementById("answer-input");
const submitButton = document.getElementById("submit-btn");
const scoreElement = document.getElementById("score");
const resultContainer = document.getElementById("result-container");
const restartButton = document.getElementById("restart-btn");
const iconImage = document.getElementById("icon-image");
const startButton = document.getElementById("start-btn");
const openingContainer = document.getElementById("opening-container");
const quizContainer = document.getElementById("quiz-container");

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  openingContainer.style.display = "none";
  quizContainer.style.display = "block";
  loadQuestion();
}

function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionElement.innerText = currentQuizData.question;
  iconImage.src = currentQuizData.image;
  iconImage.style.display = "block"; // Show the image
}

function checkAnswer() {
  const currentQuizData = quizData[currentQuestion];
  const userAnswer = answerInputElement.value.trim().toLowerCase();

  if (userAnswer === currentQuizData.answer.toLowerCase()) {
    score++;
  }

  answerInputElement.value = "";

  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    showResult();
  }
}

function showNextQuestion() {
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionElement.style.display = "none";
  iconImage.style.display = "none"; // Hide the image
  answerInputElement.style.display = "none";
  submitButton.style.display = "none";
  resultContainer.style.display = "block";
  scoreElement.innerText = score + "/" + quizData.length;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  questionElement.style.display = "block";
  iconImage.style.display = "block"; // Show the image
  answerInputElement.style.display = "block";
  submitButton.style.display = "block";
  resultContainer.style.display = "none";
  loadQuestion();

  // Hide quiz container and show opening container
  quizContainer.style.display = "none";
  openingContainer.style.display = "block";
}

submitButton.addEventListener("click", checkAnswer);
restartButton.addEventListener("click", restartQuiz);

// Listen for keydown event on the answer input field
answerInputElement.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkAnswer();
  }
});

loadQuestion();