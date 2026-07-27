document.addEventListener("DOMContentLoaded", () => {

    const contactForm = document.getElementById("contact-form");
    const submitBtn = document.getElementById("submit-btn");
    const formStatus = document.getElementById("form-status");
    
    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm)

        // Loading state
        submitBtn.textContent = "Sending...";
        submitBtn.disabled = true;
        
        try {
            const response = await fetch(contactForm.ariaDescription, {
                method: "POST",
                body: formData
            });
            
            const result = await response.json();
            
            if (result.success) {
                
                formStatus.className = "success";
                formStatus.textContent = "Message sent successfully! Daniel will get back to you soon.";
                
            } else {
                
                throw new Error(result.message);
                
            }
            
        } catch (error) {
            
            formStatus.className = "error";
            formStatus.textContent = "Oops! Something went wrong. Please try again later";
            
        }
        
        submitBtn.textContent = "Send message";
        submitBtn.disabled = false;
        
    });
});

