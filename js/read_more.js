//-------------- Initialize Descriptions Collapsed Functionality
function initializeReadMore() {
    
    document.querySelectorAll(".project-description-wrapper").forEach((wrapper) => {
        
        const descriptionChild = wrapper.querySelector(".project-descriptions");
        const buttonChild = wrapper.querySelector(".read-more-btn");

        if (!descriptionChild || !buttonChild) return;

        // Set the initial collapsed state
        descriptionChild.classList.add("collapsed");

        buttonChild.addEventListener("click", () => {
            const isExpanded = buttonChild.getAttribute("aria-expanded") === "true";

            if (isExpanded) {
                descriptionChild.style.maxHeight = `${descriptionChild.scrollHeight}px`;

                requestAnimationFrame(() => {
                    descriptionChild.classList.add("collapsed");
                    descriptionChild.style.maxHeight = "";
                });

                buttonChild.textContent = "Read more";
                buttonChild.setAttribute("aria-expanded", "false");
            } else {
                descriptionChild.classList.remove("collapsed");
                descriptionChild.style.maxHeight = `${descriptionChild.scrollHeight}px`;

                buttonChild.textContent = "Read more";
                buttonChild.setAttribute("aria-expanded", "true");
            }
        });
    });
}


//-------------- Read more button Functionality on page load
document.addEventListener("DOMContentLoaded", () => {

    // Initialize Description Collapsed
    initializeReadMore();
});