//const currentAnimal = "cat";

//Array of questions for the cat 
const catQuestion = [
    {
        part: "Body",
        title: "🐱Question 1",
        question: "What is Body Shape of your cat?",
        options: [
            // Question 1 - Body Shape
            {
                name: "Slender Body",
                imageID: "body1",
                risk: "Low",
                //score: 0,
                problems: []
            },
            {
                name: "Cobby Body",
                imageID: "body2",
                risk: "Medium",
                //score: 1,
                problems: [
                    "Weight gain",
                    "Reduced agility"
                ]
            },
            {
                name: "Heavy Boned",
                imageID: "body3",
                risk: "Medium",
                //score: 1,
                problems: [
                    "Reduced mobility",
                    "Joint stress"
                ]
            },
            {
                name: "Dwarf / Short-legged",
                imageID: "body4",
                risk: "High",
                //score: 2,
                problems: [
                    "Back problems",
                    "Joint pain",
                    "Reduced mobility"
                ]
            }
        ]
    },

    {
        part: "Eyes",
        title: "🐱Question 2",
        question: "What is Eye Shape of your cat?",
        options: [
            // Question 2 - Eye Shape
            {
                name: "Round / Almond Eyes",
                imageID: "eye1",
                risk: "Low",
                //score: 0,
                problems: []
            },
            {
                name: "Large Round Eyes",
                imageID: "eye2",
                risk: "Medium",
                //score: 1,
                problems: [
                    "Watery eyes",
                    "Dry eyes",
                    "Eye irritation"
                ]
            },
            {
                name: "Deep-set Eyes",
                imageID: "eye3",
                risk: "Medium",
                //score: 1,
                problems: [
                    "Eye irritation",
                    "Dry eyes"
                ]
            },
            {
                name: "Protruding Eyes",
                imageID: "eye4",
                risk: "High",
                //score: 2,
                problems: [
                    "Eye injury",
                    "Dry eyes",
                    "Vision problems"
                ]
            }
        ]
    },

    {
        part: "Ears",
        title: "🐱Question 3",
        question: "What is Ear Shape of your cat?",
        options: [
            // Question 3 - Ear Shape
            {
                name: "Straight Ears",
                imageID: "ear1",
                risk: "Low",
                //score: 0,
                problems: []
            },
            {
                name: "Large Upright Ears",
                imageID: "ear2",
                risk: "Low",
                //score: 0,
                problems: []
            },
            {
                name: "Small / Low-set Ears",
                imageID: "ear3",
                risk: "Medium",
                //score: 1,
                problems: [
                    "Ear infection",
                    "Wax build-up"
                ]
            },
            {
                name: "Folded Ears",
                imageID: "ear4",
                risk: "High",
                //score: 2,
                problems: [
                    "Genetic bone disease",
                    "Joint pain",
                    "Stiff joints",
                    "Difficulty moving"
                ]
            }
        ]
    },

    {
        part: "Tail",
        title: "🐱Question 4",
        question: "What is Tail of your cat?",
        options: [
            // Question 4 - Tail
            {
                name: "Long Tail",
                imageID: "tail1",
                risk: "Low",
                //score: 0,
                problems: []
            },
            {
                name: "Short Tail",
                imageID: "tail2",
                risk: "Medium",
                //score: 1,
                problems: [
                    "Spinal issues"
                ]
            },
            {
                name: "Curled Tail",
                imageID: "tail3",
                risk: "Medium",
                //score: 1,
                problems: [
                    "Reduced tail movement"
                ]
            },
            {
                name: "Tailless / Stub Tail",
                imageID: "tail4",
                risk: "High",
                //score: 2,
                problems: [
                    "Spinal problems",
                    "Reduced hind leg strength",
                    "Possible nerve issues"
                ]
            }
        ]
    }
];

window.onload = function () {

    loadQuestion(catQuestion);

    backBtn.onclick = function () {

        previousQuestion(catQuestion);

    };

    homeBtn.onclick = goHome;

};
