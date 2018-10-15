let Poki = POKEMON
let allPoki = []

function allPokemon(){
  pokijson
}

function addPokiToPage(){
  add = document.getElementById("pokemon-container")
  add.innerHTML += Poki.map(pokeObj => (
    `<div class="pokemon-container">
      <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${pokeObj.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto"> 
            <img data-id="${pokeObj.id}" data-action="flip" class="toggle-sprite" src="${pokeObj.sprites.front}">
          </div>
        </div>
      </div>
    </div>`
  )).join('')
}

document.getElementById('pokemon-search-form').addEventListener('input', event => {
  const filteredPokes = Poki.filter(pokeObj => pokeObj.name.includes(event.target.value.toLowerCase()))
  const filteredPokeHTML = filteredPokes.map(pokeObj => (
    `<div class="pokemon-container">
      <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${pokeObj.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
            <img data-id="${pokeObj.id}" data-action="flip" class="toggle-sprite" src="${pokeObj.sprites.front}">
          </div>
        </div>
      </div>
    </div>`
    )).join('')

  document.getElementById('pokemon-container').innerHTML = filteredPokeHTML.length ? filteredPokeHTML : `<p><center>There are no Pokémon here</center></p>`
})





document.addEventListener('DOMContentLoaded', () => {
  // console.log(POKEMON)
  //YOUR CODE HERE
  // console.log(allPokemon())
  addPokiToPage()
})


  