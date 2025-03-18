document.addEventListener("DOMContentLoaded", function () {
    // Menu toggle functionality
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const overlay = document.querySelector(".overlay");
    const navItems = document.querySelectorAll(".nav-links a");

    if (menuToggle && navLinks && overlay) {
        // Toggle sidebar on menu icon click
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
            overlay.classList.toggle("active");
        });

        // Close sidebar when clicking a nav link
        navItems.forEach((item) => {
            item.addEventListener("click", function () {
                navLinks.classList.remove("active");
                overlay.classList.remove("active");
            });
        });

        // Close sidebar when clicking outside (on overlay)
        overlay.addEventListener("click", function () {
            navLinks.classList.remove("active");
            overlay.classList.remove("active");
        });
    }

    // FAQ Section functionality
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            faqItem.classList.toggle('active');
        });
    });
});
