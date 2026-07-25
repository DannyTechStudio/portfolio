document.addEventListener("DOMContentLoaded", () => {
    /*-----------------------------------------------
            Hamburger Fucntionality
    -----------------------------------------------*/
    const hamburger = document.querySelector('.hamburger-icon');
    const nav = document.querySelector("nav");
    
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
    const heroHeadlinesText = [
        "I Build Secure, Scalable Backend Systems That Power Modern Businesses.",
        "I Design, Build, and Optimize Backend Systems That Power Modern Digital Products.",
        "I Build Secure Backend Systems, REST APIs, and Database Solutions That Businesses Can Rely On.",
        "Helping Businesses Build Faster, Scale Smarter, and Grow with Reliable Backend Solutions.",
        "I Turn Business Ideas into Secure, Scalable Backend Solutions that can Web & Mobile Apps.",
    ]
});   