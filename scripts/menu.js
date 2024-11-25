const menu = document.getElementById('menu');
const nav = Array.from(menu.children).find(child => child.classList.contains('nav'))
const close = document.getElementById('close-menu');
const open = document.getElementById('open-menu');

open.addEventListener('click', () => {
    menu.style.visibility = 'visible';
    nav.style.transform = 'translateY(0)';
    nav.style.opacity = '1';
    menu.style.opacity = '1';

    open.classList.add('open-burger');
    close.classList.remove('close-burger');
    document.documentElement.style.overflowY = 'hidden';
});

close.addEventListener('click', () => {
    menu.style.visibility = 'hidden';
    nav.style.transform = 'translateY(-150%)';
    nav.style.opacity = '0';
    menu.style.opacity = '0';
    
    open.classList.remove('open-burger');
    close.classList.add('close-burger');
    document.documentElement.style.overflowY = 'scroll';
});

const contactButton = document.querySelectorAll('.button--contact');

contactButton.forEach(contact => {
    contact.addEventListener('click', () => {
        window.location.href = 'Contact.html';
    });
});

