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


    let animal =
        document.getElementById("animal").value;


    let body =
        document.getElementById("body").value;


    let eye =
        document.getElementById("eye").value;


    let ear =
        document.getElementById("ear").value;


    let tail =
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


    });




// ===============================
// Load Body Position Config
// ===============================

function loadConfig() {


    if (!avatarConfig) return;



    let animal =
        document.getElementById("animal").value;


    let body =
        document.getElementById("body").value;



    let data =
        avatarConfig[animal][body];



    if (!data) return;



    document.getElementById("eyeX").value =
        data.eye.x;


    document.getElementById("eyeY").value =
        data.eye.y;



    document.getElementById("earX").value =
        data.ear.x;


    document.getElementById("earY").value =
        data.ear.y;



    document.getElementById("tailX").value =
        data.tail.x;


    document.getElementById("tailY").value =
        data.tail.y;


}



// ===============================
// Auto Update Selection
// ===============================


// Animal Change

document
    .getElementById("animal")
    .onchange = function () {


        loadConfig();

        updatePreview();


    };



// Body Change

document
    .getElementById("body")
    .onchange = function () {


        loadConfig();

        updatePreview();


    };



// Eye Change

document
    .getElementById("eye")
    .onchange = function () {


        updatePreview();


    };



// Ear Change

document
    .getElementById("ear")
    .onchange = function () {


        updatePreview();


    };



// Tail Change

document
    .getElementById("tail")
    .onchange = function () {


        updatePreview();


    };



// ===============================
// Input Position Change
// ===============================

document
    .getElementById("eyeX")
    .oninput = updatePosition;


document
    .getElementById("eyeY")
    .oninput = updatePosition;


document
    .getElementById("earX")
    .oninput = updatePosition;


document
    .getElementById("earY")
    .oninput = updatePosition;


document
    .getElementById("tailX")
    .oninput = updatePosition;


document
    .getElementById("tailY")
    .oninput = updatePosition;