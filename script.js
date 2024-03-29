// navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

//dark mode

let darkMode =document.querySelector('#dark-mode');

darkMode.onclick = () => {
    if(darkMode.classList.contains('bx-moon')){
        darkMode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }
    else{
        darkMode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}

// scroll reveal

const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true 
});


sr.reveal('.home-text,.home-img, .about-img, .about-text, .box, .s-box, .connect-text, .btn, .contact-box', {interval:200})