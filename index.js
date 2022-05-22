window.addEventListener('scroll', reveala);

function reveala(){
    let reveals = document.querySelectorAll('.reveal');
    

    for(var i = 0; i < reveals.length; i++){

        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        // revealPoint = 150;
       
        if(revealTop < windowHeight){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

const menuBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');

menuBtn.addEventListener('click', function (){
    menuBtn.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
});

mobileMenu.addEventListener('click', function (){
    mobileMenu.classList.toggle('is-active');
    menuBtn.classList.toggle('is-active');
});


window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})


VanillaTilt.init(document.querySelectorAll(".skill1"), {
    max: 18,
    speed: 600
});

const typed = new Typed(".puttin", {
    strings:["Front-End Web Developer.", "Graphic Designer.", "UI Designer."],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
});