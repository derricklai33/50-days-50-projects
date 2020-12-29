const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');
const pikachuSound = new Audio('./025-kanto-pikachu.mp3');
const eeveeSound = new Audio('./eevee-starter.mp3');

left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
    pikachuSound.play();
});
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));

right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
    eeveeSound.play();
});
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));