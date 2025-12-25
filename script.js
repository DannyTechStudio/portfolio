
//------------------------ Hamburger functionality
const toogle = document.getElementById('menu-toggle');
const navlinks = document.getElementById('nav-links');

let menuOpen = false;

toogle.addEventListener('click', () => {
    menuOpen = !menuOpen;
    toogle.innerHTML = menuOpen ? '<i class="bi bi-x-lg"></i>' : '&#9776;';
    navlinks.classList.toggle('active');
});


//------------------------- Form Validations & Interactivitity
const name = document.getElementById("name");
const email = document.getElementById("email");
const messageOption = document.getElementById("message-option");
const message = document.getElementById("message");
const sendBtn = document.getElementById("send-btn");


sendBtn.addEventListener("click", () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    let nameInput = name.value;
    let emailInput = email.value;
    let messageOpt = messageOption.textContent;
    let messageInput = message.value;

    if(nameInput === '') {
        showFeedbackPopup("All fields are required!", "#ff0000", "#ffffff");
    }
    else if(emailInput === '' || !emailRegex.test(emailInput)) {
        showFeedbackPopup("Please enter a valid email address!", "#ff0000", "#ffffff");
    }
    else if(messageOpt === ''){
        showFeedbackPopup("Please select a message option!", "#ff0000", "#ffffff");
    }
    else if(messageInput === ''){        
        showFeedbackPopup("Please enter your message!", "#ff0000", "#ffffff");
    } else {
        //------------------ Message successfully sent feedback
        showFeedbackPopup("Message sent successfully!", "#00ff00", "#000000");

        //------------------ Changing the button text to "Sent"
        sendBtn.textContent = "Sent";

        //------------------ Storing information at the localStorage
        localStorage.setItem('name', nameInput);
        localStorage.setItem('email', emailInput);
        localStorage.setItem('messageOption', messageOpt);
        localStorage.setItem('message', messageInput);

        //------------------ Clearing input after sending
        nameInput = '';
        emailInput = '';
        messageOpt = '';
        messageInput = '';
    }
});

// Placeholder animations
function animateUsernameInput() {
    let t = document.getElementById("name");
    let a = ["Enter your name: "];
    let i = 0;
    let j = 0;
    let pause = false;


    setInterval(() => {
        if (pause) return;

        t.placeholder = a[i].slice(0, ++j) + '|';

        if (j > a[i].length) {
            pause = true;
            setTimeout(() => {
                j = 0;
                i = ++i % a.length;
                pause = false;
            }, 80)
        }
    }, 250)
};

animateUsernameInput();

function animateEmailInput() {
    let t = document.getElementById("email");
    let a = ["Enter your email address: "];
    let i = 0;
    let j = 0;
    let pause = false;


    setInterval(() => {
        if (pause) return;

        t.placeholder = a[i].slice(0, ++j) + '|';

        if (j > a[i].length) {
            pause = true;
            setTimeout(() => {
                j = 0;
                i = ++i % a.length;
                pause = false;
            }, 80)
        }
    }, 220)
};

animateEmailInput();

function messageInput() {
    let t = document.getElementById("message");
    let a = ["Enter your message here: "];
    let i = 0;
    let j = 0;
    let pause = false;


    setInterval(() => {
        if (pause) return;

        t.placeholder = a[i].slice(0, ++j) + '|';

        if (j > a[i].length) {
            pause = true;
            setTimeout(() => {
                j = 0;
                i = ++i % a.length;
                pause = false;
            }, 50)
        }
    }, 200)
};

messageInput();

/*-------------- Function to show modal -------------- */
const portfolioDetailsIcon = document.getElementById("portfolio-project-details-icon");
const portfolioModal = document.getElementById("portfolio-modal");
const portfolioCloseModalIcon = document.getElementById("portfolio-close-modal-icon");
const passvaultDetailsIocn = document.getElementById("passvault-details-icon");
const passvaultModal = document.getElementById("passvault-modal");
const passvaultCloseModalIcon = document.getElementById("passvault-close-modal-icon");
const textAnalyzerDetailsIcon = document.getElementById("text-analyzer-details-icon");
const textAnalyzerModal = document.getElementById("text-analyzer-modal");
const textAnalyzerCloseModalIcon = document.getElementById("text-analyzer-close-modal-icon");
const pfCertDetailsIcon = document.getElementById("pf-cert-details-icon");
const pfCertModal = document.getElementById("pf-cert-modal-overlay");
const pfCertModalCloseIcon = document.getElementById("pf-cert-modal-icon");
const wdCertDetailsIcon = document.getElementById("FCC-web-design-cert-details-icon");
const wdCertModal = document.getElementById("FCC-WD-cert-modal-overlay");
const wdCertModalCloseIcon = document.getElementById("FCC-RWD-cert-modal-icon");
const jsCertDetailsIcon = document.getElementById("FCC-JS-cert-details-icon");
const jsCertModal = document.getElementById("FCC-JS-cert-modal-overlay");
const jsCertModalCloseIcon = document.getElementById("FCC-JS-cert-modal-icon");

portfolioDetailsIcon.addEventListener("click", () => {
    portfolioModal.style.display = 'flex';
});

portfolioCloseModalIcon.addEventListener("click", () => {
    portfolioModal.style.display = 'none';
});

passvaultDetailsIocn.addEventListener("click", () => {
    passvaultModal.style.display = 'flex';
});

passvaultCloseModalIcon.addEventListener("click", () => {
    passvaultModal.style.display = 'none';
});

textAnalyzerDetailsIcon.addEventListener("click", () => {
    textAnalyzerModal.style.display = 'flex';
});

textAnalyzerCloseModalIcon.addEventListener("click", () => {
    textAnalyzerModal.style.display = 'none';
});

pfCertDetailsIcon.addEventListener("click", () => {
    pfCertModal.style.display = 'flex';
});

pfCertModalCloseIcon.addEventListener("click", () => {
    pfCertModal.style.display = 'none';
});

wdCertDetailsIcon.addEventListener("click", () => {
    wdCertModal.style.display = 'flex';
});

wdCertModalCloseIcon.addEventListener("click", () => {
    wdCertModal.style.display = 'none';
});

jsCertDetailsIcon.addEventListener("click", () => {
    jsCertModal.style.display = 'flex';
});

jsCertModalCloseIcon.addEventListener("click", () => {
    jsCertModal.style.display = 'none';
});