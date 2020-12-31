const sounds = ['failling-down-stairs', 'omg-wow', "directed-by", "thomas-the-train", "sad-violin"];

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound;

})