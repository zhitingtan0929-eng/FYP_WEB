
const bodyImg =
    document.getElementById("bodyImg");


const eyeImg =
    document.getElementById("eyeImg");


const earImg =
    document.getElementById("earImg");


const tailImg =
    document.getElementById("tailImg");



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

    updatePosition();

}


updatePreview();


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


let avatarConfig;


fetch("../DATA/avatarConfig.json")
    .then(res => res.json())
    .then(data => {

        avatarConfig = data;

        loadConfig();

    });

function loadConfig() {


    let animal =
        document.getElementById("animal").value;


    let body =
        document.getElementById("body").value;



    let data =
        avatarConfig[animal][body];



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