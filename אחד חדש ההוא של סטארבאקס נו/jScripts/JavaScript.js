function getImages() {
    var images = ['images/sabish-solo-images/manat_sabih_ovad_i.jpg',
        'images/sabish-solo-images/sabichhakosem.jpg',
        'images/sabish-solo-images/sabichhasharonpitta_i.jpg',
        'images/sabish-solo-images/sabih_frishman_NIM_4532_i.jpg',
        'images/sabish-solo-images/סביח ירושלמי.jpg',
        'images/sabish-solo-images/pandasabich_i.jpg'];

    return images;
}

function getImagesNames() {
    var imagesNames = ['סביח עובד',
        'סביח הקוסם',
        'סביח השרון',
        'סביח פרישמן',
        'סביח ירושלמי',
        'סביח פנדה'];

    return imagesNames;
}

function onload() {
    var images = getImages();

    var mainImage = document.getElementById("main-image");
     mainImage.src = images[0];

    for ( i = 0; i < images.length; i++) {
        var image = document.getElementById("thumbnail-" + i);
        image.src = images[i];
    }

    var imageNumberText = document.getElementById("image-number-text");
    var imageNameText = document.getElementById("image-name-text");

    imageNumberText.innerText = 1 + " / " + getImages().length;
    imageNameText.innerText = getImagesNames()[0];
}

function setMainImage(index) {
    var currentImage = document.getElementsByClassName("current-image")[0];
    currentImage.classList.remove("current-image");

    var clickedImage = document.getElementById("thumbnail-" + index);
    var mainImage = document.getElementById("main-image");
    var imageNumberText = document.getElementById("image-number-text");
    var imageNameText = document.getElementById("image-name-text");

    mainImage.src = clickedImage.src;
    imageNumberText.innerText = (index + 1) + " / " + getImages().length;
    imageNameText.innerText = getImagesNames()[index];

    clickedImage.classList.add("current-image");
}

function nextImage() {
    var currentImage = document.getElementsByClassName("current-image")[0];
    var mainImage = document.getElementById("main-image");
    var imageNumberText = document.getElementById("image-number-text");
    var imageNameText = document.getElementById("image-name-text");

    var index = +(currentImage.id).split("-")[1];

    if (index + 1 >= getImages().length) {
        var nextImage = document.getElementById("thumbnail-0");
        mainImage.src = nextImage.src;
        imageNumberText.innerText = 1 + " / " + getImages().length;
        imageNameText.innerText = getImagesNames()[0];
        nextImage.classList.add("current-image");
    } else {
        var nextImage = document.getElementById("thumbnail-" + (index + 1));
        mainImage.src = nextImage.src;
        imageNumberText.innerText = (index + 2) + " / " + getImages().length;
        imageNameText.innerText = getImagesNames()[index + 1];
        nextImage.classList.add("current-image");
    }

    currentImage.classList.remove("current-image");
}

function previousImage() {
    var currentImage = document.getElementsByClassName("current-image")[0];
    var mainImage = document.getElementById("main-image");
    var imageNumberText = document.getElementById("image-number-text");
    var imageNameText = document.getElementById("image-name-text");

    var index = +(currentImage.id).split("-")[1];

    if (index - 1 < 0) {
        var nextImage = document.getElementById("thumbnail-" + (getImages().length - 1));
        mainImage.src = nextImage.src;
        imageNumberText.innerText = getImages().length + " / " + getImages().length;
        imageNameText.innerText = getImagesNames()[getImages().length - 1];
        nextImage.classList.add("current-image");
    } else {
        var nextImage = document.getElementById("thumbnail-" + (index - 1));
        mainImage.src = nextImage.src;
        imageNumberText.innerText = (index) + " / " + getImages().length;
        imageNameText.innerText = getImagesNames()[index - 1];
        nextImage.classList.add("current-image");
    }

    currentImage.classList.remove("current-image");
}