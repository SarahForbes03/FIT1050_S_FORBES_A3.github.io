//#region TOP BAR + DROP DOWN
// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener('click', function() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    // run the function to check the aria-expanded value
    ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

// This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll 
// animations with the navbar


document.addEventListener('scroll', (e) => { 
    const scroll = document.documentElement.scrollTop;
    if(scroll >= 100){
document.querySelector('body').classList.add('scroll')
    } else {
    document.querySelector('body').classList.remove('scroll')
    }
});


//#endregion

//#region GALLERY
let carouselEl = document.getElementById('bootstrap-gallery-container');

// Create a new Bootstrap 5 Carousel instance with specified options
const carousel = new bootstrap.Carousel(carouselEl, {
    interval: 20000,
    wrap: true,
});

// Add an event listener for the 'slide.bs.carousel' event, fires immediately when the slide instance method is invoked.
carouselEl.addEventListener('slide.bs.carousel', (event) => {
    const container = document.querySelector('.carousel-inner');
    lightGallery(container, {
        thumbnail: false,
        pager: false,
        plugins: [],
        hash: false,
        preload: 4,
        selector: '.lg-item',
    });
});
//#endregion

//#region 
//#endregion