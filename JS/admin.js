// ===============================
// Avatar Image Reference
// ===============================

const bodyImg =
    document.getElementById("bodyImg");

const eyeImg =
    document.getElementById("eyeImg");

const earImg =
    document.getElementById("earImg");

const tailImg =
    document.getElementById("tailImg");


// ===============================
// Avatar Config
// ===============================

let avatarConfig = null;


// ===============================
// Update Avatar Preview
// ===============================

function updatePreview() {

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


    // Body

    updateAvatar(
        animal,
        "Body",
        {
            imageID: body
        }
    );


    // Eye

    updateAvatar(
        animal,
        "Eyes",
        {
            imageID: eye
        }
    );


    // Ear

    updateAvatar(
        animal,
        "Ears",
        {
            imageID: ear
        }
    );


    // Tail

    updateAvatar(
        animal,
        "Tail",
        {
            imageID: tail
        }
    );


    updatePosition();

}



// ===============================
// Update Image Position
// ===============================

function updatePosition() {

    if (!avatarConfig) {
        return;
    }


    // ===============================
    // Eye
    // ===============================

    eyeImg.style.left =
        document.getElementById("eyeX").value + "%";

    eyeImg.style.top =
        document.getElementById("eyeY").value + "%";


    // ===============================
    // Ear
    // ===============================

    earImg.style.left =
        document.getElementById("earX").value + "%";

    earImg.style.top =
        document.getElementById("earY").value + "%";


    // ===============================
    // Tail
    // ===============================

    tailImg.style.left =
        document.getElementById("tailX").value + "%";

    tailImg.style.top =
        document.getElementById("tailY").value + "%";

}



// ===============================
// Load JSON Config
// ===============================

fetch("../Data/avatarConfig.json")

    .then(res => res.json())

    .then(data => {

        avatarConfig = data;

        loadConfig();

        updatePreview();

    })

    .catch(error => {

        console.error(
            "Failed to load avatarConfig.json:",
            error
        );

    });



// ===============================
// Load Current Body Config
// ===============================

function loadConfig() {

    if (!avatarConfig) {
        return;
    }


    const animal =
        document.getElementById("animal").value;

    const body =
        document.getElementById("body").value;


    const data =
        avatarConfig[animal]?.[body];


    if (!data) {

        console.warn(
            "No config found:",
            animal,
            body
        );

        return;

    }


    // Eye

    document.getElementById("eyeX").value =
        data.eye.x;

    document.getElementById("eyeY").value =
        data.eye.y;


    // Ear

    document.getElementById("earX").value =
        data.ear.x;

    document.getElementById("earY").value =
        data.ear.y;


    // Tail

    document.getElementById("tailX").value =
        data.tail.x;

    document.getElementById("tailY").value =
        data.tail.y;


    updatePosition();

}



// ===============================
// Update JSON Object
// ===============================

function updateConfigFromInput() {

    if (!avatarConfig) {
        return;
    }


    const animal =
        document.getElementById("animal").value;

    const body =
        document.getElementById("body").value;


    const data =
        avatarConfig[animal]?.[body];


    if (!data) {
        return;
    }


    // ===============================
    // Eye
    // ===============================

    data.eye.x =
        Number(document.getElementById("eyeX").value);

    data.eye.y =
        Number(document.getElementById("eyeY").value);


    // ===============================
    // Ear
    // ===============================

    data.ear.x =
        Number(document.getElementById("earX").value);

    data.ear.y =
        Number(document.getElementById("earY").value);


    // ===============================
    // Tail
    // ===============================

    data.tail.x =
        Number(document.getElementById("tailX").value);

    data.tail.y =
        Number(document.getElementById("tailY").value);

}



// ===============================
// Save Config To Server
// ===============================

function saveConfig() {

    updateConfigFromInput();


    fetch("../PHP/saveAvatarConfig.php", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(avatarConfig)

    })

        .then(res => res.json())

        .then(data => {

            if (data.success) {

                alert("Avatar configuration saved!");

            }
            else {

                alert(
                    "Save failed: " +
                    data.message
                );

            }

        })

        .catch(error => {

            console.error(error);

            alert(
                "Unable to save avatar configuration."
            );

        });

}



// ===============================
// Animal Change
// ===============================

document
    .getElementById("animal")
    .onchange = function () {

        loadConfig();

        updatePreview();

    };



// ===============================
// Body Change
// ===============================

document
    .getElementById("body")
    .onchange = function () {

        loadConfig();

        updatePreview();

    };



// ===============================
// Eye Change
// ===============================

document
    .getElementById("eye")
    .onchange = function () {

        updatePreview();

    };



// ===============================
// Ear Change
// ===============================

document
    .getElementById("ear")
    .onchange = function () {

        updatePreview();

    };



// ===============================
// Tail Change
// ===============================

document
    .getElementById("tail")
    .onchange = function () {

        updatePreview();

    };



// ===============================
// Position Input
// ===============================

document
    .getElementById("eyeX")
    .oninput = function () {

        updatePosition();
        updateConfigFromInput();

    };


document
    .getElementById("eyeY")
    .oninput = function () {

        updatePosition();
        updateConfigFromInput();

    };


document
    .getElementById("earX")
    .oninput = function () {

        updatePosition();
        updateConfigFromInput();

    };


document
    .getElementById("earY")
    .oninput = function () {

        updatePosition();
        updateConfigFromInput();

    };


document
    .getElementById("tailX")
    .oninput = function () {

        updatePosition();
        updateConfigFromInput();

    };


document
    .getElementById("tailY")
    .oninput = function () {

        updatePosition();
        updateConfigFromInput();

    };