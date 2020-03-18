let i = 0; //Starting point
const images = [];
const time = 3000; //time between slides

// image list
images[0] = 'image1.png';
images[0] = 'image2.png';
images[0] = 'image3.png';
images[0] = 'image4.png';

//change image

function changeImg() {
    document.slide.src = images[i]; //gets first
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg(), time");
}

window.onload = changeImg;