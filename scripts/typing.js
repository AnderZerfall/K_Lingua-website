const wordList = document.querySelectorAll('.hero-section__word');
const text = document.querySelector('.hero-section__text');
const button = document.querySelector('.hero-section__button');

const animateTyping = (words, speed) => {
    let delay = speed;

    words.forEach((word, i) => {
        setTimeout(() => {
            word.classList.add('animatedText');
        }, delay);

        if (i > 2 && i <= 5) {
            delay += 600;
        } else if (i > 5) {
            delay += 1100;
        } else {
            delay += 200;
        }
        
    });

    setTimeout(() => {
        text.classList.add('animatedText');
        button.classList.add('animatedText');
    }, delay);
}


document.addEventListener('DOMContentLoaded', () => animateTyping(wordList,  100));