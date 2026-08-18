
// =====================================================
// Avatar Image Path
// =====================================================

const avatarPath = {

    cat: {

        body: "img/cat/body/",
        eye: "img/cat/eye/",
        ear: "img/cat/ear/",
        tail: "img/cat/tail/"

    },

    dog: {

        body: "img/dog/body/",
        eye: "img/dog/eye/",
        ear: "img/dog/ear/",
        tail: "img/dog/tail/"

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

        console.log(
            "✅ Using existing avatarConfig"
        );

        return Promise.resolve(
            avatarConfig
        );

    }


    // Already loading
    if (avatarConfigPromise) {

        console.log(
            "⏳ Waiting for existing config request..."
        );

        return avatarConfigPromise;

    }


    // =================================================
    // Config URL
    // =================================================

    const configURL =
        "Data/avatarConfig.json?time=" +
        Date.now();


    console.log(
        "📂 Loading Avatar Config From:",
        configURL
    );


    console.log(
        "🌐 Current Page:",
        window.location.href
    );


    console.log(
        "🌐 Current Directory:",
        window.location.pathname
    );


    // =================================================
    // Fetch
    // =================================================

    avatarConfigPromise =
        fetch(configURL)

            .then(response => {

                console.log(
                    "📡 Config Response:",
                    response
                );


                console.log(
                    "📡 Config Status:",
                    response.status
                );


                console.log(
                    "📡 Config URL:",
                    response.url
                );


                if (!response.ok) {

                    throw new Error(
                        "HTTP Error: " +
                        response.status
                    );

                }


                return response.json();

            })


            .then(data => {

                console.log(
                    "✅ Avatar Config Loaded:",
                    data
                );


                avatarConfig =
                    data;


                return avatarConfig;

            })


            .catch(error => {

                console.error(
                    "❌ Failed to load avatarConfig.json:",
                    error
                );


                avatarConfig =
                    null;


                avatarConfigPromise =
                    null;


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
// Get Image Path
// =====================================================

function getAvatarImagePath(
    animal,
    part,
    imageID
) {

    const path =
        avatarPath[animal];


    if (!path) {

        throw new Error(
            "Animal not found: " +
            animal
        );

    }


    switch (part) {

        case "Body":

            return (
                path.body +
                imageID +
                ".png"
            );


        case "Eyes":

            return (
                path.eye +
                imageID +
                ".png"
            );


        case "Ears":

            return (
                path.ear +
                imageID +
                ".png"
            );


        case "Tail":

            return (
                path.tail +
                imageID +
                ".png"
            );


        default:

            throw new Error(
                "Unknown avatar part: " +
                part
            );

    }

}


// =====================================================
// Load Image
// =====================================================

function loadImage(
    img,
    src
) {

    return new Promise(
        (resolve, reject) => {

            if (!img) {

                reject(
                    new Error(
                        "Image element not found."
                    )
                );

                return;

            }


            // Hide before loading
            img.style.visibility =
                "hidden";


            // Remove previous handlers
            img.onload = null;

            img.onerror = null;


            img.onload = function () {

                console.log(
                    "✅ IMAGE LOADED:",
                    src
                );


                img.style.visibility =
                    "visible";


                resolve();

            };


            img.onerror = function () {

                console.error(
                    "❌ IMAGE FAILED:",
                    src
                );


                img.style.visibility =
                    "hidden";


                reject(
                    new Error(
                        "Image failed to load: " +
                        src
                    )
                );

            };


            // Set image only here
            img.src = src;

        }
    );

}


// =====================================================
// Update Avatar
// =====================================================

async function updateAvatar(
    animal,
    part,
    data
) {

    if (!data || !data.imageID) {

        console.error(
            "Invalid avatar data:",
            data
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

        return;

    }


    try {

        const src =
            getAvatarImagePath(
                animal,
                part,
                data.imageID
            );


        await loadImage(
            img,
            src
        );

        // Save current image ID

        if (part === "Ears") {
            img.dataset.imageID =
                data.imageID;
        }


    }

    catch (error) {

        console.error(
            "Avatar image loading error:",
            error
        );

    }

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

        eyeImg.style.left =
            "0%";

        eyeImg.style.top =
            "0%";

        eyeImg.style.transform =
            "scale(1)";

    }


    if (earImg) {

        earImg.style.left =
            "0%";

        earImg.style.top =
            "0%";

        earImg.style.transform =
            "scale(1)";

    }


    if (tailImg) {

        tailImg.style.left =
            "0%";

        tailImg.style.top =
            "0%";

        tailImg.style.transform =
            "scale(1)";

    }

}


// =====================================================
// Apply Avatar Position
// =====================================================

async function applyAvatarPosition(
    animal,
    bodyID,
    earID = "ear1"
) {

    // Make sure config is loaded
    if (!avatarConfig) {

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
    // Get Config
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

    // =================================================
    // Update Draw Order
    // =================================================

    const bodyImg =
        document.getElementById("bodyImg");


    // Default Layer

    if (bodyImg)
        bodyImg.style.zIndex = 2;

    if (tailImg)
        tailImg.style.zIndex = 1;

    if (eyeImg)
        eyeImg.style.zIndex = 4;



    // =================================================
    // Read Ear Draw Order From catEar / dogEar
    // =================================================

    // use current selected ear

    const currentEar =
        earID;



    const earConfig =
        avatarConfig
        ?.[animal + "Ear"]
        ?.[currentEar];



    if (earConfig?.front) {

        earImg.style.zIndex = 3;

    }
    else {

        earImg.style.zIndex = 1;

    }


    console.log(
        "✅ Applied Avatar Position:",
        animal,
        bodyID,
        config
    );

}


// =====================================================
// Load Default Avatar
// =====================================================

async function loadDefaultAvatar(animal) {

    console.log(
        "Loading default avatar:",
        animal
    );


    // =================================================
    // Load Config First
    // =================================================

    try {

        await loadAvatarConfig();

    }

    catch (error) {

        console.error(
            "❌ Config failed."
        );

        return;

    }


    // =================================================
    // Default IDs
    // =================================================

    const defaultBody =
        "body1";

    const defaultEye =
        "eye1";

    const defaultEar =
        "ear1";

    const defaultTail =
        "tail1";


    // =================================================
    // Load All Images
    // =================================================

    await Promise.all([

        updateAvatar(
            animal,
            "Body",
            {
                imageID:
                    defaultBody
            }
        ),

        updateAvatar(
            animal,
            "Eyes",
            {
                imageID:
                    defaultEye
            }
        ),

        updateAvatar(
            animal,
            "Ears",
            {
                imageID:
                    defaultEar
            }
        ),

        updateAvatar(
            animal,
            "Tail",
            {
                imageID:
                    defaultTail
            }
        )

    ]);


    // =================================================
    // Apply Position AFTER Images
    // =================================================

    await applyAvatarPosition(
        animal,
        defaultBody
    );


    console.log(
        "✅ DEFAULT AVATAR READY:",
        animal
    );

}