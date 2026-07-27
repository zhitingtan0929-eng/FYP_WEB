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



function updateAvatar(animal, part, data) {


    let path = avatarPath[animal];

    let img;


    if (part == "Body") {

        img = document.getElementById("bodyImg");

        img.src =
            path.body + data.imageID + ".png";

    }



    if (part == "Eyes") {

        img = document.getElementById("eyeImg");

        img.src =
            path.eye + data.imageID + ".png";

    }



    if (part == "Ears") {

        img = document.getElementById("earImg");

        img.src =
            path.ear + data.imageID + ".png";

    }



    if (part == "Tail") {

        img = document.getElementById("tailImg");

        img.src =
            path.tail + data.imageID + ".png";

    }

}


function loadCurrentBody() {

    const animal = document.getElementById("animal").value;

    const body = document.getElementById("body").value;

    const data =
        avatarConfig[animal][body];

    eyeX.value = data.eye.x;
    eyeY.value = data.eye.y;

    earX.value = data.ear.x;
    earY.value = data.ear.y;

    tailX.value = data.tail.x;
    tailY.value = data.tail.y;

    updatePreview();

}

function saveCurrentBody() {

    const animal = animalSelect.value;

    const body = bodySelect.value;

    avatarConfig[animal][body].eye.x =
        Number(eyeX.value);

    avatarConfig[animal][body].eye.y =
        Number(eyeY.value);

    avatarConfig[animal][body].ear.x =
        Number(earX.value);

    avatarConfig[animal][body].ear.y =
        Number(earY.value);

    avatarConfig[animal][body].tail.x =
        Number(tailX.value);

    avatarConfig[animal][body].tail.y =
        Number(tailY.value);

    updatePreview();

}