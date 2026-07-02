const catQuestion = [
    {
        title: "Question 1",
        question: "What is Body Shape of your cat?",
        options: [
            "Slender Body",
            "Cobby Body",
            "Heavy Boned",
            "Dwarf / Short-legged"
        ]
    },

    {
        title: "Question 2",
        question: "What is Eye Shape of your cat?",
        options: [
            "Almond Eyes",
            "Large Round Eyes",
            "Deep-set Eyes",
            "Protruding Eyes"
        ]
    },

    {
        title: "Question 3",
        question: "What is Ear Shape of your cat?",
        options: [
            "Straight Ears",
            "Large Upright Ears",
            "Small / Low-set Ears",
            "Folded Ears"
        ]
    },

    {
        title: "Question 4",
        question: "What is Tail of your cat?",
        options: [
            "Long Tail",
            "Short Tail",
            "Curled Tail",
            "Tailless / Stub Tail"
        ]
    }
]

let currentQuestion = 0;

function loadCatQuestion() {

    document.getElementById("title").innerHTML =
        catQuestion[currentQuestion].title;

    document.getElementById("question").innerHTML =
        catQuestion[currentQuestion].question;

    document.getElementById("btn0").innerHTML =
        catQuestion[currentQuestion].options[0];

    document.getElementById("btn1").innerHTML =
        catQuestion[currentQuestion].options[1];

    document.getElementById("btn2").innerHTML =
        catQuestion[currentQuestion].options[2];

    document.getElementById("btn3").innerHTML =
        catQuestion[currentQuestion].options[3];
}