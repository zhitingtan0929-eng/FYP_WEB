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
                buttonImage: "img/dog/body/body1.png",
                risk: "Low",
                //score: 0,
                problems: [],
                problemImage: "",
                breed: "Greyhound / Whippet",
                link: ""
            },
            {
                name: "Square Build",
                imageID: "body2",
                buttonImage: "img/dog/body/body2.png",
                risk: "Medium",
                //score: 1,
                problems: [
                    "Hip/Elbow disease",
                    "Osteoarthritis risk"
                ],
                problemImage: "img/dog/problems/body/body2-problem.png",
                breed: "Rottweiler",
                link: "https://heropethealth.com.au/blog/rottweiler-health-problems-prevention-and-care"
            },
            {
                name: "Stocky Build",
                imageID: "body3",
                buttonImage: "img/dog/body/body3.png",
                risk: "Medium",
                //score: 1,
                problems: [
                    "Increased body weight",
                    "Hip dysplasia",
                    "Joint pain"
                ],
                problemImage: "img/dog/problems/body/body3-problem.png",
                breed: "English Bulldog",
                link: "https://pubmed.ncbi.nlm.nih.gov/11767921/"
            },
            {
                name: "Compact Build",
                imageID: "body4",
                buttonImage: "img/dog/body/body4.png",
                risk: "High",
                //score: 2,
                problems: [
                    "reduced airway space/ BOAS",
                    "overheating risk",
                    "Exercise intolerance",
                    "Back / spinal problems"
                ],
                problemImage: "img/dog/problems/body/body4-problem.png",
                breed: "Pug / Pekingese",
                link: "https://healthtopics.vetmed.ucdavis.edu/health-topics/brachycephalic-short-nosed-dogs"
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
                buttonImage: "img/dog/button/eye/eye1.png",
                risk: "Low",
                //score: 0,
                problems: [],
                problemImage: "",
                breed: "",
                link: ""
            },
            {
                name: "Round Eyes",
                imageID: "eye2",
                buttonImage: "img/dog/button/eye/eye2.png",
                risk: "Low",
                //score: 0,
                problems: [],
                problemImage: "",
                breed: "",
                link: ""
            },
            {
                name: "Sunken eyes",
                imageID: "eye3",
                buttonImage: "img/dog/button/eye/eye3.png",
                risk: "Medium",
                //score: 1,
                problems: [
                    "Entropion",
                    "Corneal irritation",
                    "Corneal ulcer"
                ],
                problemImage: "img/dog/problems/eye/eye3-problem.png",
                breed: "Shar-Pei / Chow Chow ",
                link: "https://www.acvo.org/tips-treatments-tricks/entropion"
            },
            {
                name: "Protruding Eyes",
                imageID: "eye4",
                buttonImage: "img/dog/button/eye/eye4.png",
                risk: "High",
                //score: 1,
                problems: [
                    "Dry eye / KCS",
                    "Proptosis",
                    "Eye trauma risk",
                    "Vision impairment"
                ],
                problemImage: "img/dog/problems/eye/eye4-problem.png",
                breed: "Chihuahua / Pekingese",
                link: "https://www.rvc.ac.uk/research/focus/brachycephaly/health-issues/ophthalmology"
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
                buttonImage: "img/dog/button/ear/ear1.png",
                risk: "Low",
                //score: 0,
                problems: [],
                problemImage: "",
                breed: "",
                link: ""
            },
            {
                name: "Semi-Prick Ears",
                imageID: "ear2",
                buttonImage: "img/dog/button/ear/ear2.png",
                risk: "Low",
                //score: 1,
                problems: [],
                problemImage: "",
                breed: "",
                link: ""
            },
            {
                name: "Folded Ears",
                imageID: "ear3",
                buttonImage: "img/dog/button/ear/ear3.png",
                risk: "Medium",
                //score: 2,
                problems: [
                    "Reduced ventilation",
                    "Ear inflammation"
                ],
                problemImage: "img/dog/problems/ear/ear3-problem.png",
                breed: "Vizsla / Beagle",
                link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8422687/"
            },
            {
                name: "Drop Ears",
                imageID: "ear4",
                buttonImage: "img/dog/button/ear/ear4.png",
                risk: "High",
                //score: 2,
                problems: [
                    "Otitis externa",
                    "yeast/bacterial infection"
                ],
                problemImage: "img/dog/problems/ear/ear4-problem.png",
                breed: "Cocker Spaniel / Basset hounds",
                link: "https://www.acvs.org/small-animal/otitis-externa/"
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
                buttonImage: "img/dog/button/tail/tail1.png",
                risk: "Low",
                //score: 0,
                problems: [],
                problemImage: "",
                breed: "Labrador Retriever",
                link: ""
            },
            {
                name: "Curled Tail",
                imageID: "tail2",
                buttonImage: "img/dog/button/tail/tail2.png",
                risk: "Low",
                //score: 1,
                problems: [],
                problemImage: "",
                breed: "Shiba Inu",
                link: ""
            },
            {
                name: "Screw Tail",
                imageID: "tail3",
                buttonImage: "img/dog/button/tail/tail3.png",
                risk: "High",
                //score: 2,
                problems: [
                    "Hemivertebrae",
                    "Spinal cord/neurological problems",
                    "hind-limb weakness"
                ],
                problemImage: "img/dog/problems/tail/tail3-problem.png",
                breed: "pug / Boston Terrier",
                link: "https://www.battersea.org.uk/what-we-do/animal-welfare-campaigning/tackling-harmful-trends/screw-tails"
            },
            {
                name: "Bobtail / Tailless",
                imageID: "tail4",
                buttonImage: "img/dog/button/tail/tail4.png",
                risk: "High",
                //score: 2,
                problems: [
                    "Anorectal atresia",
                    " Multiple Spinal Defects"
                ],
                problemImage: "img/dog/problems/tail/tail4-problem.png",
                breed: "Pembroke Welsh Corgi",
                link: "https://pubmed.ncbi.nlm.nih.gov/17850278/"
            }
        ]
    }
]


window.addEventListener(
    "load",
    async function () {

        try {

            await loadAvatarConfig();

        }

        catch (error) {

            console.error(
                "Avatar config failed to load."
            );

        }


        loadQuestion(
            dogQuestion
        );


        backBtn.onclick = function () {

            previousQuestion(
                dogQuestion
            );

        };


        homeBtn.onclick =
            goHome;

    }
);

window.onload = async function () {

    // =================================================
    // Preload Cat Images
    // =================================================

    console.log(
        "Preloading dog avatar images..."
    );


    await preloadAllAvatarImages("dog");


    console.log(
        "Dog avatar images ready!"
    );


    // =================================================
    // Load Default Dog
    // =================================================

    await loadDefaultAvatar("dog");


    // =================================================
    // Load Question
    // =================================================

    loadQuestion(dogQuestion);


    // =================================================
    // Back Button
    // =================================================

    backBtn.onclick = function () {

        previousQuestion(dogQuestion);

    };


    // =================================================
    // Home Button
    // =================================================

    homeBtn.onclick = goHome;

};