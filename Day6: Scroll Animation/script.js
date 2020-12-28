const pokeAPi = 'https://pokeapi.co/api/v2/generation/1/'

// Async function to return pokemon Array
const apiCall = async () => {
    return await fetch(pokeAPi)
        .then(response => response.json())
        .then(data => data.pokemon_species)
        .then(pokeArray => { return pokeArray })
        .catch(err => console.log(err))
}

// Create new div and append to body below h1
const makeBoxes = (array) => {
    const capitalize = array.name.charAt(0).toUpperCase() + array.name.slice(1);
    const newBox = document.createElement('div');
    newBox.classList.add('box');
    newBox.innerHTML = `<h2>${capitalize}</h2>`;
    const h1Ref = document.querySelector('h1');
    h1Ref.parentNode.insertBefore(newBox, h1Ref.nextSibling)
}

async function caller() {
    // Used await to load all of the Api call before executing next set of instructions
    const fetched = await apiCall();
    fetched.forEach(makeBoxes)

    // Scroll Animation Start
    const boxes = document.querySelectorAll('.box');
    window.addEventListener('scroll', checkBoxes);

    checkBoxes();
    
    function checkBoxes() {
        const triggerBottom = window.innerHeight / 5 * 4;
    
        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
    
            if (boxTop < triggerBottom) {
                box.classList.add('show');
            } else {
                box.classList.remove('show');
            }
        })
    }
    // Scroll Animation End
}

caller();