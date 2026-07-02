//Array of questions for the dog 
const dogQuestion = [
    {
        title: "Question 1",
        question: "What is Body Shape of your dog?",
        options: [
            // Question 1 - Body
            {
                name: "Slim Build",
                risk: "Low",
                score: 0,
                problems: []
            },
            {
                name: "Square Build",
                risk: "Medium",
                score: 1,
                problems: [
                    "Joint stress"
                ]
            },
            {
                name: "Stocky Build",
                risk: "Medium",
                score: 1,
                problems: [
                    "Weight gain",
                    "Hip problems",
                    "Joint pain"
                ]
            },
            {
                name: "Compact Build",
                risk: "High",
                score: 2,
                problems: [
                    "Breathing problems",
                    "Heat sensitivity",
                    "Back problems"
                ]
            }
        ]
    },

    {
        title: "Question 2",
        question: "What is Eye Shape of your dog?",
        options: [
            // Question 2 - Eye Shape
            {
                name: "Almond-shaped Eyes",
                risk: "Low",
                score: 0,
                problems: []
            },
            {
                name: "Round Eyes",
                risk: "Medium",
                score: 1,
                problems: [
                    "Dry eyes",
                    "Eye irritation",
                    "Watery eyes"
                ]
            },
            {
                name: "Triangular Eyes",
                risk: "Medium",
                score: 1,
                problems: [
                    "Eyelid problems",
                    "Eye irritation"
                ]
            },
            {
                name: "Slanted Eyes",
                risk: "Medium",
                score: 1,
                problems: [
                    "Eye irritation",
                    "Eyelid problems"
                ]
            }
        ]
    },

    {
        title: "Question 3",
        question: "What is Ear Shape of your dog?",
        options: [
            // Question 3 - Ears
            {
                name: "Prick Ears",
                risk: "Low",
                score: 0,
                problems: []
            },
            {
                name: "Semi-Prick Ears",
                risk: "Medium",
                score: 1,
                problems: [
                    "Ear infection"
                ]
            },
            {
                name: "Drop Ears",
                risk: "High",
                score: 2,
                problems: [
                    "Ear infection",
                    "Ear mites",
                    "Wax build-up"
                ]
            },
            {
                name: "Folded Ears",
                risk: "Medium",
                score: 1,
                problems: [
                    "Poor airflow",
                    "Ear infection"
                ]
            }
        ]
    },

    {
        title: "Question 4",
        question: "What is Tail of your dog?",
        options: [
            // Question 4 - Tail
            {
                name: "Otter Tail",
                risk: "Low",
                score: 0,
                problems: []
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
                name: "Screw Tail",
                risk: "High",
                score: 2,
                problems: [
                    "Back problems",
                    "Tail pain",
                    "Skin infection"
                ]
            },
            {
                name: "Bobtail / Tailless",
                risk: "High",
                score: 2,
                problems: [
                    "Back problems",
                    "Nerve problems",
                    "Weak back legs"
                ]
            }
        ]
    }
]

//variable to keep track of the current question
let currentQuestion = 0;

let answer = [];

//link to the HTML elements
function loadDogQuestion() {

    document.getElementById("title").innerHTML =
        dogQuestion[currentQuestion].title;

    document.getElementById("question").innerHTML =
        dogQuestion[currentQuestion].question;

    document.getElementById("btn0").innerHTML =
        dogQuestion[currentQuestion].options[0].name;

    document.getElementById("btn1").innerHTML =
        dogQuestion[currentQuestion].options[1].name;

    document.getElementById("btn2").innerHTML =
        dogQuestion[currentQuestion].options[2].name;

    document.getElementById("btn3").innerHTML =
        dogQuestion[currentQuestion].options[3].name;
}

loadDogQuestion()