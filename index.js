const api = 'https://rickandmortyapi.com/api/character';
const characters = {};

class Character {
  constructor(data) {
    this.name = data.name;
    this.image = data.image;
    //.....
  }

  render() {
    const el = document.createElement('div');
  }
}

function loadCharacter(id) {
  fetch(`${api}/${id}`)
    .then((res) => res.json())
    .then((json) => updateCharacters(json));
}

function updateCharacters(character) {
  characters[character.id] = character;
  renderCharacter(character.id);
}

function renderCharacter(id) {
  // display the character's data on screen
  const myCharacter = characters[id];
  document.getElementById('name').innerHTML = myCharacter.name;
  document.getElementById('image').src = myCharacter.image;

  const myChar = new Character(data);
  const myel = myChar.render();
  const mydiv = document.getElementById('the place where i put it');
  mydiv.append(myel);
}

function dosomething() {
  // stuff things
  characters = [1, 2, 3];
}

loadCharacter(232);
loadCharacter(233);
