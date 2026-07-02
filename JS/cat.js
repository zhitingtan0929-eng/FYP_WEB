//Array of questions for the cat 
const catQuestion = [
    {
        title: "Question 1",
        question: "What is Body Shape of your cat?",
        options: [
            // Question 1 - Body Shape
            {
                name: "Slender Body",
                risk: "Low",
                score: 0,
                problems: []
            },
            {
                name: "Cobby Body",
                risk: "Medium",
                score: 1,
                problems: [
                    "Weight gain",
                    "Joint stress"
                ]
            },
            {
                name: "Heavy Boned",
                risk: "Medium",
                score: 1,
                problems: [
                    "Weight gain",
                    "Joint pain"
                ]
            },
            {
                name: "Dwarf / Short-legged",
                risk: "High",
                score: 2,
                problems: [
                    "Back problems",
                    "Joint pain",
                    "Limited movement"
                ]
            }
        ]
    },

    {
        title: "Question 2",
        question: "What is Eye Shape of your cat?",
        options: [
            // Question 2 - Eye Shape
            {
                name: "Round / Almond Eyes",
                risk: "Low",
                score: 0,
                problems: []
            },
            {
                name: "Large Round Eyes",
                risk: "Medium",
                score: 1,
                problems: [
                    "Watery eyes",
                    "Dry eyes",
                    "Eye irritation"
                ]
            },
            {
                name: "Deep-set Eyes",
                risk: "Medium",
                score: 1,
                problems: [
                    "Eyelid irritation",
                    "Eye discomfort"
                ]
            },
            {
                name: "Protruding Eyes",
                risk: "High",
                score: 2,
                problems: [
                    "Eye injury",
                    "Eye infection",
                    "Vision problems"
                ]
            }
        ]
    },

    {
        title: "Question 3",
        question: "What is Ear Shape of your cat?",
        options: [
            // Question 3 - Ear Shape
            {
                name: "Straight Ears",
                risk: "Low",
                score: 0,
                problems: []
            },
            {
                name: "Large Upright Ears",
                risk: "Medium",
                score: 1,
                problems: [
                    "Ear mites"
                ]
            },
            {
                name: "Small / Low-set Ears",
                risk: "Medium",
                score: 1,
                problems: [
                    "Ear infection",
                    "Wax build-up"
                ]
            },
            {
                name: "Folded Ears",
                risk: "High",
                score: 2,
                problems: [
                    "Joint pain",
                    "Stiff joints",
                    "Difficulty moving"
                ]
            }
        ]
    },

    {
        title: "Question 4",
        question: "What is Tail of your cat?",
        options: [
            // Question 4 - Tail
            {
                name: "Long Tail",
                risk: "Low",
                score: 0,
                problems: []
            },
            {
                name: "Short Tail",
                risk: "Medium",
                score: 1,
                problems: [
                    "Spinal issues"
                ]
            },
            {
                name: "Curled Tail",
                risk: "Medium",
                score: 1,
                problems: [
                    "Tail stiffness"
                ]
            },
            {
                name: "Tailless / Stub Tail",
                risk: "High",
                score: 2,
                problems: [
                    "Spinal problems",
                    "Weak back legs",
                    "Toilet control issues"
                ]
            }
        ]
    }
]

//variable to keep track of the current question
let currentQuestion = 0;

let answer = [];

//link to the HTML elements
function loadCatQuestion() {

    document.getElementById("title").innerHTML =
        catQuestion[currentQuestion].title;

    document.getElementById("question").innerHTML =
        catQuestion[currentQuestion].question;

    document.getElementById("btn0").innerHTML =
        catQuestion[currentQuestion].options[0].name;

    document.getElementById("btn1").innerHTML =
        catQuestion[currentQuestion].options[1].name;

    document.getElementById("btn2").innerHTML =
        catQuestion[currentQuestion].options[2].name;

    document.getElementById("btn3").innerHTML =
        catQuestion[currentQuestion].options[3].name;
}

loadCatQuestion()

//function to handle the next question
// parameter: selectedOption - the selected option by the user
function nextQuestion(selectedOption) {
    answer.push(selectedOption);

    currentQuestion++;

    if (currentQuestion < catQuestion.length) {

        loadCatQuestion();
    } else {
        localStorage.setItem("catAnswer", JSON.stringify(answer));
        window.location.href = "result.html";
    }
}