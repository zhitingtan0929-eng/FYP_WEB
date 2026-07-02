homeBtn.onclick = function () {
    answer = [];
    currentQuestion = 0;
    localStorage.removeItem("catAnswer");
    window.location.href = "index.html";
}


//Back button functionality
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        answer.pop(); // Remove the last answer when going back
        loadCatQuestion();
    }
}