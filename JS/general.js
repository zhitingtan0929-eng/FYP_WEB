// ===============================
// Current Animal
// ===============================

const currentAnimal =
    localStorage.getItem("animal");


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

    for (
        let i = result.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            result[i],
            result[j]
        ] =
            [
                result[j],
                result[i]
            ];

    }

    return result;

}

// ===============================
// Part Icon Navigation
// ===============================

function updatePartIcons(currentPart) {

    const partData = {

        Body: {
            container: "bodyIconContainer",
            icon: "bodyIcon"
        },

        Eyes: {
            container: "eyeIconContainer",
            icon: "eyeIcon"
        },

        Ears: {
            container: "earIconContainer",
            icon: "earIcon"
        },

        Tail: {
            container: "tailIconContainer",
            icon: "tailIcon"
        }

    };


    Object.keys(partData).forEach(part => {

        const container =
            document.getElementById(
                partData[part].container
            );

        const icon =
            document.getElementById(
                partData[part].icon
            );


        if (!container || !icon) return;


        const isSelected =
            part === currentPart;


        // ===============================
        // Container Background
        // ===============================

        container.classList.toggle(
            "Icon-c-select",
            isSelected
        );

        container.classList.toggle(
            "Icon-c-Unselect",
            !isSelected
        );


        // ===============================
        // SVG Main Colour
        // ===============================

        icon.style.color =
            isSelected
                ? "var(--color-background)"
                : "var(--color-text)";


        // ===============================
        // Eyes Circle
        // ===============================

        if (part === "Eyes") {

            const circleColor =
                isSelected
                    ? "var(--color-text)"
                    : "var(--color-background)";


            icon
                .querySelectorAll("circle")
                .forEach(circle => {

                    circle.style.fill =
                        circleColor;

                });

        }

    });

}

// ===============================
// Load Question
// ===============================

function loadQuestion(questionArray) {

    currentQuestionArray =
        questionArray;


    selectedOption = null;

    // ===============================
    // Update Part Icons
    // ===============================

    updatePartIcons(
        questionArray[currentQuestion].part
    );

    // ===============================
    // Back Button
    // ===============================

    if (currentQuestion === 0) {

        backBtn.style.display =
            "none";

    }

    else {

        backBtn.style.display =
            "";

    }


    // ===============================
    // Random Options
    // ===============================

    if (!shuffledOptions[currentQuestion]) {

        shuffledOptions[currentQuestion] =
            shuffle(
                questionArray[currentQuestion].options
            );

    }


    const options =
        shuffledOptions[currentQuestion];


    // ===============================
    // Title
    // ===============================

    // document.getElementById("title").innerHTML =
    //     questionArray[currentQuestion].title;


    // document.getElementById("question").innerHTML =
    //     questionArray[currentQuestion].question;


    // ===============================
    // Clear Buttons
    // ===============================

    for (let i = 0; i < 4; i++) {

        const button =
            document.getElementById("btn" + i);

        button.classList.remove("selected");

    }


    // ===============================
    // Display Options
    // ===============================

    for (let i = 0; i < options.length; i++) {

        const button =
            document.getElementById("btn" + i);

        const option =
            options[i];


        const image = button.querySelector(".animal-icon");

        image.src = option.buttonImage;
        image.alt = option.name;

        button.onclick = async function () {

            // =================================================
            // Remove Previous Selection
            // =================================================

            for (
                let j = 0;
                j < options.length;
                j++
            ) {

                document
                    .getElementById("btn" + j)
                    .classList.remove("selected");

            }


            // =================================================
            // Highlight
            // =================================================

            button.classList.add("selected");


            // =================================================
            // Save Selection
            // =================================================

            selectedOption =
                option;


            // =================================================
            // Update Avatar Image
            // =================================================

            await updateAvatar(

                currentAnimal,

                questionArray[currentQuestion].part,

                selectedOption

            );


            // Body
            const body =
                questionArray[currentQuestion].part === "Body"
                    ? selectedOption.imageID
                    : (
                        answer.find(
                            a => a.part === "Body"
                        )?.imageID || "body1"
                    );

            // Ear
            const ear =
                questionArray[currentQuestion].part === "Ears"
                    ? selectedOption.imageID
                    : getCurrentEar();

            await applyAvatarPosition(
                currentAnimal,
                body,
                ear
            );
        };

    }


    // ===============================
    // Restore Previous Answer
    // ===============================

    if (answer[currentQuestion]) {

        const previousAnswer =
            answer[currentQuestion];


        selectedOption =
            previousAnswer;


        // Find matching option
        const selectedIndex =
            options.findIndex(
                option =>
                    option.imageID ===
                    previousAnswer.imageID
            );


        if (selectedIndex !== -1) {

            document
                .getElementById(
                    "btn" + selectedIndex
                )
                .classList.add("selected");

        }

    }

}


// ===============================
// Next Button
// ===============================

nextBtn.onclick = function () {

    if (selectedOption === null) {

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

function nextQuestion(
    questionArray,
    selectedOption
) {

    // answer[currentQuestion] = {

    //     part:
    //         questionArray[currentQuestion].part,

    //     name:
    //         selectedOption.name,

    //     imageID:
    //         selectedOption.imageID,

    //     buttonImage:
    //         selectedOption.buttonImage,

    //     risk:
    //         selectedOption.risk,

    //     problems:
    //         selectedOption.problems,

    //     problemImage:
    //         selectedOption.problemImage,

    //     breed:
    //         selectedOption.breed,

    //     link:
    //         selectedOption.link

    // };

    // ===============================
    // Save Current Answer
    // ===============================

    answer[currentQuestion] = {

        ...selectedOption,

        part:
            questionArray[currentQuestion].part

    };

    currentQuestion++;


    if (
        currentQuestion <
        questionArray.length
    ) {

        loadQuestion(
            questionArray
        );

    }

    else {

        localStorage.setItem(

            currentAnimal + "Answer",

            JSON.stringify(answer)

        );


        window.location.href =
            "result.html";

    }

}

// ===============================
// Previous Question
// ===============================

function previousQuestion(questionArray) {

    if (currentQuestion <= 0) {

        return;

    }


    currentQuestion--;


    loadQuestion(
        questionArray
    );


    restoreAvatar();

}


// ===============================
// Restore Avatar
// ===============================

function restoreAvatar() {

    answer.forEach(item => {

        updateAvatar(
            currentAnimal,
            item.part,
            item
        );

    });


    const bodyAnswer =
        answer.find(
            item =>
                item.part === "Body"
        );


    if (bodyAnswer) {

        applyAvatarPosition(
            currentAnimal,
            bodyAnswer.imageID,
            getCurrentEar()
        );

    }

}

function getCurrentEar() {

    const ear =
        answer.find(
            item =>
                item.part === "Ears"
        );


    return ear
        ? ear.imageID
        : "ear1";

}


// ===============================
// Home
// ===============================

function goHome() {

    answer = [];

    currentQuestion = 0;

    selectedOption = null;

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