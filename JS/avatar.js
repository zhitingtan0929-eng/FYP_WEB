// =====================================================
// Avatar Image Cache
// =====================================================

const avatarImageCache = {};


// =====================================================
// Preload Single Image
// =====================================================

function preloadAvatarImage(src) {

    if (avatarImageCache[src]) {

        return avatarImageCache[src];

    }


    const img = new Image();

    img.src = src;

    avatarImageCache[src] = img;


    return img;

}


// =====================================================
// Preload All Avatar Images
// =====================================================

async function preloadAllAvatarImages(animal) {

    const parts = [

        {
            folder: "body",
            prefix: "body"
        },

        {
            folder: "eye",
            prefix: "eye"
        },

        {
            folder: "ear",
            prefix: "ear"
        },

        {
            folder: "tail",
            prefix: "tail"
        }

    ];


    const promises = [];


    // =================================================
    // Load 4 Images For Each Part
    // =================================================

    for (const part of parts) {

        for (let i = 1; i <= 4; i++) {

            const src =
                `img/${animal}/${part.folder}/${part.prefix}${i}.webp`;


            const img =
                preloadAvatarImage(src);


            promises.push(

                new Promise(resolve => {

                    if (img.complete) {

                        resolve();

                    }

                    else {

                        img.onload =
                            resolve;

                        img.onerror =
                            resolve;

                    }

                })

            );

        }

    }


    await Promise.all(promises);


    console.log(
        `✅ All ${animal} avatar images preloaded`
    );

}

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
                ".webp"
            );


        case "Eyes":

            return (
                path.eye +
                imageID +
                ".webp"
            );


        case "Ears":

            return (
                path.ear +
                imageID +
                ".webp"
            );


        case "Tail":

            return (
                path.tail +
                imageID +
                ".webp"
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
    option,
    updateToken = null
) {

    const imageID = option.imageID;

    if (!imageID) {
        console.warn("No imageID:", animal, part);
        return;
    }

    const imgElement = getAvatarImage(part);

    if (!imgElement) {
        console.error("Image element not found:", part);
        return;
    }

    const src = getAvatarImagePath(
        animal,
        part,
        imageID
    );

    const cachedImage = preloadAvatarImage(src);

    // Wait for the cached image to finish loading
    if (!cachedImage.complete) {
        await new Promise(resolve => {
            cachedImage.addEventListener("load", resolve, { once: true });
            cachedImage.addEventListener("error", resolve, { once: true });
        });
    }

    // Ignore failed images
    if (!cachedImage.naturalWidth) {
        console.error("Image failed to load:", src);
        return;
    }

    // Ignore outdated requests before applying image
    if (
        updateToken !== null &&
        updateToken !== avatarUpdateToken
    ) {
        return;
    }

    imgElement.src = cachedImage.src;

    // Wait for the displayed image to decode
    if (imgElement.decode) {
        try {
            await imgElement.decode();
        } catch (error) {
            console.warn("Image decode warning:", error);
        }
    }

    // Check again after decoding
    if (
        updateToken !== null &&
        updateToken !== avatarUpdateToken
    ) {
        return;
    }

    console.log("✅ Avatar updated:", part, imageID);
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
    earID = "ear1",
    updateToken = null
) {

    // Load config if needed
    if (!avatarConfig) {
        try {
            await loadAvatarConfig();
        } catch (error) {
            console.error("Cannot apply avatar position.");
            return;
        }
    }

    // Stop outdated updates
    if (
        updateToken !== null &&
        updateToken !== avatarUpdateToken
    ) {
        return;
    }

    // Get body config
    const config = avatarConfig?.[animal]?.[bodyID];

    if (!config) {
        console.warn(
            "Position config not found:",
            animal,
            bodyID
        );
        return;
    }

    const eyeImg = document.getElementById("eyeImg");
    const earImg = document.getElementById("earImg");
    const tailImg = document.getElementById("tailImg");
    const bodyImg = document.getElementById("bodyImg");

    if (!eyeImg || !earImg || !tailImg) {
        console.warn("Avatar elements not found.");
        return;
    }

    // Reset positions
    resetAvatarPosition();

    // Eye position
    if (config.eye) {
        eyeImg.style.left = `${config.eye.x ?? 0}%`;
        eyeImg.style.top = `${config.eye.y ?? 0}%`;
        eyeImg.style.transform = `scale(${config.eye.scale ?? 1})`;
    }

    // Ear position
    if (config.ear) {
        earImg.style.left = `${config.ear.x ?? 0}%`;
        earImg.style.top = `${config.ear.y ?? 0}%`;
        earImg.style.transform = `scale(${config.ear.scale ?? 1})`;
    }

    // Tail position
    if (config.tail) {
        tailImg.style.left = `${config.tail.x ?? 0}%`;
        tailImg.style.top = `${config.tail.y ?? 0}%`;
        tailImg.style.transform = `scale(${config.tail.scale ?? 1})`;
    }

    // Check again before applying draw order
    if (
        updateToken !== null &&
        updateToken !== avatarUpdateToken
    ) {
        return;
    }

    // Draw order
    if (bodyImg) bodyImg.style.zIndex = 2;
    if (tailImg) tailImg.style.zIndex = 1;
    if (eyeImg) eyeImg.style.zIndex = 4;

    // Ear draw order
    const earConfig =
        avatarConfig?.[animal + "Ear"]?.[earID];

    earImg.style.zIndex =
        earConfig?.front ? 3 : 1;

    console.log(
        "✅ Applied Avatar Position:",
        animal,
        bodyID,
        earID
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