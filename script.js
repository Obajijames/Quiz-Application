// Using DOM to communicate with html
const timeLeft = document.querySelector(".time-left");
const quizContainer = document.getElementById("container");
const nextBtn = document.getElementById("next-button");
const countOfQuestion = document.querySelector(".number-of-question");
const displayContainer = document.getElementById("display-container");
const scoreContainer = document.querySelector(".score-container");
const restart = document.getElementById("restart");
const userScore = document.getElementById("user-score");
const welcomeScreen = document.querySelector(".welcome-screen");
const startButton = document.getElementById("start-button");
var questionCount;
let countdown;

//Questions and Options array
const quizArray = [
    {
        id: "0",
        question: "What does FIRS stand for?",
        options: ["Federal Inland Responsibility Service", "Federal Inland Regulatory Service", "Federal Inland Revenue Service"],
        correct: "Federal Inland Revenue Service",
    },
    {
        id: "1",
        question: "What does ICPC stands for?",
        options: ["Independent Corrupt Practices and other Related Offences Commission", "International Cable Protection Committee", "Independent Centre for the Prevention of Crime"],
        correct: "Independent Corrupt Practices and other Related Offences Commission",
    },
    {
        id: "2",
        question: "What is the full meaning of the acronym of the Nigerian agency N.E.M.A.?",
        options: ["Nigerian Economy Management Agency", "National Environmental Management Agency", "National Emergency Management Agency",],
        correct: "National Emergency Management Agency",
    },
    {
        id: "3",
        question: "What does EFCC stands for?",
        options: [" Economic and Finance Crimes Commission", "Economic and Financial Crimes Commission", "Economic and Financial Crimes Corporation"],
        correct: "Economic and Financial Crimes Commission",
    },
    {
        id: "4",
        question: " What does CAF acronym stand for?",
        options: [" Confederation of American Football", "Confederation of African Football", "Commision for African Football"],
        correct: "Confederation of African Football",
    },
    {
        id: "5",
        question: "If a square has four sides, how many sides is an octagon?",
        options: ["16", "8", "6"],
        correct: "8",
    }, {
        id: "6",
        question: "If August 31st, 2007 fell on a Friday, on what day will it fall on August 31st, 2008?",
        options: ["Wednesday", "Saturday", "Sunday"],
        correct: "Sunday",
    },
    {
        id: "7",
        question: "The first University in Nigeria is?",
        options: ["Obafemi Awolowo University (OAU)", "University of Ibadan (UI)", "University of Nigeria (UNN)"],
        correct: "University of Ibadan (UI)",
    },
    {
        id: "8",
        question: "CNN is owned by.......",
        options: ["Metro Goldwyn Meyer", "Fundamental Broadcasting System", "Turner Broadcasting System"],
        correct: "Turner Broadcasting System",
    },
    {
        id: "9",
        question: "The first television station in Africa was built in......",
        options: ["South Africa", "Egypt", "Nigeria"],
        correct: "Nigeria",
    },
    {
        id: "10",
        question: "......... Encompasses the ability to apply specialised knowledge or expertise.",
        options: ["Mental skills", "Conceptual skills", "Technical skills"],
        correct: "Technical skills",
    },
    {
        id: "11",
        question: "The layer of the atmosphere that protects the earth's surface from direct lethal effects of solar energy is called the...........",
        options: ["Ozione layer", "Ozone layer", "Ozonet layer"],
        correct: "Ozone layer",
    },
    {
        id: "12",
        question: "The highest coffee producer in the world is........",
        options: ["Ivory Coast", "Ghana", "Nigeria"],
        correct: "Ivory Coast",
    },
    {
        id: "13",
        question: "The largest Ocean in the world is........",
        options: ["Indian Ocean", "Pacific Ocean", "Atlantic Ocean"],
        correct: "Pacific Ocean",
    },
    {
        id: "14",
        question: "Who is the first female Chief Justice of Nigeria?",
        options: ["Justice Murtala Nyako", "Justice Mary Odili", "Justice Aloma Mariam Mukhtar"],
        correct: "Justice Aloma Mariam Mukhtar",
    },
    {
        id: "15",
        question: "The main petroleum producing countries in Africa are.......",
        options: ["Nigeria and Algeria", "Nigeria and Libya", "Tunisia and South Africa"],
        correct: "Nigeria and Libya",
    },
    {
        id: "16",
        question: "The first Nigerian female to become an Army Major General was........",
        options: ["Aderonke Kale", "Josephine Okwuekeleke Tolefe", "Blessing Liman"],
        correct: "Aderonke Kale",
    },
    {
        id: "17",
        question: "The hydro-electric power station in Niger River is located in..........",
        options: ["Suleja", "Minna", "Kainji"],
        correct: "Kainji",
    },
    {
        id: "18",
        question: "Dutse is the capital of.........",
        options: ["Zamfara", "Jigawa", "Nasarawa"],
        correct: "Jigawa",
    },
    {
        id: "19",
        question: "One of the two Japanese cities in which the United States conducted atomic bombings during the final stages of World War II was?",
        options: ["Nagasaki", "Kyoto", "Niigata"],
        correct: "Nagasaki",
    }
];

//Next Button
nextBtn.addEventListener(
    "click",
    (displayNext = () => {
        //increment questionCount
        questionCount += 1;
        //if last question
        if (questionCount == quizArray.length) {
            //hide question container and display score
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
            //user score
            userScore.innerHTML =
                "Your score is " + scoreCount + " out of " + questionCount;
        } else {
            //display questionCount
            countOfQuestion.innerHTML =
                questionCount + 1 + " of " + quizArray.length + " Question";
            //display quiz
            quizDisplay(questionCount);
            // timerDisplay();
        }
    })
);

//Timer
const timerDisplay = () => {};

//Display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    //Hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    //display current question card
    quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
    quizArray.sort(() => Math.floor() - 1);
    //generate quiz
    for (let i of quizArray) {

        //randomly sort options
        i.options.sort(() => Math.random() - 1);

        //quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");

        //question number
        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
        
        //question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        
        //options
        div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
    `;
        quizContainer.appendChild(div);
    }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    //if user clicked answer == correct option stored in object
    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
        
        //For marking the correct option
        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }

    //disable all options after selection
    options.forEach((element) => {
        element.disabled = true;
    });
}

//setup
function setup() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
    welcomeScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    setup();
});

//hide quiz and display start screen
window.onload = () => {
    welcomeScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};

//Restart Quiz
restart.addEventListener("click", () => {
    setup();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});
