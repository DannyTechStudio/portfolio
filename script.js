
// Hamburger functionality
const toogle = document.getElementById('menu-toggle');
const navlinks = document.getElementById('nav-links');

toogle.addEventListener('click', () => {
    navlinks.classList.toggle('active');
});


// Form Interactivitity
const name = document.getElementById("name");
const email = document.getElementById("email");
const messageOption = document.getElementById("message-option");
const message = document.getElementById("message");
const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", () => {

    let nameInput = name.value;
    let emailInput = email.value;
    let messageOpt = messageOption.textContent;
    let messageInput = message.value;

    if(nameInput === '') {
        window.alert("All fields are required!");
    }
    else if(emailInput === ''){
        window.alert("All fields are required!");
    }
    else if(messageOpt === ''){
        window.alert("All fields are required!");
    }
    else if(messageInput === ''){        
        window.alert("All fields are required!");
    } else {
        // Storing information at the localStorage
        localStorage.setItem('name', nameInput);
        localStorage.setItem('email', emailInput);
        localStorage.setItem('messageOption', messageOpt);
        localStorage.setItem('message', messageInput);

        // Clearing input after sending
        nameInput = '';
        emailInput = '';
        messageOpt = '';
        messageInput = '';
    }
});