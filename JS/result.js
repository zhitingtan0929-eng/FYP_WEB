const answer =
    JSON.parse(localStorage.getItem("catAnswer"));

//variable to keep track of the total score
let totalScore = 0;
//variable to keep track of the overall risk level
let overallRisk = "";

//calculate the total score based on the selected answers
for (let i = 0; i < answer.length; i++) {
    //totalScore += answer[i].score;
    totalScore += riskScore[answer[i].risk];
}


//determine the overall risk level based on the total score
if (totalScore <= 2) {
    overallRisk = "Low";
}
else if (totalScore <= 5) {
    overallRisk = "Medium";
}
else {
    overallRisk = "High"
}