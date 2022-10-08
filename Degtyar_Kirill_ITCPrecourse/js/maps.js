// creating array with places and url endings
const locations = [
    { place: "moscow", url: "!1m18!1m12!1m3!1d577325.3470473055!2d36.8251263110822!3d55.58152443662476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2sMoscow%2C%20Russia!5e0!3m2!1sen!2sil!4v1665194674659!5m2!1sen!2sil" },
    { place: "nikita", url: "!1m18!1m12!1m3!1d13186.542254527258!2d34.22652398624634!3d44.51250108561376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4094ca026cd2bf63%3A0xac79b73f90b5b644!2sNikita!5e0!3m2!1sen!2sil!4v1665194738813!5m2!1sen!2sil" },
    { place: "cokerry", url: "!1m18!1m12!1m3!1d19673.9160383297!2d-10.238414269207171!3d51.94782380369308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x484ff31c8b72bf25%3A0xa00c7a99731e6e0!2sCarhan%20Lower%2C%20Cahersiveen%2C%20Co.%20Kerry%2C%20Ireland!5e0!3m2!1sen!2sil!4v1665194810617!5m2!1sen!2sil" },
    { place: "telaviv", url: "!1m18!1m12!1m3!1d108169.74093198565!2d34.72720587404561!3d32.088057674642954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2sTel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1665194843118!5m2!1sen!2sil" },
];

// making buttons
const prevButton = document.querySelector(".prev_button");
const nextButton = document.querySelector(".next_button");
const flagItems = document.querySelectorAll(".flag_items");
const mapUrl = document.querySelector(".map_frame");
let currentLocation = 0;
prevButton.disabled = true;
mapUrl.src = `https://www.google.com/maps/embed?pb=${locations[currentLocation+0].url}`;

nextButton.addEventListener('click', function() {
    // setting place from array to be the class in html file
    flagItems[currentLocation].classList.remove(locations[currentLocation].place);
    flagItems[currentLocation+1].classList.add(locations[currentLocation+1].place);
    prevButton.disabled = false;
    
    // changing map url
    mapUrl.src = `https://www.google.com/maps/embed?pb=${locations[currentLocation+1].url}`;

    currentLocation++;
    //checking for the end of the list to disable button
    if (flagItems.length === currentLocation + 1) {
        nextButton.disabled = true;
    }
});

prevButton.addEventListener('click', function() {
    flagItems[currentLocation-1].classList.add(locations[currentLocation-1].place);
    flagItems[currentLocation].classList.remove(locations[currentLocation].place);
    nextButton.disabled = false;

    mapUrl.src = `https://www.google.com/maps/embed?pb=${locations[currentLocation-1].url}`;

    currentLocation--;
    if (currentLocation === 0) {
        prevButton.disabled = true;
    }
});