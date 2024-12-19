const sections = document.querySelectorAll('.section');

const isVisible = (element) => {
    const elementArea = element.getBoundingClientRect();

    return (
        elementArea.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        elementArea.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const showBlock = () => {
    sections.forEach(section => {
        if (isVisible(section)) {
            section.classList.add('animated');
        }
    })
}

document.addEventListener('DOMContentLoaded', showBlock);
window.addEventListener('scroll', showBlock);
window.addEventListener('resize', showBlock);