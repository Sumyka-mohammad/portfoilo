// No JavaScript functionality is strictly required for this basic portfolio layout.
// However, you can add JavaScript here for features like:
// - Smooth scrolling for navigation links
// - Image sliders or carousels for projects
// - Form validation for a contact section (if added)
// - Interactive elements or animations

// Example: Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});