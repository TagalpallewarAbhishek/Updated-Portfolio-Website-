// ==============================================
// 1. Sticky Header Functionality
// ==============================================

const header = document.getElementById("main-header");
// Check if the header element exists before trying to get its position
if (header) {
    let headerOffset = header.offsetTop; 

    function makeHeaderSticky() {
        if (window.pageYOffset > headerOffset) {
            // Add a class that makes the header fixed
            header.classList.add("sticky");
        } else {
            // Remove the class when the user scrolls back to the top
            header.classList.remove("sticky");
        }
    }

    // Attach the header function to the scroll event
    window.addEventListener('scroll', makeHeaderSticky);
}


// ==============================================
// 2. Scroll-Reveal Effect Functionality
// ==============================================

const cards = document.querySelectorAll(".content-card");

// Define options for the Intersection Observer
const observerOptions = {
    root: null, // relative to the viewport
    rootMargin: "0px",
    threshold: 0.1 // 10% of the item must be visible
};

// Create the observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // If the element is in the viewport, add the 'reveal' class
            entry.target.classList.add("reveal");
            // Stop observing once revealed to save resources
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Loop through all cards and start observing them
cards.forEach(card => {
    // Add the initial hidden class
    card.classList.add('hidden-card');
    // Start observing
    observer.observe(card);
});