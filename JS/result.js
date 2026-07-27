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

async function loadResultAvatar() {


    // ===============================
    // Load Latest Config
    // ===============================

    await loadAvatarConfig();


    // ===============================
    // Display Images
    // ===============================

    answer.forEach(item => {

        updateAvatar(

            animal,

            item.part,

            item

        );

    });


    // ===============================
    // Find Body
    // ===============================

    const bodyAnswer =
        answer.find(

            item =>
                item.part === "Body"

        );


    // ===============================
    // Apply Body Position
    // ===============================

    if (bodyAnswer) {

        applyAvatarPosition(

            animal,

            bodyAnswer.imageID

        );

    }

}


// ===============================
// Start Avatar
// ===============================

loadResultAvatar();


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