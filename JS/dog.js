//const currentAnimal = "dog";

//Array of questions for the dog 
const dogQuestion = [
    {
        part: "Body",
        title: "🐶Question 1",
        question: "What is Body Shape of your dog?",
        options: [
            // Question 1 - Body
            {
                name: "Slim Build",
                imageID: "body1",
                risk: "Low",
                //score: 0,
                problems: []
            },
            {
                name: "Square Build",
                imageID: "body2",
                risk: "Medium",
                //score: 1,
                problems: [
                    "Joint stress"
                ]
            },
            {
                name: "Stocky Build",
                imageID: "body3",
                risk: "Medium",
                //score: 1,
                problems: [
                    "Weight gain",
                    "Hip problems",
                    "Joint pain"
                ]
            },
            {
                name: "Compact Build",
                imageID: "body4",
                risk: "High",
                //score: 2,
                problems: [
                    "reduced airway space",
                    "overheating risk",
                    "Back problems"
                ]
            }
        ]
    },

    {
        part: "Eyes",
        title: "🐶Question 2",
        question: "What is Eye Shape of your dog?",
        options: [
            // Question 2 - Eye Shape
            {
                name: "Almond-shaped Eyes",
                imageID: "eye1",
                risk: "Low",
                //score: 0,
                problems: []
            },
            {
                name: "Round Eyes",
                imageID: "eye2",
                risk: "Low",
                //score: 0,
                problems: []
            },
            {
                name: "Triangular Eyes",
                imageID: "eye3",
                risk: "Medium",
                //score: 1,
                problems: [
                    "Dry eyes risk",
                    "Eye irritation",
                    "Mild entropion risk"
                ]
            },
            {
                name: "Protruding Eyes",
                imageID: "eye4",
                risk: "High",
                //score: 1,
                problems: [
                    "Corneal injury",
                    "Dry eyes",
                    "Eye trauma risk",
                    //"incomplete blinking"
                ]
            }
        ]
    },

    {
        part: "Ears",
        title: "🐶Question 3",
        question: "What is Ear Shape of your dog?",
        options: [
            // Question 3 - Ears
            {
                name: "Prick Ears",
                imageID: "ear1",
                risk: "Low",
                //score: 0,
                problems: []
            },
            {
                name: "Semi-Prick Ears",
                imageID: "ear2",
                risk: "Medium",
                //score: 1,
                problems: [
                    "Ear infection"
                ]
            },
            {
                name: "Folded Ears",
                imageID: "ear3",
                risk: "High",
                //score: 2,
                problems: [
                    "Poor airflow",
                    "Ear infection"
                ]
            },
            {
                name: "Drop Ears",
                imageID: "ear4",
                risk: "High",
                //score: 2,
                problems: [
                    "Ear infection",
                    "Ear mites",
                    "Wax build-up"
                ]
            }
        ]
    },

    {
        part: "Tail",
        title: "🐶Question 4",
        question: "What is Tail of your dog?",
        options: [
            // Question 4 - Tail
            {
                name: "Otter Tail",
                imageID: "tail1",
                risk: "Low",
                //score: 0,
                problems: []
            },
            {
                name: "Curled Tail",
                imageID: "tail2",
                risk: "Medium",
                //score: 1,
                problems: [
                    "Tail stiffness"
                ]
            },
            {
                name: "Screw Tail",
                imageID: "tail3",
                risk: "High",
                //score: 2,
                problems: [
                    "Spinal problems",
                    "Tail pain"
                ]
            },
            {
                name: "Bobtail / Tailless",
                imageID: "tail4",
                risk: "High",
                //score: 2,
                problems: [
                    "Spinal problems",
                    "Nerve issues",
                    "Mobility issues"
                ]
            }
        ]
    }
]

window.onload = function () {
    loadQuestion(dogQuestion);

    backBtn.onclick = function () {
        previousQuestion(dogQuestion);
    };

    homeBtn.onclick = goHome;
};