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

    const path = avatarPath[animal];

    if (!path) {
        console.error("Animal not found:", animal);
        return;
    }


    if (part == "Body") {

        document.getElementById("bodyImg").src =
            path.body + data.imageID + ".png";

    }


    else if (part == "Eyes") {

        document.getElementById("eyeImg").src =
            path.eye + data.imageID + ".png";

    }


    else if (part == "Ears") {

        document.getElementById("earImg").src =
            path.ear + data.imageID + ".png";

    }


    else if (part == "Tail") {

        document.getElementById("tailImg").src =
            path.tail + data.imageID + ".png";

    }

}