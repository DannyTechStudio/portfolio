
// Hamburger functionality
const toogle = document.getElementById('menu-toggle');
const navlinks = document.getElementById('nav-links');

toogle.addEventListener('click', () => {
    navlinks.classList.toggle('active');
});


// Form Validations & Interactivitity
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
        //Message successfully sent feedback
        showFeedbackPopup("Message sent successfully!", "#00ff00", "#000000");

        // Changing the button text to "Sent"
        sendBtn.textContent = "Sent";

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

/*-------------- Function to show modal -------------- */
    function showFeedbackPopup(message, backgroundColor, fontColor) {
        const feedbackPopup = document.querySelector('.modal');
        feedbackPopup.innerText = message;
        feedbackPopup.style.backgroundColor = backgroundColor;
        feedbackPopup.style.color = fontColor;
        feedbackPopup.style.display = 'block';
        
        /*-------------- Short delay before displaying the modal-------------- */
        setTimeout(() => {
            feedbackPopup.classList.add('active');
        }, 10);
        
        /*-------------- Hiding the modal -------------- */
        setTimeout(() => {
            feedbackPopup.style.display = 'none';
            feedbackPopup.classList.remove('active');
        }, 3000);
    }