const currentAnimal = localStorage.getItem("animal");

// ===============================
// Variables
// ===============================
let currentQuestion = 0;
let answer = [];

// ===============================
// Load Question
// ===============================
function loadQuestion(questionArray) {

    document.getElementById("title").innerHTML =
        questionArray[currentQuestion].title;

    document.getElementById("question").innerHTML =
        questionArray[currentQuestion].question;

    // Display options
    for (let i = 0; i < questionArray[currentQuestion].options.length; i++) {

        const button = document.getElementById("btn" + i);

        button.innerHTML =
            questionArray[currentQuestion].options[i].name;

        button.onclick = function () {

            nextQuestion(
                questionArray,
                questionArray[currentQuestion].options[i]
            );

        };
    }
}

// ===============================
// Next Question
// ===============================
function nextQuestion(questionArray, selectedOption) {

    answer.push({

        part: questionArray[currentQuestion].part,

        name: selectedOption.name,

        imageID: selectedOption.imageID,

        risk: selectedOption.risk,

        problems: selectedOption.problems

    });

    updateAvatar(

        currentAnimal,

        questionArray[currentQuestion].part,

        selectedOption

    );


    currentQuestion++;

    if (currentQuestion < questionArray.length) {

        loadQuestion(questionArray);

    }
    else {

        localStorage.setItem(
            currentAnimal + "Answer",
            JSON.stringify(answer)
        );

        window.location.href = "../html/result.html";
    }

}

// ===============================
// Previous Question
// ===============================
function previousQuestion(questionArray) {

    if (currentQuestion > 0) {

        currentQuestion--;

        answer.pop();

        loadQuestion(questionArray);

    }

}

// ===============================
// Home
// ===============================
function goHome() {

    answer = [];

    currentQuestion = 0;

    localStorage.removeItem("catAnswer");
    localStorage.removeItem("dogAnswer");

    window.location.href = "choose_animal.html";

}