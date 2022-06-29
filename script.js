// displaying the overlay show
let showButton = document.querySelector('.section-one .overlayIcon')
let hideButton = document.querySelector('.section-one .overlayIcon-2')
let overlaywrapper = document.querySelector('.section-one .overlay-wrapper')
let conatiner = document.querySelector('.parent-container')
let overlayLinks = document.querySelector('.section-one .overlay-links')
let home = document.querySelector('.section-one .overlay-links .home')
let tours = document.querySelector('.section-one .overlay-links .tours')
let aboutUs = document.querySelector('.section-one .overlay-links .about-us')
let offer = document.querySelector('.section-one .overlay-links .offer')
let contact = document.querySelector('.section-one .overlay-links .contact')


showButton.addEventListener('click', (show) => {

    overlaywrapper.classList.add('change');
    show.preventDefault();
    conatiner.classList.add('change');
    overlayLinks.classList.add('change');
    home.classList.add('change');
    tours.classList.add('change');
    aboutUs.classList.add('change');
    offer.classList.add('change');
    contact.classList.add('change');
})
hideButton.addEventListener('click', (hide) => {

        overlaywrapper.classList.remove('change');
        hide.preventDefault();
        conatiner.classList.remove('change');
        overlayLinks.classList.remove('change');
        home.classList.remove('change');
        tours.classList.remove('change');
        aboutUs.classList.remove('change');
        offer.classList.remove('change');
        contact.classList.remove('change');
    })
    // end displaying overlay
    // start switching between back ab=nd front face section four

Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
    item.onclick = () => {
        item.parentElement.parentElement.classList.toggle("change");
    };
});
// end