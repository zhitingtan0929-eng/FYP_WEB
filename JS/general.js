// ===============================
// Current Animal
// ===============================

const currentAnimal =
    localStorage.getItem("animal");


// ===============================
// Variables
// ===============================

let currentQuestion = 0;

let avatarUpdateToken = 0;

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
// Part Icon Click Navigation
// ===============================

// Save current selection before switching
function saveCurrentAnswer() {

    if (
        !currentQuestionArray ||
        selectedOption === null
    ) {
        return;
    }

    answer[currentQuestion] = {
        ...selectedOption,
        part: currentQuestionArray[currentQuestion].part
    };
}


// Switch directly to selected part

function goToPart(partName) {

    if (!currentQuestionArray) return;

    const targetIndex =
        currentQuestionArray.findIndex(
            question =>
                question.part.toLowerCase() ===
                partName.toLowerCase()
        );

    if (targetIndex === -1) return;

    changeStage(targetIndex);
}

// // Add click event to each part icon
// document.querySelectorAll(".partIcon").forEach(icon => {

//     icon.addEventListener("click", function () {

//         const partName = this.dataset.part;

//         goToPart(partName);

//     });

// });



// ===============================
// Shared Stage Navigation
// ===============================

function changeStage(targetIndex) {

    if (!currentQuestionArray) return;

    if (
        targetIndex < 0 ||
        targetIndex >= currentQuestionArray.length
    ) {
        return;
    }

    saveCurrentAnswer();

    // Invalidate pending avatar updates
    avatarUpdateToken++;

    currentQuestion = targetIndex;

    loadQuestion(currentQuestionArray);
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

        const name =
            button.querySelector(".option-name");

        name.textContent =
            option.name;



        button.onclick = async function () {

            // Capture current stage and selection
            const clickedPart =
                questionArray[currentQuestion].part;

            const clickedOption = option;

            const clickedQuestionIndex = currentQuestion;

            // Create latest update token
            const updateToken = ++avatarUpdateToken;

            // Clear previous highlights
            for (let j = 0; j < options.length; j++) {
                document
                    .getElementById("btn" + j)
                    .classList.remove("selected");
            }

            // Highlight current selection
            button.classList.add("selected");

            // Save current selection
            selectedOption = clickedOption;

            // Update image
            await updateAvatar(
                currentAnimal,
                clickedPart,
                clickedOption,
                updateToken
            );

            // Stop if another update has started
            if (
                updateToken !== avatarUpdateToken ||
                clickedQuestionIndex !== currentQuestion
            ) {
                return;
            }

            // Find current body
            const bodyAnswer =
                clickedPart === "Body"
                    ? clickedOption
                    : answer.find(item => item?.part === "Body");

            const bodyID =
                bodyAnswer?.imageID || "body1";

            // Find current ear
            const earAnswer =
                clickedPart === "Ears"
                    ? clickedOption
                    : answer.find(item => item?.part === "Ears");

            const earID =
                earAnswer?.imageID || "ear1";

            // Apply position using the same token
            await applyAvatarPosition(
                currentAnimal,
                bodyID,
                earID,
                updateToken
            );

        };

    }


    // ===============================
    // Restore Previous Answer
    // ===============================

    // 如果之前选过，就恢复之前的选择；否则使用原始选项中的第一个
    const targetOption =
        answer[currentQuestion] ||
        questionArray[currentQuestion].options[0];

    // 在随机排列后的选项中找到对应的选项
    const selectedIndex = options.findIndex(
        option => option.imageID === targetOption.imageID
    );

    if (selectedIndex !== -1) {
        // 触发选项本身的点击逻辑
        // 自动更新 selectedOption、选中样式和 Avatar
        document.getElementById("btn" + selectedIndex).click();
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


function nextQuestion(questionArray, selectedOption) {
    // Save current selection
    answer[currentQuestion] = {
        ...selectedOption,
        part: questionArray[currentQuestion].part
    };

    // If this is the last stage, fill all unanswered parts with defaults
    if (currentQuestion === questionArray.length - 1) {

        questionArray.forEach((question, index) => {

            const part = question.part;

            // Check whether this part already has an answer
            const existingAnswer = answer.find(
                item => item && item.part === part
            );

            // If unanswered, use the first original option as default
            if (!existingAnswer) {

                answer[index] = {
                    ...question.options[0],
                    part: part
                };
            }
        });

        // Save completed answers
        localStorage.setItem(
            currentAnimal + "Answer",
            JSON.stringify(answer)
        );

        window.location.href = "result.html";
        return;
    }

    // Always move to the next stage in sequence
    changeStage(currentQuestion + 1);

}

// ===============================
// Previous Question
// ===============================


function previousQuestion(questionArray) {

    if (currentQuestion <= 0) return;

    changeStage(currentQuestion - 1);

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