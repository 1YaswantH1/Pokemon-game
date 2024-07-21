let next = document.querySelector('#next')
let pokemon_name = document.querySelector('p')
let pokemon_container = document.querySelector('.caught')

let catch1 = document.querySelector('#catch')
let img = document.querySelectorAll('img')
const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=2000"; 

next.addEventListener("click", function () {

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const allPokemonNames = data.results.map(pokemon => pokemon.name);
            let a = `${Math.floor(Math.random() * 1100) + 1}`
            img[1].src = `https://img.pokemondb.net/sprites/home/normal/2x/${allPokemonNames[a]}.jpg`;
            pokemon_name.innerText = allPokemonNames[a]
            pokemon_name.style.fontWeight = 'bold'
        })

})
catch1.addEventListener('click', function () {

    let div1 = document.createElement('div')
    let name_1 = document.createElement('p')
    div1.classList.add('item')
    name_1.className = 'name1'
    pokemon_container.append(div1)
    let y = document.createElement('img')
    pname = pokemon_name.innerText.toLowerCase()
    y.src = `https://img.pokemondb.net/sprites/home/normal/2x/${pname}.jpg`;

    div1.append(y)
    name_1.innerText = pname
    name_1.style.fontWeight = 'bolder'
    name_1.style.backgroundColor = 'whitesmoke'
    div1.append(name_1)

    next.click()
})
document.addEventListener('keydown', function (e) {
    if (e.key == "ArrowLeft" || e.key == "ArrowRight" || e.key == "ArrowUp" || e.key == "ArrowDown") {
        next.click()
    }
})
document.addEventListener('keydown', function (e) {
    if (e.key == "Enter") {
        catch1.click()
    }
})
