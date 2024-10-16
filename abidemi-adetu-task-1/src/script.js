document.querySelectorAll('.dropdown-toggle').forEach(item => {
    item.addEventListener('click', (event) => {
        const dropdown = item.nextElementSibling;
        if (dropdown) {
            dropdown.classList.toggle('show');
        }
        event.preventDefault(); // Prevent default anchor click behavior
    });
});

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    });
});
