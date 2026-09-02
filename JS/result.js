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


// // ===============================
// // Result Title
// // ===============================

// const title =
//     document.getElementById(
//         "animal-title"
//     );


// if (animal === "cat") {

//     title.innerHTML =
//         "🐱 Your Selected Cat";

// }

// else {

//     title.innerHTML =
//         "🐶 Your Selected Dog";

// }


// ===============================
// Overall Risk
// ===============================

let overallRisk;


// ===============================
// Check High Risk
// ===============================

const hasHighRisk =
    answer.some(
        item => item.risk === "High"
    );


// ===============================
// Check Medium Risk
// ===============================

const hasMediumRisk =
    answer.some(
        item => item.risk === "Medium"
    );


// ===============================
// Determine Overall Risk
// ===============================

if (hasHighRisk) {

    overallRisk =
        "Requires Care";

}

else if (hasMediumRisk) {

    overallRisk =
        "Middle Concerns";

}

else {

    overallRisk =
        "Healthy";

}


// ===============================
// Display Overall Risk
// ===============================

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

    const item = answer[i];

    const card =
        document.createElement("div");

    card.className =
        "result-card";


    // =================================================
    // Problems
    // =================================================

    const problems =
        item.problems || [];


    const problemList =
        problems.length > 0
            ? `
                <ul>
                    ${problems
                .map(problem =>
                    `<li>${problem}</li>`
                )
                .join("")}
                </ul>
              `
            : `
                <p class="no-problem">
                    No major welfare concerns.
                </p>
              `;


    // =================================================
    // Problem Image
    // =================================================

    const problemImage =
        item.problemImage
            ? `
                <img
                    src="${item.problemImage}"
                    alt="${item.name} health problem"
                    class="problem-image"
                >
              `
            : "";


    // =================================================
    // Breed
    // =================================================

    const breed =
        item.breed
            ? `
                <div class="breed-info">
                    <strong>Example Breed</strong>
                    <span>${item.breed}</span>
                </div>
              `
            : "";


    // =================================================
    // Learn More Button
    // =================================================

    const learnMore =
        item.link
            ? `
                <a
                    href="${item.link}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="learn-more-btn"
                >
                    LEARN MORE
                    <span>✿</span>
                </a>
              `
            : "";


    // =================================================
    // Card
    // =================================================

    card.innerHTML = `

        <!-- =========================
             FRONT
        ========================== -->

        <div class="card-front">

            <h3>
                ${item.name}
            </h3>


            <img
                src="${item.buttonImage}"
                alt="${item.name}"
                class="selection-image"
            >


            <div class="hover-hint">

                <span>
                    HOVER<br>
                    TO REVEAL
                </span>

                <span class="hand-icon">
                    🖐
                </span>

            </div>

        </div>


        <!-- =========================
             BACK
        ========================== -->

        <div class="card-back">

            <div class="risk-badge ${item.risk.toLowerCase()}">

                ${item.risk} Risk

            </div>


            ${problemImage}


            <h4>
                Possible Health Problems
            </h4>


            ${problemList}


            ${breed}


            ${learnMore}

        </div>

    `;


    container.appendChild(card);

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