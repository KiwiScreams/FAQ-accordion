document.querySelectorAll('.accordion').forEach(accordion => {
    accordion.addEventListener('click', () => {
        document.querySelectorAll('.accordion').forEach(otherAccordion => {
            if (otherAccordion !== accordion) {
                otherAccordion.classList.remove('active');
                otherAccordion.nextElementSibling.style.display = 'none';
                otherAccordion.querySelector('img').src = './assets/images/icon-plus.svg';
            }
        });
        accordion.classList.toggle('active');
        const panel = accordion.nextElementSibling;
        panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
        const img = accordion.querySelector('img');
        if (accordion.classList.contains('active')) {
            img.src = './assets/images/icon-minus.svg';
        } else {
            img.src = './assets/images/icon-plus.svg';
        }
    });
});