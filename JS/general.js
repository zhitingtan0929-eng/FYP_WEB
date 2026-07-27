const currentAnimal = localStorage.getItem("animal");


// ===============================
// Variables
// ===============================

let currentQuestion = 0;

let answer = [];

let selectedOption = null;

let currentQuestionArray;


// 保存每一题随机后的顺序
let shuffledOptions = [];



// ===============================
// Shuffle Function
// ===============================

function shuffle(array) {

    let result = [...array];

    for (let i = result.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [result[i], result[j]] =
            [result[j], result[i]];

    }

    return result;

}



// ===============================
// Load Question
// ===============================

function loadQuestion(questionArray) {


    currentQuestionArray = questionArray;


    selectedOption = null;



    // ===============================
    // Back Button
    // ===============================

    if (currentQuestion == 0) {

        backBtn.style.display = "none";

    }
    else {

        backBtn.style.display = "inline-block";

    }



    // ===============================
    // Create Random Options
    // ===============================

    if (!shuffledOptions[currentQuestion]) {


        shuffledOptions[currentQuestion] =
            shuffle(
                questionArray[currentQuestion].options
            );

    }



    let options =
        shuffledOptions[currentQuestion];




    // ===============================
    // Title
    // ===============================

    document.getElementById("title").innerHTML =
        questionArray[currentQuestion].title;



    document.getElementById("question").innerHTML =
        questionArray[currentQuestion].question;



    // ===============================
    // Clear Button Highlight
    // ===============================

    for (let i = 0; i < options.length; i++) {

        document
            .getElementById("btn" + i)
            .classList.remove("selected");

    }



    // ===============================
    // Display Buttons
    // ===============================

    for (let i = 0; i < options.length; i++) {


        const button =
            document.getElementById("btn" + i);



        const option =
            options[i];



        button.innerHTML =
            option.name;




        button.onclick = function () {



            // Remove previous selection

            for (let j = 0; j < options.length; j++) {

                document
                    .getElementById("btn" + j)
                    .classList.remove("selected");

            }



            // Highlight selected button

            button.classList.add("selected");



            // Save selection

            selectedOption = option;



            // Update Avatar

            updateAvatar(

                currentAnimal,

                questionArray[currentQuestion].part,

                selectedOption

            );

        };


    }

}



// ===============================
// Next Button
// ===============================

nextBtn.onclick = function () {



    if (selectedOption == null) {


        alert(
            "Please select an option."
        );


        return;

    }



    nextQuestion(

        currentQuestionArray,

        selectedOption

    );


};




// ===============================
// Next Question
// ===============================

function nextQuestion(questionArray, selectedOption) {



    answer[currentQuestion] = {


        part:
            questionArray[currentQuestion].part,


        name:
            selectedOption.name,


        imageID:
            selectedOption.imageID,


        risk:
            selectedOption.risk,


        problems:
            selectedOption.problems


    };



    currentQuestion++;



    if (currentQuestion < questionArray.length) {


        loadQuestion(questionArray);


    }

    else {


        localStorage.setItem(

            currentAnimal + "Answer",

            JSON.stringify(answer)

        );


        window.location.href =
            "../html/result.html";


    }


}





// ===============================
// Previous Question
// ===============================

function previousQuestion(questionArray) {



    if (currentQuestion > 0) {


        currentQuestion--;



        loadQuestion(questionArray);



        // Restore Avatar

        restoreAvatar();



    }


}





// ===============================
// Restore Avatar when Back
// ===============================

function restoreAvatar() {



    answer.forEach(item => {


        updateAvatar(

            currentAnimal,

            item.part,

            item

        );


    });


}




// ===============================
// Home
// ===============================

function goHome() {



    answer = [];

    currentQuestion = 0;


    shuffledOptions = [];



    localStorage.removeItem(
        "catAnswer"
    );


    localStorage.removeItem(
        "dogAnswer"
    );



    window.location.href =
        "choose_animal.html";


}