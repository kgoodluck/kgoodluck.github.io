/* console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.screen.width);
console.log(window.screen.height);
console.log(window.height());
console.log(window.width());
console.log((document).height());
console.log((document).width()); */

// setting the footer to be at the bottom for index page
if (document.querySelector(".profile-image")) {
    const footerTag = document.querySelector("footer");
footerTag.style.top = `${window.innerHeight * 0.85}px`;
}

// changing about page style when window is too narrrow
const mapWrapper = document.querySelector(".map_wrapper");

if (mapWrapper !== null) {
    if (window.innerWidth < 1460) {
        mapWrapper.classList.add("flex_column");
        document.querySelector("iframe").width = "100%";
    };

};
