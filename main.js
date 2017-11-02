var outcome;
alert("Sometimes people come into your life and you know right away that they were meant to be there, to serve some sort of purpose, teach you a lesson, or to help you figure out who you are or who you want to become. You never know who these people may be (possibly your roommate, neighbor, coworker, longlost friend, lover, or even a complete stranger) but when you lock eyes with them, you know at that very moment that they will affect your life in some profound way.");

var beginningScenarios = ["You wake up sad", "You wake up happy", "You wake up wanting to conquer the world", "You wake up rich and famous"];

function randomNumber(range){
  return Math.floor(Math.random() * range);
};

alert(beginningScenarios[randomNumber(beginningScenarios.length)]);

var character = {
  health: 3,
  strength: 0,
  name: prompt("What is your name ?"),
  characterClass: prompt("Who would you be if your day started like this? (Choose from: Amos, Beyonce, Dharma, Dragic)").toLowerCase()
};

if (!character.name) {
    character.name = prompt("I need you name!!!");

    if(!character.name){
      character.name = "Milan"
    }
}

if(character.characterClass === "amos"){
  character.health = 0;
}
if(character.characterClass === "beyonce"){
  character.strength = 8;
}
if(character.characterClass === "dharma"){
  character.health = 100;
  character.strength = 100;
}
if(character.characterClass === "dragic"){
  character.health = 50;
  character.strength = 100;
}


var choice = alert("Hi " + character.name + " you are " + character.characterClass + " for today.");

if (character.strength > 50){
  alert("YOU WIN!!!!!!!");
} else if (character.health > 2 && character.strength > 5) {
  alert("You are a normal! hahah");
}
 else {
  alert("YOU LOSE!!!!!!!");
}
