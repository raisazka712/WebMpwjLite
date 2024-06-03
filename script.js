document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const parent = dropdown.parentElement;

        dropdown.addEventListener('mouseenter', () => {
            dropdown.querySelector('.dropdown-menu').style.display = 'block';
        });

        parent.addEventListener('mouseleave', () => {
            dropdown.querySelector('.dropdown-menu').style.display = 'none';
        });
    });
});