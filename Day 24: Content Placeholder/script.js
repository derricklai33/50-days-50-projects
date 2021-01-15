const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const namebg = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_text = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
    header.innerHTML = `<img src="https://cdn.bulbagarden.net/upload/thumb/4/49/Ash_Pikachu.png/1200px-Ash_Pikachu.png" alt="">`
    title.innerHTML = `Lorem ipsum dolor sit amet.`
    excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, non!`
    profile_img.innerHTML = `<img src="https://www.glitched.online/wp-content/uploads/2019/09/ash-ketchum-smiling-1165117-1280x0.jpeg" alt="">`
    namebg.innerHTML = 'Ash Ketchum'
    date.innerHTML = '15 January 2020'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_text.forEach(bg => bg.classList.remove('animated-bg-text'))
}