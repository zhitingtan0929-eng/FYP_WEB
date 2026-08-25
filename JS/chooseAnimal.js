// =====================================================
// Choose Animal Page
// =====================================================


// =====================================================
// Variables
// =====================================================

let selectedAnimal = "cat";


// =====================================================
// DOM References
// =====================================================

const catBtn =
    document.getElementById("catBtn");

const dogBtn =
    document.getElementById("dogBtn");

const confirmBtn =
    document.getElementById("confirmBtn");

const selectedAnimalText =
    document.getElementById("selectedAnimal");


// =====================================================
// Default Avatar
// =====================================================

const DEFAULT_AVATAR = {

    cat: {

        body: "body1",

        eye: "eye1",

        ear: "ear1",

        tail: "tail1"

    },

    dog: {

        body: "body1",

        eye: "eye1",

        ear: "ear1",

        tail: "tail1"

    }

};


// =====================================================
// Select Animal
// =====================================================

async function selectAnimal(animal) {

    // -----------------------------------------------
    // Save current selection
    // -----------------------------------------------

    selectedAnimal = animal;


    localStorage.setItem(
        "animal",
        animal
    );


    console.log(
        "Selected animal:",
        animal
    );


    // -----------------------------------------------
    // Update Button
    // -----------------------------------------------

    updateAnimalButtons();


    // -----------------------------------------------
    // Update Text
    // -----------------------------------------------

    if (selectedAnimalText) {

        if (animal === "cat") {

            selectedAnimalText.innerHTML =
                "🐱 Cat Selected";

        }

        else {

            selectedAnimalText.innerHTML =
                "🐶 Dog Selected";

        }

    }


    // -----------------------------------------------
    // Load Complete Avatar
    // -----------------------------------------------

    await loadCompleteAvatar(animal);

}


// =====================================================
// Update Animal Buttons
// =====================================================

function updateAnimalButtons() {

    // Remove previous selected state

    catBtn.classList.remove(
        "selected"
    );

    dogBtn.classList.remove(
        "selected"
    );


    // Add selected state

    if (selectedAnimal === "cat") {

        catBtn.classList.add(
            "selected"
        );

    }

    else {

        dogBtn.classList.add(
            "selected"
        );

    }

}


// =====================================================
// Load Complete Avatar
// =====================================================

async function loadCompleteAvatar(animal) {

    const avatar =
        DEFAULT_AVATAR[animal];


    if (!avatar) {

        console.error(
            "No default avatar:",
            animal
        );

        return;

    }


    console.log(
        "Loading complete avatar:",
        animal,
        avatar
    );


    // -----------------------------------------------
    // Body
    // -----------------------------------------------

    await updateAvatar(

        animal,

        "Body",

        {
            imageID:
                avatar.body
        }

    );


    // -----------------------------------------------
    // Eye
    // -----------------------------------------------

    await updateAvatar(

        animal,

        "Eyes",

        {
            imageID:
                avatar.eye
        }

    );


    // -----------------------------------------------
    // Ear
    // -----------------------------------------------

    await updateAvatar(

        animal,

        "Ears",

        {
            imageID:
                avatar.ear
        }

    );


    // -----------------------------------------------
    // Tail
    // -----------------------------------------------

    await updateAvatar(

        animal,

        "Tail",

        {
            imageID:
                avatar.tail
        }

    );


    // -----------------------------------------------
    // Apply Position
    // -----------------------------------------------

    await applyAvatarPosition(

        animal,

        avatar.body,

        avatar.ear

    );


    console.log(
        "✅ Complete avatar loaded:",
        animal
    );

}


// =====================================================
// Confirm Animal
// =====================================================

function confirmAnimal() {

    if (!selectedAnimal) {

        alert(
            "Please select an animal."
        );

        return;

    }


    // -----------------------------------------------
    // Save
    // -----------------------------------------------

    localStorage.setItem(
        "animal",
        selectedAnimal
    );


    console.log(
        "Confirm animal:",
        selectedAnimal
    );


    // -----------------------------------------------
    // Go To Correct Page
    // -----------------------------------------------

    if (selectedAnimal === "cat") {

        window.location.href =
            "cat.html";

    }

    else if (selectedAnimal === "dog") {

        window.location.href =
            "dog.html";

    }

}


// =====================================================
// Initialize
// =====================================================

window.addEventListener(
    "load",
    async function () {

        console.log(
            "🐾 Choose Animal Page"
        );


        // -------------------------------------------
        // Load Avatar Config First
        // -------------------------------------------

        const config =
            await loadAvatarConfig();


        if (!config) {

            console.error(
                "❌ Avatar config failed to load."
            );

            return;

        }


        // -------------------------------------------
        // Default = Cat
        // -------------------------------------------

        selectedAnimal = "cat";


        localStorage.setItem(
            "animal",
            "cat"
        );


        // -------------------------------------------
        // Update UI
        // -------------------------------------------

        updateAnimalButtons();


        if (selectedAnimalText) {

            selectedAnimalText.innerHTML =
                "🐱 Cat Selected";

        }


        // -------------------------------------------
        // Show Complete Cat
        // -------------------------------------------

        await loadCompleteAvatar(
            "cat"
        );


        console.log(
            "✅ Choose Animal initialized."
        );

    }
);