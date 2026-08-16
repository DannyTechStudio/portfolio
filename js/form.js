document.addEventListener("DOMContentLoaded", () => {

    const contactForm = document.getElementById("contact-form");
    const submitBtn = document.getElementById("submit-btn");
    const formStatus = document.getElementById("form-status");
    
    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm)

        submitBtn.textContent = "Sending...";
        submitBtn.disabled = true;
        
        try {
            const response = await fetch(contactForm.action, {
                
                method: "POST",
                body: formData

            });
            
            const result = await response.json();

            console.log("Web3Forms response:", result);
            
            if (response.ok && result.success) {
                
                formStatus.className = "success";
                formStatus.textContent = "Message sent successfully! Daniel will get back to you soon.";
                
                setTimeout(() => {

                    contactForm.reset();
                    formStatus.textContent = "";
                    formStatus.className = "";
                    
                }, 5000);

            } else {

                console.error("Web3Forms error:", result);
                
                throw new Error(

                    result?.body?.message ||
                    result?.message ||
                    "Unable to send message."

                );
            }
            
        } catch (error) {

            console.error("Contact form error:", result);
            
            formStatus.className = "error";
            formStatus.textContent = "Oops! Something went wrong. Please try again later";
            
        } finally {

            submitBtn.textContent = "Send message";
            submitBtn.disabled = false;
            
        }
        
    });
});

