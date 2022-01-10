const parallax = document.querySelector('.parallax');

window.addEventListener('scroll', () => {
    //console.log(window.scrollY/2);
    parallax.style.backgroundPositionY = -window.scrollY / 4 + "px";
});