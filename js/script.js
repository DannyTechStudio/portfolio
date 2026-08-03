document.addEventListener("DOMContentLoaded", () => {
    /*-----------------------------------------------
            Hamburger Fucntionality
    -----------------------------------------------*/
    const hamburger = document.querySelector('.hamburger-icon');
    const nav = document.querySelector("nav ul");
    
    hamburger.addEventListener("click", () => {
        nav.classList.toggle('active');
        hamburger.innerHTML = nav.classList.contains('active') ? '✕' : '&#9776;';
    });
    
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            hamburger.innerHTML = '&#9776;';
        });
    });




    /*-----------------------------------------------
            Active Tab Fucntionality
    -----------------------------------------------*/
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav ul li a");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove("active"));
                
                const id = entry.target.getAttribute("id");
                const activeLink = document.querySelector(`nav ul li a[href="#${id}"]`);
                if (activeLink) activeLink.classList.add("active");
            }
        });
    }, {
        threshold: 0.4
    });
    
    sections.forEach(section => observer.observe(section));




    /*-----------------------------------------------
            Dynamic Hero Headline Fucntionality
    -----------------------------------------------*/
    const heroHeadlineTexts = [
        "I Build <span class='accent'>Secure, Scalable</span> Backend Systems That Power Modern Businesses.",
        "I Design, Build, and Optimize <span class='accent'>Backend Solutions</span> for Modern Digital Products.",
        "I Create <span class='accent'>Secure APIs</span> and Database Solutions Businesses Can Depend On.",
        "I Help Businesses <span class='accent'>Build Faster, Scale Smarter</span>, and Grow with Technology.",
        "I Turn Business Ideas into <span class='accent'>Secure Backend Solutions</span> for Web and Mobile Apps."
    ];

    const heroHeadline = document.querySelector(".hero-headline");
    let currentIndex = 0;
    heroHeadline.innerHTML = heroHeadlineTexts[currentIndex];

    const displayTime = 12000;
    const fadeTime = 2000;

    function changeHeadline() {
        heroHeadline.classList.add("fade-out");

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % heroHeadlineTexts.length;

            heroHeadline.innerHTML = heroHeadlineTexts[currentIndex];

            heroHeadline.classList.remove("fade-out");

        }, fadeTime);
    }

    setInterval(changeHeadline, displayTime + fadeTime);
});   