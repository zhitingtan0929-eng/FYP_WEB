// ===============================
// Avatar Image Path
// ===============================

const avatarPath = {

    cat: {

        body: "../img/cat/body/",
        eye: "../img/cat/eye/",
        ear: "../img/cat/ear/",
        tail: "../img/cat/tail/"

    },

    dog: {

        body: "../img/dog/body/",
        eye: "../img/dog/eye/",
        ear: "../img/dog/ear/",
        tail: "../img/dog/tail/"

    }

};


// ===============================
// Avatar Config
// ===============================

let avatarConfig = null;


// ===============================
// Load Avatar Config
// ===============================

function loadAvatarConfig() {

    return fetch("../Data/avatarConfig.json")

        .then(response => {

            if (!response.ok) {

                throw new Error(
                    "Failed to load avatarConfig.json"
                );

            }

            return response.json();

        })

        .then(data => {

            avatarConfig = data;

            console.log(
                "Avatar Config Loaded:",
                avatarConfig
            );

            return avatarConfig;

        })

        .catch(error => {

            console.error(
                "Avatar Config Error:",
                error
            );

            return null;

        });

}


// ===============================
// Update Avatar Image
// ===============================

function updateAvatar(animal, part, data) {

    const path = avatarPath[animal];

    if (!path) {

        console.error(
            "Animal not found:",
            animal
        );

        return;

    }


    if (!data || !data.imageID) {

        console.error(
            "Invalid avatar data:",
            data
        );

        return;

    }


    if (part === "Body") {

        document.getElementById("bodyImg").src =
            path.body +
            data.imageID +
            ".png";

    }


    else if (part === "Eyes") {

        document.getElementById("eyeImg").src =
            path.eye +
            data.imageID +
            ".png";

    }


    else if (part === "Ears") {

        document.getElementById("earImg").src =
            path.ear +
            data.imageID +
            ".png";

    }


    else if (part === "Tail") {

        document.getElementById("tailImg").src =
            path.tail +
            data.imageID +
            ".png";

    }

}


// ===============================
// Apply Avatar Position
// ===============================

function applyAvatarPosition(animal, bodyID) {

    if (!avatarConfig) {

        console.warn(
            "Avatar config has not loaded."
        );

        return;

    }


    const config =
        avatarConfig[animal]?.[bodyID];


    if (!config) {

        console.warn(
            "Avatar position config not found:",
            animal,
            bodyID
        );

        return;

    }


    const eyeImg =
        document.getElementById("eyeImg");

    const earImg =
        document.getElementById("earImg");

    const tailImg =
        document.getElementById("tailImg");


    if (!eyeImg || !earImg || !tailImg) {

        console.warn(
            "Avatar image elements not found."
        );

        return;

    }


    // ===============================
    // Eye Position
    // ===============================

    if (config.eye) {

        eyeImg.style.left =
            config.eye.x + "%";

        eyeImg.style.top =
            config.eye.y + "%";

    }


    // ===============================
    // Ear Position
    // ===============================

    if (config.ear) {

        earImg.style.left =
            config.ear.x + "%";

        earImg.style.top =
            config.ear.y + "%";

    }


    // ===============================
    // Tail Position
    // ===============================

    if (config.tail) {

        tailImg.style.left =
            config.tail.x + "%";

        tailImg.style.top =
            config.tail.y + "%";

    }

}