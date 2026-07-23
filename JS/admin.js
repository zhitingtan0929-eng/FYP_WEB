const bodyImg =
    document.getElementById("bodyImg");


const eyeImg =
    document.getElementById("eyeImg");


const earImg =
    document.getElementById("earImg");


const tailImg =
    document.getElementById("tailImg");



function updateAvatar() {


    let animal =
        document.getElementById("animal").value;



    let body =
        document.getElementById("body").value;



    // 图片


    bodyImg.src =
        `img/${animal}/body/${body}.png`;



    eyeImg.src =
        `img/${animal}/eye/eye1.png`;


    earImg.src =
        `img/${animal}/ear/ear1.png`;


    tailImg.src =
        `img/${animal}/tail/tail1.png`;




    // 位置


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



updateAvatar();