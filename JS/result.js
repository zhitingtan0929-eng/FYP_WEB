// ===============================
// Risk Score
// ===============================

const riskScore = {

    Low: 0,

    Medium: 1,

    High: 2

};


// ===============================
// Get Animal
// ===============================

const animal =
    localStorage.getItem("animal");


// ===============================
// Get Answers
// ===============================

const savedAnswer =
    localStorage.getItem(
        animal + "Answer"
    );


if (!animal || !savedAnswer) {

    alert(
        "No result data found."
    );

    window.location.href =
        "choose_animal.html";

}


// ===============================
// Parse Answers
// ===============================

const answer =
    JSON.parse(
        savedAnswer
    );


// ===============================
// Result Title
// ===============================

const title =
    document.getElementById(
        "animal-title"
    );


if (animal === "cat") {

    title.innerHTML =
        "🐱 Your Selected Cat";

}

else {

    title.innerHTML =
        "🐶 Your Selected Dog";

}


// ===============================
// Calculate Score
// ===============================

let totalScore = 0;


for (
    let i = 0;
    i < answer.length;
    i++
) {

    totalScore +=
        riskScore[
        answer[i].risk
        ];

}


// ===============================
// Overall Risk
// ===============================

let overallRisk;


if (totalScore <= 2) {

    overallRisk =
        "🟢 Low Risk";

}

else if (totalScore <= 5) {

    overallRisk =
        "🟡 Medium Risk";

}

else {

    overallRisk =
        "🔴 High Risk";

}


document.getElementById(
    "overall-risk"
).innerHTML =
    overallRisk;


// ===============================
// Create Result Cards
// ===============================

const container =
    document.getElementById(
        "card-container"
    );


for (
    let i = 0;
    i < answer.length;
    i++
) {

    const card =
        document.createElement(
            "div"
        );


    card.className =
        "result-card";


    const problems =
        answer[i].problems || [];


    card.innerHTML = `

        <div class="card-front">

            <h3>
                ${answer[i].part}
            </h3>

            <p>
                ${answer[i].name}
            </p>

        </div>


        <div class="card-back">

            <h4>
                ${answer[i].risk} Risk
            </h4>

            ${problems.length === 0

            ?

            "<p>No major welfare concerns.</p>"

            :

            "<ul><li>" +
            problems.join(
                "</li><li>"
            ) +
            "</li></ul>"
        }

        </div>

    `;


    container.appendChild(
        card
    );

}


// ===============================
// Display Result Avatar
// ===============================

// ===============================
// Load Result Avatar
// ===============================

async function loadResultAvatar() {

    // =================================================
    // Load Config
    // =================================================

    await loadAvatarConfig();


    // =================================================
    // Preload Avatar Images
    // =================================================

    await preloadAllAvatarImages(animal);


    // =================================================
    // Find Body
    // =================================================

    const bodyAnswer =
        answer.find(
            item =>
                item.part === "Body"
        );


    if (!bodyAnswer) {

        console.error(
            "Body answer not found."
        );

        return;

    }


    // =================================================
    // Load Selected Parts
    // =================================================

    for (const item of answer) {

        await updateAvatar(
            animal,
            item.part,
            item
        );

    }


    // =================================================
    // Ear
    // =================================================

    const earAnswer =
        answer.find(
            item =>
                item.part === "Ears"
        );


    // =================================================
    // Apply Position + Layer
    // =================================================

    await applyAvatarPosition(
        animal,
        bodyAnswer.imageID,
        earAnswer?.imageID || "ear1"
    );


    console.log(
        "✅ Result Avatar Ready:",
        animal,
        bodyAnswer.imageID
    );

}

// ===============================
// Start Avatar
// ===============================

window.onload = async function () {

    await loadResultAvatar();

};


// ===============================
// Restart
// ===============================

document
    .getElementById("restartBtn")
    .onclick = function () {


        localStorage.removeItem(
            "catAnswer"
        );


        localStorage.removeItem(
            "dogAnswer"
        );


        localStorage.removeItem(
            "animal"
        );


        window.location.href =
            "index.html";

    };