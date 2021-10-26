// dom selectors
const all = document.getElementById('all')
const pc = document.getElementById('pc')
const ps = document.getElementById('ps')
const xbox = document.getElementById('xbox')
const nSwitch = document.getElementById('nSwitch')
const cardFragment = new DocumentFragment()
const cardClkListener = document.getElementsByClassName('card is-clickable')
const cardsContainer = document.getElementById('cardsContainer')
const cardTemplate = document.getElementById('cardTemplate')


const getGames = async () => {
    let res = await fetch('http://localhost:4000/games')
    let data = await res.json()
    let {games} = data
    console.log(data)
    return data
}

const showAll = async () => {
    let games = await getGames()
    console.log(games)
    games.forEach((game) => {
    //all games
      let div = document.createElement('div')
      div.classList.add("column", "is-3")
      div.innerHTML = `
            <div id="${game.id}" onclick="getId(this)" class="card is-clickable">
                <div class="card-image">
                  <figure class="image">
                    <img id="gameImg" src="./img/games/${game.id}.png" alt="Game image">
                  </figure>
                </div>
                <div class="card-content p-1">
                  <div class="content has-text-centered">
                    <h4 id="gameTitle" class="m-1">${game.title}</h4>
                    <h5 id="gameCateg" class="mb-1 is-size-6 has-text-info">                  
                   
                    </h5>
                  </div>
                </div>
                <footer class="card-footer">
                  <p class="card-footer-item">
                    <span id="gamePrice">
                      $ ${game.price} COP
                    </span>
                  </p>
                </footer>
              </div>
           </div>`;
      cardFragment.appendChild(div)
    })
    cardsContainer.appendChild(cardFragment)
    console.log('all games creator went through')
  }
  
document.addEventListener('DOMContentLoaded', showAll)

all.addEventListener('click', () => {
    cardsContainer.innerHTML = ''
    showAll()
})