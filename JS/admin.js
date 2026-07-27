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


    updateAvatar(
        animal,
        "Body",
        {
            imageID: body
        }
    );

    updateAvatar(
        animal,
        "Eyes",
        {
            imageID: eye
        }
    );

    updateAvatar(
        animal,
        "Ears",
        {
            imageID: ear
        }
    );

    updateAvatar(
        animal,
        "Tail",
        {
            imageID: tail
        }
    );

}



// ===============================
// Update Image Position
// ===============================

function updatePosition() {

    eyeImg.style.left =
        document.getElementById("eyeX").value + "%";

    eyeImg.style.top =
        document.getElementById("eyeY").value + "%";


    earImg.style.left =
        document.getElementById("earX").value + "%";

    earImg.style.top =
        document.getElementById("earY").value + "%";


    tailImg.style.left =
        document.getElementById("tailX").value + "%";

    tailImg.style.top =
        document.getElementById("tailY").value + "%";

}



// ===============================
// Load JSON Config
// ===============================

fetch("../DATA/avatarConfig.json")

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
// Load Body Position Config
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


    // ===============================
    // Eye
    // ===============================

    document.getElementById("eyeX").value =
        data.eye.x;

    document.getElementById("eyeY").value =
        data.eye.y;


    // ===============================
    // Ear
    // ===============================

    document.getElementById("earX").value =
        data.ear.x;

    document.getElementById("earY").value =
        data.ear.y;


    // ===============================
    // Tail
    // ===============================

    document.getElementById("tailX").value =
        data.tail.x;

    document.getElementById("tailY").value =
        data.tail.y;

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

        // Body 改变
        // 读取该 Body 的 Anchor Position

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

    };


document
    .getElementById("eyeY")
    .oninput = function () {

        updatePosition();

    };


document
    .getElementById("earX")
    .oninput = function () {

        updatePosition();

    };


document
    .getElementById("earY")
    .oninput = function () {

        updatePosition();

    };


document
    .getElementById("tailX")
    .oninput = function () {

        updatePosition();

    };


document
    .getElementById("tailY")
    .oninput = function () {

        updatePosition();

    };