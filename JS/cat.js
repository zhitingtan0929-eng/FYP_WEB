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
                buttonImage: "img/cat/button/body/body1.png",
                risk: "Low",
                //score: 0,
                problems: [],
                problemImage: "",
                breed: "Abyssinian / Oriental Shorthair",
                link: ""
            },
            {
                name: "Cobby Body",
                imageID: "body2",
                buttonImage: "img/cat/button/body/body2.png",
                risk: "Medium",
                //score: 1,
                problems: [
                    "Overweight tendency",
                    "Reduced agility"
                ],
                problemImage: "img/cat/problems/body/body2-problem.jpg",
                breed: "British Shorthair",
                link: "https://pubmed.ncbi.nlm.nih.gov/28716190/"
            },
            {
                name: "Heavy Boned",
                imageID: "body3",
                buttonImage: "img/cat/button/body/body3.png",
                risk: "Medium",
                //score: 1,
                problems: [
                    "Hip dysplasia",
                    "Reduced mobility",
                    "Joint stress"
                ],
                problemImage: "img/cat/problems/body/body3-problem.jpg",
                breed: "Maine Coon",
                link: "https://www.catster.com/cat-health-care/maine-coons-and-hip-dysplasia/"
            },
            {
                name: "Short-legged",
                imageID: "body4",
                buttonImage: "img/cat/button/body/body4.png",
                risk: "High",
                //score: 2,
                problems: [
                    "Osteoarthritis",
                    "Lordosis",
                    "Reduced mobility",
                    "Abnormal posture"
                ],
                problemImage: "img/cat/problems/body/body4-problem.jpg",
                breed: "Munchkin",
                link: "https://scienceforanimalwelfare.org/species/cat/munchkin/limb-deformity/"
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
                name: "Round Eyes",
                imageID: "eye1",
                buttonImage: "img/cat/button/eye/eye1.png",
                risk: "Low",
                //score: 0,
                problems: [],
                problemImage: "",
                breed: "American Shorthair",
                link: ""
            },
            {
                name: "Deep-set Eyes",
                imageID: "eye2",
                buttonImage: "img/cat/button/eye/eye2.png",
                risk: "Medium",
                //score: 1,
                problems: [
                    "Entropion",
                    "Excessive tearing",
                    "Corneal irritation"
                ],
                problemImage: "img/cat/problems/eye/eye2-problem.jpg",
                breed: "Maine Coon",
                link: "https://www.vetessential.com/entropion-in-cats-and-dogs/"
            },
            {
                name: "Blue Eyes",
                imageID: "eye3",
                buttonImage: "img/cat/button/eye/eye3.png",
                risk: "Medium",
                //score: 1,
                problems: [
                    "altered binocular vision"
                ], problemImage: "img/cat/problems/eye/eye3-problem.jpg",
                breed: "Siamese",
                link: "https://www.petmd.com/cat/general-health/cross-eyed-cats"
            },
            {
                name: "Protruding Eyes",
                imageID: "eye4",
                buttonImage: "img/cat/button/eye/eye4.png",
                risk: "High",
                //score: 2,
                problems: [
                    "red eye",
                    "corneal damage",
                    "ulcer",
                    "inflammation"
                ], problemImage: "img/cat/problems/eye/eye4-problem.jpg",
                breed: "Persian / Himalayan",
                link: "https://vcahospitals.com/all-animal-hospital/know-your-pet/ulcerative-keratitis-in-cats"
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
                buttonImage: "img/cat/button/ear/ear1.png",
                risk: "Low",
                //score: 0,
                problems: [],
                problemImage: "",
                breed: "European Shorthair",
                link: ""
            },
            {
                name: "Large Upright Ears",
                imageID: "ear2",
                buttonImage: "img/cat/button/ear/ear2.png",
                risk: "Low",
                //score: 0,
                problems: [],
                breed: "Cornish Rex",
                link: ""
            },
            {
                name: "Curled Ears",
                imageID: "ear3",
                buttonImage: "img/cat/button/ear/ear3.png",
                risk: "Medium",
                //score: 1,
                problems: [
                    "Narrow ear canals",
                    "Wax build-up",
                    "Otitis externa"
                ],
                problemImage: "img/cat/problems/ear/ear3-problem.jpg",
                breed: "Highland Lynx",
                link: "https://catsmart.com.sg/getting-to-know-the-american-curl#:~:text=The%20American%20Curl%20is,ear%20infections"
            },
            {
                name: "Folded Ears",
                imageID: "ear4",
                buttonImage: "img/cat/button/ear/ear4.png",
                risk: "High",
                //score: 2,
                problems: [
                    "Osteochondrodysplasia",
                    "Joint pain",
                    "Skeletal Deformity",
                    "Reduced Mobility"
                ],
                problemImage: "img/cat/problems/ear/ear4-problem.jpg",
                breed: "Scottish Fold",
                link: "https://thelittlecarnivore.com/en/blog/scottish-fold-cats-its-time-to-stop-the-breeding"
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
                buttonImage: "img/cat/button/tail/tail1.png",
                risk: "Low",
                //score: 0,
                problems: [],
                problemImage: "",
                breed: "Norwegian Forest Cat",
                link: ""
            },
            {
                name: "Short Tail",
                imageID: "tail2",
                buttonImage: "img/cat/button/tail/tail2.png",
                risk: "Medium",
                //score: 1,
                problems: [
                    "Vertebral abnormalities"
                ],
                problemImage: "img/cat/problems/tail/tail2-problem.jpg",
                breed: "American Bobtail",
                link: "https://www.bioguardlabs.com/breed-related-disease-american-bobtail/"
            },
            {
                name: "Curled Tail",
                imageID: "tail3",
                buttonImage: "img/cat/button/tail/tail3.png",
                risk: "Low",
                //score: 1,
                problems: [],
                problemImage: "",
                breed: "American Ringtail Cat",
                link: ""
            },
            {
                name: "Stub Tail",
                imageID: "tail4",
                buttonImage: "img/cat/button/tail/tail4.png",
                risk: "High",
                //score: 2,
                problems: [
                    "Manx syndrome",
                    "Weak hind-leg movement",
                    "Bladder & bowel problems",
                    "Possible partial paralysis"
                ],
                problemImage: "img/cat/problems/tail/tail4-problem.jpg",
                breed: "Manx Cat",
                link: "https://www.petful.com/cat-breeds/manx-syndrome/"
            }
        ]
    }
];

window.onload = async function () {

    // =================================================
    // Preload Cat Images
    // =================================================

    console.log(
        "🐱 Preloading cat avatar images..."
    );


    await preloadAllAvatarImages("cat");


    console.log(
        "🐱 Cat avatar images ready!"
    );


    // =================================================
    // Load Default Cat
    // =================================================

    await loadDefaultAvatar("cat");


    // =================================================
    // Load Question
    // =================================================

    loadQuestion(catQuestion);


    // =================================================
    // Back Button
    // =================================================

    backBtn.onclick = function () {

        previousQuestion(catQuestion);

    };


    // =================================================
    // Home Button
    // =================================================

    homeBtn.onclick = goHome;

};