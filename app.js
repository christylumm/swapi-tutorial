let button = document.querySelector('#button');
let character = document.querySelector('#name');
let film1 = document.querySelector('#film1');
let film2 = document.querySelector('#film2'); 
let film3 = document.querySelector('#film3');
let film4 = document.querySelector('#film4');

let ep3 = 'http://swapi.dev/api/films/6/';
let ep4 = 'http://swapi.dev/api/films/1/';
let ep5 = 'http://swapi.dev/api/films/2/';
let ep6 = 'http://swapi.dev/api/films/3/';

function findLuke() {
  axios.get('http://swapi.dev/api/people/1/').then(function(response) {
    updateLuke(response.data)
  })
}

function updateLuke(data) {
  character.innerText = data.name;

  if (data.films[0] === ep4) {
    film1.innerText = "Episode IV: A New Hope"
  }
  
  if (data.films[1] === ep5) {
    film2.innerText = "Episode V: The Empire Strikes Back"
  }
  
  if (data.films[2] === ep6) {
    film3.innerText = "Episode VI: Return of the Jedi"
  }
  
  if (data.films[3] === ep3) {
    film4.innerText = "Episode III: Revenge of the Sith"
  }
}

button.addEventListener('click', findLuke)