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

let titleColor;
// let cardBackColor;


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

    titleColor =
        "#B02020";

    cardBackColor =
        "#323945";

}

else if (hasMediumRisk) {

    overallRisk =
        "Middle Concerns";

    titleColor =
        "#C55C2C";

    cardBackColor =
        "#73638C";

}

else {

    overallRisk =
        "Healthy";

    titleColor =
        "#EEECBB";

    cardBackColor =
        "#EEE3EE";

}

// ===============================
// Ending Background
// ===============================

const endingBg =
    document.getElementById("endingBg");


if (hasHighRisk) {

    endingBg.classList.add(
        "ending-high"
    );

}

else if (hasMediumRisk) {

    endingBg.classList.add(
        "ending-medium"
    );

}

else {

    endingBg.classList.add(
        "ending-low"
    );

}


// ===============================
// Display Overall Risk
// ===============================

const resultTitle =
    document.getElementById(
        "overall-risk"
    );

resultTitle.textContent =
    overallRisk;

resultTitle.style.color =
    titleColor;

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
                    <svg id="nextButtonIcon" xmlns="http://www.w3.org/2000/svg" width="25" height="29"
                        viewBox="0 0 25 29" fill="none">
                        <path
                            d="M4.10474 16.2741L4.07954 16.3156C1.68478 20.2549 5.24093 22.8769 7.5276 22.1966C9.76404 21.5313 11.9911 20.5686 14.1077 17.7877C15.5287 15.9207 15.3064 13.871 14.5519 11.9442C13.3607 8.90179 11.8733 8.25927 8.73243 6.83584C4.2829 4.81932 2.0404 10.4117 3.94274 12.6198C5.34033 14.2421 5.01007 14.7852 4.10474 16.2741Z"
                            fill="currentColor" />
                        <ellipse cx="3.0178" cy="3.51652" rx="3.0178" ry="3.51652"
                            transform="matrix(0.453188 -0.891415 -0.891415 -0.453188 15.7852 28.1679)"
                            fill="currentColor" />
                        <ellipse cx="3.26328" cy="4.05741" rx="3.26328" ry="4.05741"
                            transform="matrix(0.198867 -0.980026 -0.980026 -0.198867 23.4669 22.9606)"
                            fill="currentColor" />
                        <ellipse cx="3.26328" cy="4.05741" rx="3.26328" ry="4.05741"
                            transform="matrix(-0.162645 -0.986685 -0.986685 0.162645 24.9405 13.2917)"
                            fill="currentColor" />
                        <ellipse cx="3.26328" cy="4.05741" rx="3.26328" ry="4.05741"
                            transform="matrix(-0.479057 -0.877784 -0.877784 0.479057 20.5567 5.72892)"
                            fill="currentColor" />
                    </svg>
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
            
            <h4>
                ${item.name}
            </h4>

            <img
                src="${item.buttonImage}"
                alt="${item.name}"
                class="selection-image"
            >

            <div class="hover-hint">

                <div class="hover-text">
                    <h6>
                        HOVER TO REVEAL
                    </h6>
                </div>

                <div class="hand-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="47" height="61" viewBox="0 0 57 61" fill="none">
                    <path d="M26.3803 15.4533C25.1732 13.0153 23.0471 11.1565 20.4695 10.2861C17.892 9.41565 15.0743 9.60478 12.6362 10.8119C10.1981 12.019 8.33937 14.1451 7.46893 16.7227C6.59849 19.3002 6.78761 22.1179 7.99471 24.556" stroke="#6A524E" stroke-width="3.56141" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M23.5433 25.2159L20.6361 19.344C20.2098 18.5386 19.486 17.9313 18.6187 17.6515C17.7515 17.3716 16.8092 17.4413 15.9925 17.8456C15.1759 18.2499 14.5492 18.957 14.246 19.8164C13.9427 20.6758 13.9868 21.6196 14.3689 22.4469L23.3487 40.5843L18.3057 38.9119C17.7816 38.7402 17.2274 38.6796 16.6786 38.734C16.1298 38.7885 15.5984 38.9568 15.1183 39.2281C14.6382 39.4995 14.2199 39.868 13.8902 40.3101C13.5605 40.7522 13.3266 41.2581 13.2034 41.7957C13.0129 42.6367 13.1105 43.5174 13.4806 44.2963C13.8506 45.0752 14.4717 45.7071 15.244 46.0907L25.6132 51.2442C27.9666 52.4141 29.1432 52.999 30.3589 53.3043C32.2196 53.768 34.1647 53.7665 36.0336 53.299C37.2551 52.9919 38.4432 52.4036 40.8173 51.2282C45.3447 48.9867 47.6085 47.8659 49.0723 46.2913C50.1766 45.1083 51.0197 43.7063 51.547 42.1764C52.0742 40.6464 52.2737 39.0226 52.1326 37.4105C51.9437 35.2892 50.8377 33.0554 48.6258 28.5877L46.1078 23.5017C45.6152 22.5248 44.7917 21.7546 43.7841 21.3285C42.7765 20.9023 41.6502 20.8479 40.6062 21.1749L39.8369 21.4127C39.5638 21.4936 39.3116 21.6328 39.0978 21.8207C38.8839 22.0087 38.7134 22.2409 38.5981 22.5013C38.4829 22.7617 38.4257 23.044 38.4303 23.3287C38.435 23.6134 38.5016 23.8937 38.6253 24.1501M23.5433 25.2159L24.4563 24.0256C24.8955 23.4505 25.4526 22.9458 26.1585 22.7822C27.1678 22.5423 28.2286 22.6501 29.1689 23.0882C30.1093 23.5263 30.8742 24.269 31.3398 25.1961M23.5433 25.2159L26.0886 30.357M38.6253 24.1501C37.5 21.8772 34.7179 20.9625 32.4105 22.1049C31.2568 22.6761 30.7777 24.0608 31.3398 25.1961M38.6253 24.1501L39.6437 26.207M31.3398 25.1961L32.3581 27.253" stroke="#6A524E" stroke-width="3.56141" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>

            </div>

        </div>


        <!-- =========================
            BACK
        ========================== -->

        <div class="card-back risk-${item.risk.toLowerCase()}">

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