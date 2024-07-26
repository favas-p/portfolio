// =========== show menu ===============
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

// -------menu show --------
// Validate if constant exists 
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}


// ========== menu hidden ==========
// validate if constant exists
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


// ======== Remove Mobile nav ========
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    //When we click on eack nav__link, we remove the show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// ---------Home Name Animation----------
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Freelancer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Web Designer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Graphic Designer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<strong>Fullstack Developer</strong>')
    .pauseFor(2500)
    .start();

// ========= SWIPER PROJECT ============== 
var swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 30, // Adjust spacing between slides
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


// ==========EMAIL JS ==================
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactProject = document.getElementById('contact-project'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // Check if the field has a value
    if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
        // Add and remove color
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')
        // Show message
        contactMessage.textContent = 'Write all the input fields 📩'
    } else {
        // serviceID - templateID - #form - publickey 
        emailjs.sendForm('', '', '', '')
            .then(() => {
                // Show massage and add color
                contactMessage.classList.add('color-blue')
                contactMessage.textContent = 'Message sent ✅'

                // Remove message after five seconds
                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 5000)
            }, (error) => {
                alert('OOPS! SOMETHING HAS FAILED....', error)
            })

        // To clear the input field
        contactName.value = ''
        contactEmail.value = ''
        contactProject.value = ''
    }

}
contactForm.addEventListener('submit', sendEmail)

/*----- SCROLL SECTIONS ACTIVE LINK ----- */
let sections = document.querySelectorAll('section[id]');
let navLinks = document.querySelectorAll('.nav__menu a'); // Corrected selector

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active-link');
            });
            document.querySelector('.nav__menu a[href="#' + id + '"]').classList.add('active-link'); // Corrected selector
        }
    });
};




// ---------- SHOW SCROLL UP ---------------
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is highr than 350 viewport height, add the show-scroll class to the a tag with the scrollup
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// --------------- DARK LIGHT THEME --------------
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme thet the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validateion is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-sun-line' ? 'add' : 'remove'](darkTheme)
}

// Acrivate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / iocn theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


// ------------ CHANGE BACKGROUND HEADER -------------
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ?  header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

// SCROLL REVEAL ANIMATION 
const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    // reset:true /* animations repeat */
})

sr.reveal('.home__data, .footer__container')
sr.reveal('.about__content .side_one, .contact__content:nth-child(1)', {origin:'left'})
sr.reveal('.about__content .side_two, .contact__content:nth-child(2)', {origin:'right'})
sr.reveal('.skills__blob:nth-child(1) ', {origin:'top',delay:100,duration:2000,distance:'20px'})
sr.reveal('.skills__blob:nth-child(2) ', {origin:'top',delay:200,duration:2000,distance:'20px'})
sr.reveal('.skills__blob:nth-child(3) ', {origin:'top',delay:300,duration:2000,distance:'20px'})
sr.reveal('.skills__blob:nth-child(4) ', {origin:'top',delay:400,duration:2000,distance:'20px'})
sr.reveal('.skills__blob:nth-child(5) ', {origin:'top',delay:500,duration:2000,distance:'20px'})
sr.reveal('.skills__blob:nth-child(6) ', {origin:'top',delay:600,duration:2000,distance:'20px'})
sr.reveal('.skills__blob:nth-child(7) ', {origin:'top',delay:700,duration:2000,distance:'20px'})
sr.reveal('.skills__blob:nth-child(8) ', {origin:'top',delay:800,duration:2000,distance:'20px'})
sr.reveal('.skills__blob:nth-child(9) ', {origin:'top',delay:900,duration:2000,distance:'20px'})
sr.reveal('.skills__blob:nth-child(10) ', {origin:'top',delay:1000,duration:2000,distance:'20px'})
sr.reveal('.skills__blob:nth-child(11) ', {origin:'top',delay:1100,duration:2000,distance:'20px'})
sr.reveal('.skills__blob:nth-child(12) ', {origin:'top',delay:1200,duration:2000,distance:'20px'})
sr.reveal('.services__card:nth-child(1) ', {origin:'top',delay:100,duration:2500,distance:'50px'})
sr.reveal('.services__card:nth-child(2) ', {origin:'top',delay:250,duration:2500,distance:'50px'})
sr.reveal('.services__card:nth-child(3) ', {origin:'top',delay:400,duration:2500,distance:'50px'})
sr.reveal('.swiper', {origin:'left',delay:400,duration:2500,distance:'50px'})
sr.reveal('.swiper', {origin:'left',delay:400,duration:2500,distance:'50px'})

