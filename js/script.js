document.addEventListener("DOMContentLoaded", () => {
    /*-----------------------------------------------
            Light/Dark Theme Fucntionality
    -----------------------------------------------*/
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    let theme = localStorage.getItem('theme') || 'light';
    
    const lightIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentcolor" class="bi bi-brightness-high" viewBox="0 0 16 16">
            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
        </svg>
    `;
    
    const darkIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentcolor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
            <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
        </svg>
    `;

    // Set initial state
    document.body.setAttribute('data-theme', theme);
    themeToggleBtn.innerHTML = theme === 'light' ? `${darkIcon}` : `${lightIcon}`;
    
    themeToggleBtn.addEventListener('click', () => {
        
        theme = theme === 'dark' ? 'light' : 'dark';
        
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        themeToggleBtn.innerHTML = theme === 'dark' ? `${lightIcon}` : `${darkIcon}`;
    });



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
        "I Build <span class='accent'>Secure</span> and <span class='accent'>Scalable</span> Backend Systems That Power Modern Businesses.",
        "I Design, Build, & Optimize <span class='accent'>Backend Solutions</span> for Modern Digital Products.",
        "I Create <span class='accent'>Secure APIs</span> & <span class='accent'>Database Solutions</span> That Businesses Can Depend On.",
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
    

    /*-----------------------------------------------
        Scroll Reveal Fucntionality
    -----------------------------------------------*/
    const revealElements = document.querySelectorAll(".reveal");
    const revealObjects = new IntersectionObserver((entries) => {

        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); });

    }, { threshold: 0.1, rootMargin: '0px 0px -36px 0px' });
    revealElements.forEach(el => revealObjects.observe(el));

});