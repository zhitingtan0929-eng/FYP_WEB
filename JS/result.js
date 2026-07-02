//===============================
// Risk Score
//===============================
const riskScore = {
    Low: 0,
    Medium: 1,
    High: 2
};

//===============================
// Get Animal Type
//===============================
const animal = localStorage.getItem("animal");

//===============================
// Get Answers
//===============================
const answer = JSON.parse(
    localStorage.getItem(animal + "Answer")
);

// ==========================================
// change Result_title
// ==========================================
const title = document.getElementById("animal-title");

if (animal == "cat") {
    title.innerHTML = "🐱 Your Selected Cat";
}
else {
    title.innerHTML = "🐶 Your Selected Dog";
}

//===============================
// Calculate Score
//===============================
let totalScore = 0;

for (let i = 0; i < answer.length; i++) {
    //totalScore += answer[i].score;
    totalScore += riskScore[answer[i].risk];
}

//===============================
// Calculate Overall Risk
//===============================
let overallRisk = "";

if (totalScore <= 2) {
    overallRisk = "🟢 Low Risk";
}
else if (totalScore <= 5) {
    overallRisk = "🟡 Medium Risk";
}
else {
    overallRisk = "🔴 High Risk"
}

document.getElementById("overall-risk").innerHTML = overallRisk;

//===============================
// Create Cards
////<!--<img src="../IMG/${answer[i].image}">-->
//===============================
const container = document.getElementById("card-container");

for (let i = 0; i < answer.length; i++) {
    const card = document.createElement("div");
    card.className = "result-card";
    card.innerHTML =
        `
        <div class="card-front">
            <h3>${answer[i].part}</h3>
            <p>${answer[i].name}</p>
        </div>
        
        <div class="card-back">
            <h4>${answer[i].risk} Risk</h4>
            ${answer[i].problems.length == 0 ?
            "<p>No major welfare concerns.</p>"

            :

            "<ul><li>" +
            answer[i].problems.join("</li><li>")
            + "</li></ul>"}

        </div>
        `;

    container.appendChild(card);
}

//===============================
// Restart
//===============================
document.getElementById("restartBtn").onclick = function () {

    localStorage.removeItem("catAnswer");
    localStorage.removeItem("dogAnswer");
    localStorage.removeItem("animal");

    //window.location.href = "choose_animal.html";
    window.location.href = "index.html";
}