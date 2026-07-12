const images = [
    "images/backgrounds/farm background.png",
    "images/backgrounds/sakura background.png",
    "images/backgrounds/ironhead background.png",
    "images/backgrounds/Abandoned outpost background.png",
    "images/backgrounds/silverhollow background.png",
    "images/backgrounds/zeppelin background.png",
    "images/backgrounds/Convension background.png"
];

let current = 0;

const hero =
document.getElementById("hero");

function changeBackground(){
    hero.style.backgroundImage =
    `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${images[current]})`;

    current++;
    if(current >= images.length){
        current = 0;
    }
}

changeBackground();

setInterval(changeBackground, 5000);
