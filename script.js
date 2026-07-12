const images = [

    "images/backgrounds/farm background.png",
    "images/backgrounds/sakura background.png",
    "images/backgrounds/ironhead background.png",
    "images/backgrounds/Abandoned outpost background.png",
    "images/backgrounds/silverhollow background.png",
    "images/backgrounds/zeppelin background.png",
    "images/backgrounds/Convension background.png"

];

// preload images

images.forEach(src=>{

    const img=new Image();
    img.src=src;

});

const layers=[

    document.querySelector(".bg0"),
    document.querySelector(".bg1"),
    document.querySelector(".bg2")

];

let imageIndex=0;
let layerIndex=0;

function showImage(){

    const layer=layers[layerIndex];

    // Prepare hidden layer

    layer.style.transition="none";
    layer.style.opacity="0";
    layer.style.transform="scale(1)";
    layer.style.backgroundImage=`url("${images[imageIndex]}")`;

    // Force browser redraw

    void layer.offsetWidth;

    // Restore transitions

    layer.style.transition=
        "opacity 3s ease, transform 12s linear";

    // Begin fade + zoom

    layer.style.opacity="1";
    layer.style.transform="scale(1.18)";

    // Fade out oldest layer

    const previous=(layerIndex+2)%3;

    layers[previous].style.opacity="0";

    layerIndex++;

    if(layerIndex>2)
        layerIndex=0;

    imageIndex++;

    if(imageIndex>=images.length)
        imageIndex=0;

}

showImage();

setInterval(showImage,6000);