// =====================================================
// Avatar Image Path
// =====================================================

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


// =====================================================
// Avatar Config
// =====================================================

let avatarConfig = null;

let avatarConfigPromise = null;


// =====================================================
// Load Avatar Config
// =====================================================

function loadAvatarConfig() {

    // Already loaded
    if (avatarConfig) {

        return Promise.resolve(
            avatarConfig
        );

    }


    // Already loading
    if (avatarConfigPromise) {

        return avatarConfigPromise;

    }


    // Start loading
    avatarConfigPromise =
        fetch(
            "../Data/avatarConfig.json?time=" +
            Date.now()
        )

            .then(response => {

                if (!response.ok) {

                    throw new Error(
                        "HTTP Error: " +
                        response.status
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
                    "Failed to load avatarConfig.json:",
                    error
                );

                avatarConfig = null;

                throw error;

            });


    return avatarConfigPromise;

}


// =====================================================
// Get Avatar Image
// =====================================================

function getAvatarImage(part) {

    const ids = {

        Body: "bodyImg",

        Eyes: "eyeImg",

        Ears: "earImg",

        Tail: "tailImg"

    };


    const id =
        ids[part];


    if (!id) {

        return null;

    }


    return document.getElementById(id);

}



// =====================================================
// Update Avatar Image
// =====================================================

function updateAvatar(
    animal,
    part,
    data
) {

    return new Promise((resolve, reject) => {

        const path =
            avatarPath[animal];


        if (!path) {

            console.error(
                "Animal not found:",
                animal
            );

            reject(
                new Error(
                    "Animal not found: " + animal
                )
            );

            return;

        }


        if (!data || !data.imageID) {

            console.error(
                "Invalid avatar data:",
                data
            );

            reject(
                new Error(
                    "Invalid avatar data"
                )
            );

            return;

        }


        const img =
            getAvatarImage(part);


        if (!img) {

            console.warn(
                "Avatar image element not found:",
                part
            );

            reject(
                new Error(
                    "Avatar image not found: " + part
                )
            );

            return;

        }


        let src;


        switch (part) {

            case "Body":

                src =
                    path.body +
                    data.imageID +
                    ".png";

                break;


            case "Eyes":

                src =
                    path.eye +
                    data.imageID +
                    ".png";

                break;


            case "Ears":

                src =
                    path.ear +
                    data.imageID +
                    ".png";

                break;


            case "Tail":

                src =
                    path.tail +
                    data.imageID +
                    ".png";

                break;


            default:

                reject(
                    new Error(
                        "Unknown avatar part: " + part
                    )
                );

                return;

        }


        img.onload = function () {

            console.log(
                "✅ IMAGE LOADED:",
                img.src
            );

            resolve();

        };


        img.onerror = function () {

            console.error(
                "❌ IMAGE FAILED:",
                img.src
            );

            reject(
                new Error(
                    "Image failed: " + img.src
                )
            );

        };


        img.src = src;

    });

}


// =====================================================
// Reset Avatar Position
// =====================================================

function resetAvatarPosition() {

    const eyeImg =
        document.getElementById("eyeImg");

    const earImg =
        document.getElementById("earImg");

    const tailImg =
        document.getElementById("tailImg");


    if (eyeImg) {

        eyeImg.style.left = "0%";

        eyeImg.style.top = "0%";

        eyeImg.style.transform =
            "scale(1)";

    }


    if (earImg) {

        earImg.style.left = "0%";

        earImg.style.top = "0%";

        earImg.style.transform =
            "scale(1)";

    }


    if (tailImg) {

        tailImg.style.left = "0%";

        tailImg.style.top = "0%";

        tailImg.style.transform =
            "scale(1)";

    }

}

// =====================================================
// Load Default Avatar
// =====================================================

async function loadDefaultAvatar(animal) {

    // =================================================
    // Make Sure Config Is Loaded
    // =================================================

    try {

        await loadAvatarConfig();

    }

    catch (error) {

        console.error(
            "Cannot load default avatar because config failed.",
            error
        );

        return;

    }


    // =================================================
    // Default Image ID
    // =================================================

    const defaultBody = "body1";
    const defaultEye = "eye1";
    const defaultEar = "ear1";
    const defaultTail = "tail1";


    // =================================================
    // Load Images
    // =================================================

    updateAvatar(
        animal,
        "Body",
        {
            imageID: defaultBody
        }
    );


    updateAvatar(
        animal,
        "Eyes",
        {
            imageID: defaultEye
        }
    );


    updateAvatar(
        animal,
        "Ears",
        {
            imageID: defaultEar
        }
    );


    updateAvatar(
        animal,
        "Tail",
        {
            imageID: defaultTail
        }
    );


    // =================================================
    // Apply Body Position From JSON
    // =================================================

    await applyAvatarPosition(
        animal,
        defaultBody
    );


    console.log(
        "✅ Default avatar loaded:",
        animal,
        defaultBody,
        defaultEye,
        defaultEar,
        defaultTail
    );

}

// =====================================================
// Apply Avatar Position
// =====================================================

async function applyAvatarPosition(
    animal,
    bodyID
) {

    // =================================================
    // Make Sure Config Is Loaded
    // =================================================

    if (!avatarConfig) {

        console.log(
            "Avatar config not ready. Waiting..."
        );

        try {

            await loadAvatarConfig();

        }

        catch (error) {

            console.error(
                "Cannot apply avatar position."
            );

            return;

        }

    }


    // =================================================
    // Get Body Config
    // =================================================

    const config =
        avatarConfig?.[animal]?.[bodyID];


    if (!config) {

        console.warn(
            "Position config not found:",
            animal,
            bodyID
        );

        return;

    }


    // =================================================
    // Get Images
    // =================================================

    const eyeImg =
        document.getElementById("eyeImg");

    const earImg =
        document.getElementById("earImg");

    const tailImg =
        document.getElementById("tailImg");


    if (
        !eyeImg ||
        !earImg ||
        !tailImg
    ) {

        console.warn(
            "Avatar elements not found."
        );

        return;

    }


    // =================================================
    // Reset
    // =================================================

    resetAvatarPosition();


    // =================================================
    // Eye
    // =================================================

    if (config.eye) {

        eyeImg.style.left =
            `${config.eye.x ?? 0}%`;

        eyeImg.style.top =
            `${config.eye.y ?? 0}%`;

        eyeImg.style.transform =
            `scale(${config.eye.scale ?? 1})`;

    }


    // =================================================
    // Ear
    // =================================================

    if (config.ear) {

        earImg.style.left =
            `${config.ear.x ?? 0}%`;

        earImg.style.top =
            `${config.ear.y ?? 0}%`;

        earImg.style.transform =
            `scale(${config.ear.scale ?? 1})`;

    }


    // =================================================
    // Tail
    // =================================================

    if (config.tail) {

        tailImg.style.left =
            `${config.tail.x ?? 0}%`;

        tailImg.style.top =
            `${config.tail.y ?? 0}%`;

        tailImg.style.transform =
            `scale(${config.tail.scale ?? 1})`;

    }


    console.log(
        "Applied Avatar Position:",
        animal,
        bodyID,
        config
    );

}