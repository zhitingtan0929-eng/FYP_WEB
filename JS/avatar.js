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