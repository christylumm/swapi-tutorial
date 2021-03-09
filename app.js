let button = document.querySelector('#button');
let character = document.querySelector('#character');
let height = document.querySelector('#height');
let mass = document.querySelector('#mass');
let hair_color = document.querySelector('#hair_color');
let eye_color = document.querySelector('#eye_color');
let birth_year = document.querySelector('#birth_year');

function getData() {
  let randomNumber = Math.floor((Math.random() * 82) + 1);

  let apiURL = 'http://swapi.dev/api/people/' + randomNumber;

  axios.get(apiURL).then(function(response) {
    updateInfo(response.data)
  })
}

function updateInfo(data) {
  character.innerText = data.name
  height.innerText = `Height: ${data.height}`
  mass.innerText = `Mass: ${data.mass}`
  hair_color.innerText = `Hair Color: ${data.hair_color}`
  eye_color.innerText = `Eye Color: ${data.eye_color}`
  birth_year.innerText = `Birth Year: ${data.birth_year}`
}

button.addEventListener('click', getData)