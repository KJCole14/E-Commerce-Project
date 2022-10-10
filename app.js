console.log("hello world");
// Slideshow
let slideindex = 0;
showslides(slideindex);

function showslides() {
    setTimeout(showslides, 400 * 10);
    let i;
    let slide = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    slideindex++;
    if (slideindex > slide.length) {
        slideindex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className.replace("active");
    }
    slide[slideindex - 1].style.display = "block";
    dots[slideindex - 1].className += " active";
   
}