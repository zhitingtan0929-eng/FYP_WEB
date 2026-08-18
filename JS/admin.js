// =====================================================
// Avatar Image Reference
// =====================================================

const bodyImg =
    document.getElementById("bodyImg");

const eyeImg =
    document.getElementById("eyeImg");

const earImg =
    document.getElementById("earImg");

const tailImg =
    document.getElementById("tailImg");


// =====================================================
// Update Preview
// =====================================================

async function updatePreview() {

    const animal =
        document.getElementById("animal").value;

    const body =
        document.getElementById("body").value;

    const eye =
        document.getElementById("eye").value;

    const ear =
        document.getElementById("ear").value;

    const tail =
        document.getElementById("tail").value;


    // =================================================
    // Load All Images
    // =================================================

    await Promise.all([

        updateAvatar(
            animal,
            "Body",
            {
                imageID: body
            }
        ),

        updateAvatar(
            animal,
            "Eyes",
            {
                imageID: eye
            }
        ),

        updateAvatar(
            animal,
            "Ears",
            {
                imageID: ear
            }
        ),

        updateAvatar(
            animal,
            "Tail",
            {
                imageID: tail
            }
        )

    ]);


    // =================================================
    // Position
    // =================================================

    updatePositionPreview();

}


// =====================================================
// Load Current Config
// =====================================================

async function loadConfig() {

    if (!avatarConfig) {

        console.warn(
            "Avatar config not loaded."
        );

        return;

    }


    const animal =
        document.getElementById(
            "animal"
        ).value;

    const body =
        document.getElementById(
            "body"
        ).value;


    const data =
        avatarConfig
        ?.[animal]
        ?.[body];


    if (!data) {

        console.warn(
            "No config:",
            animal,
            body
        );

        return;

    }


    // =================================================
    // Eye
    // =================================================

    document.getElementById(
        "eyeX"
    ).value =
        data.eye?.x ?? 0;


    document.getElementById(
        "eyeY"
    ).value =
        data.eye?.y ?? 0;


    document.getElementById(
        "eyeScale"
    ).value =
        data.eye?.scale ?? 1;


    // =================================================
    // Ear Position
    // =================================================

    document.getElementById(
        "earX"
    ).value =
        data.ear?.x ?? 0;


    document.getElementById(
        "earY"
    ).value =
        data.ear?.y ?? 0;


    document.getElementById(
        "earScale"
    ).value =
        data.ear?.scale ?? 1;



    // =================================================
    // Ear Draw Order
    // =================================================

    const ear =
        document.getElementById(
            "ear"
        ).value;


    const earConfig =
        avatarConfig
        ?.[animal + "Ear"]
        ?.[ear];


    document.getElementById(
        "earFront"
    ).value =
        String(
            earConfig?.front ?? false
        );


    document.getElementById(
        "currentEarName"
    ).innerText =
        ear;


    // =================================================
    // Tail
    // =================================================

    document.getElementById(
        "tailX"
    ).value =
        data.tail?.x ?? 0;


    document.getElementById(
        "tailY"
    ).value =
        data.tail?.y ?? 0;


    document.getElementById(
        "tailScale"
    ).value =
        data.tail?.scale ?? 1;


    // =================================================
    // Update
    // =================================================

    await updatePreview();

}


// =====================================================
// Update JSON From Input
// =====================================================

function updateConfigFromInput() {

    if (!avatarConfig) {

        return;

    }


    const animal =
        document.getElementById(
            "animal"
        ).value;

    const body =
        document.getElementById(
            "body"
        ).value;


    const data =
        avatarConfig
        ?.[animal]
        ?.[body];


    if (!data) {

        return;

    }


    // =================================================
    // Eye
    // =================================================

    data.eye.x =
        Number(
            document.getElementById(
                "eyeX"
            ).value
        );


    data.eye.y =
        Number(
            document.getElementById(
                "eyeY"
            ).value
        );


    data.eye.scale =
        Number(
            document.getElementById(
                "eyeScale"
            ).value
        );


    // =================================================
    // Ear
    // =================================================

    data.ear.x =
        Number(
            document.getElementById(
                "earX"
            ).value
        );


    data.ear.y =
        Number(
            document.getElementById(
                "earY"
            ).value
        );


    data.ear.scale =
        Number(
            document.getElementById(
                "earScale"
            ).value
        );

    // =================================================
    // Ear Draw Order Config
    // =================================================


    const ear =
        document.getElementById(
            "ear"
        ).value;


    const earKey =
        animal + "Ear";


    // Create category

    if (!avatarConfig[earKey]) {

        avatarConfig[earKey] = {};

    }


    // Create ear

    if (!avatarConfig[earKey][ear]) {

        avatarConfig[earKey][ear] =
        {
            front: false
        };

    }


    // Save

    avatarConfig[earKey][ear].front =
        document.getElementById(
            "earFront"
        ).value === "true";

    // =================================================
    // Tail
    // =================================================

    data.tail.x =
        Number(
            document.getElementById(
                "tailX"
            ).value
        );


    data.tail.y =
        Number(
            document.getElementById(
                "tailY"
            ).value
        );


    data.tail.scale =
        Number(
            document.getElementById(
                "tailScale"
            ).value
        );


    // =================================================
    // Immediately Preview
    // =================================================

    updatePositionPreview();

}

function updateEarLayer() {

    const animal =
        document.getElementById("animal").value;


    const ear =
        document.getElementById("ear").value;


    const earConfig =
        avatarConfig?.[animal + "Ear"]?.[ear];


    if (earConfig?.front) {
        earImg.style.zIndex = 3;
    }
    else {
        earImg.style.zIndex = 1;
    }

}

// =====================================================
// Update Position Preview
// =====================================================

function updatePositionPreview() {

    if (!eyeImg ||
        !earImg ||
        !tailImg) {

        return;

    }


    // =================================================
    // Eye
    // =================================================

    eyeImg.style.left =
        `${document.getElementById("eyeX").value}%`;

    eyeImg.style.top =
        `${document.getElementById("eyeY").value}%`;

    eyeImg.style.transform =
        `scale(${document.getElementById("eyeScale").value})`;


    // =================================================
    // Ear
    // =================================================

    earImg.style.left =
        `${document.getElementById("earX").value}%`;

    earImg.style.top =
        `${document.getElementById("earY").value}%`;

    earImg.style.transform =
        `scale(${document.getElementById("earScale").value})`;


    // =================================================
    // Tail
    // =================================================

    tailImg.style.left =
        `${document.getElementById("tailX").value}%`;

    tailImg.style.top =
        `${document.getElementById("tailY").value}%`;

    tailImg.style.transform =
        `scale(${document.getElementById("tailScale").value})`;

    // =================================================
    // Ear Draw Order
    // =================================================


    const animal =
        document.getElementById(
            "animal"
        ).value;


    const ear =
        document.getElementById(
            "ear"
        ).value;



    const earConfig =
        avatarConfig
        ?.[animal + "Ear"]
        ?.[ear];



    if (
        earConfig?.front
    ) {

        earImg.style.zIndex = 3;

    }
    else {

        earImg.style.zIndex = 1;

    }

    updateEarLayer();
}


// =====================================================
// Save Config
// =====================================================

async function saveConfig() {

    updateConfigFromInput();


    if (!avatarConfig) {

        alert(
            "Avatar configuration is not loaded."
        );

        return;

    }


    try {

        const response =
            await fetch(
                "../PHP/saveAvatarConfig.php",
                {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json"

                    },

                    body:
                        JSON.stringify(
                            avatarConfig
                        )

                }
            );


        if (!response.ok) {

            throw new Error(
                "HTTP Error: " +
                response.status
            );

        }


        const result =
            await response.json();


        if (result.success) {

            alert(
                "Avatar configuration saved!"
            );

        }

        else {

            alert(
                "Save failed: " +
                result.message
            );

        }

    }

    catch (error) {

        console.error(
            "Save error:",
            error
        );


        alert(
            "Unable to save avatar configuration."
        );

    }

}


// =====================================================
// Selection Change
// =====================================================

document
    .getElementById("animal")
    .addEventListener(
        "change",
        async function () {

            loadConfig();

            await updatePreview();

        }
    );


document
    .getElementById("body")
    .addEventListener(
        "change",
        async function () {

            loadConfig();

            await updatePreview();

        }
    );

document
    .getElementById("eye")
    .addEventListener(
        "change",
        async function () {

            await updatePreview();

        }
    );

document
    .getElementById("ear")
    .addEventListener(
        "change",
        async function () {

            loadConfig();

            await updatePreview();

        }
    );


document
    .getElementById("tail")
    .addEventListener(
        "change",
        async function () {

            await updatePreview();

        }
    );

// =====================================================
// Position + Scale Inputs
// =====================================================

const positionInputs = [

    "eyeX",
    "eyeY",
    "eyeScale",

    "earX",
    "earY",
    "earScale",

    "tailX",
    "tailY",
    "tailScale",

    "earFront"
];


positionInputs.forEach(
    id => {

        document
            .getElementById(id)
            .addEventListener(
                "input",
                function () {

                    updateConfigFromInput();

                }
            );

    }
);


// =====================================================
// Save Button
// =====================================================

document
    .getElementById("saveBtn")
    .addEventListener(
        "click",
        saveConfig
    );


// =====================================================
// Initialize Admin
// =====================================================

window.addEventListener(
    "load",
    async function () {

        console.log(
            "Admin initializing..."
        );


        const config =
            await loadAvatarConfig();


        if (!config) {

            console.error(
                "Admin cannot start because config failed to load."
            );

            return;

        }


        loadConfig();


        console.log(
            "Admin initialized."
        );

    }
);