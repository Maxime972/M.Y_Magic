const parallax = document.querySelector('.parallax');

window.addEventListener('scroll', () => {
    //console.log(window.scrollY/2);
    if (window.screen.width < 768)
    {
        parallax.style.backgroundPositionY = -window.scrollY / 4 + 'px'
    }else {
        parallax.style.backgroundPositionY = -window.scrollY / 2 + 'px'
    }
});