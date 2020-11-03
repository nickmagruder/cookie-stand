
/* Math.floor to remove decimal */

function numGuessingGame(){

    for (var guesses = 0; guesses < 4; guesses++) {
        var guess = parseInt(prompt('Guess my favorite number! It is between 1-100 and you have 4 attempts!'));
    if (guess === 12){
        alert('Wow, you got it! 12 is definitely the best Number.');
        correctGuesses [5] = 1;
        console.log (correctGuesses);
        break;
    }else if (guess !== 12 && guesses === 3) {
        alert('Sorry, you\'re out of guesses. The correct number is 12.');
    }else if (guess !== 12) {
        alert('Sorry, incorrect, please guess again!');
    }

    }


}

numGuessingGame();


function guessingBirds(){

    var birds = ['Flicker', 'Osprey', 'Blue Jay', 'Cardinal', 'Falcon', 'Chickadee'];

    for (var i = 0; i < 6; i++) {
        var birdGuess = prompt('Guess one of my favorite birds! You have 6 attempts.');
    if (birdGuess.toLowerCase() === 'flicker' || birdGuess.toLowerCase() === 'osprey'|| birdGuess.toLowerCase() === 'blue jay'|| birdGuess.toLowerCase() === 'cardinal' || birdGuess.toLowerCase() === 'Falcon'|| birdGuess.toLowerCase() === 'chickadee'){
        alert('Correct! The ' + birdGuess + ' is an awesome birb.');
        correctGuesses [6] = 1;
        console.log (correctGuesses);
        break;
    }else if (birdGuess.toLowerCase() !== 'flicker' && i === 5) {
        alert('Sorry, you\'re out of guesses. My five favorite birds are ' + birds);
    }else if ((birdGuess.toLowerCase() !== 'flicker' || birdGuess.toLowerCase() !== 'osprey'|| birdGuess.toLowerCase() !== 'blue jay'|| birdGuess.toLowerCase() !== 'cardinal' || birdGuess.toLowerCase() !== 'Falcon'|| birdGuess.toLowerCase() !== 'chickadee')) {
        alert('Sorry, incorrect, please guess again!');
    }
    
    }

}

guessingBirds();


/* console.log(randomInput(city1.minCust, city1.maxCust, city1.avgCookie));
console.log(randomInput(city2.minCust, city2.maxCust, city2.avgCookie));
console.log(randomInput(city3.minCust, city3.maxCust, city3.avgCookie));
console.log(randomInput(city4.minCust, city4.maxCust, city4.avgCookie));
console.log(randomInput(city5.minCust, city5.maxCust, city5.avgCookie)); */

/* var city1Output = (randomCookie(city1Input[0], city1Input[1]));
var city2Output = (randomCookie(city2Input[0], city2Input[1]));
var city3Output = (randomCookie(city3Input[0], city3Input[1]));
var city4Output = (randomCookie(city4Input[0], city4Input[1]));
var city5Output = (randomCookie(city5Input[0], city5Input[1])); */

/* console.log(city1Output)
console.log(city2Output)
console.log(city3Output)
console.log(city4Output)
console.log(city5Output) */

var spaceNeedle = {
    filepath: './img/spaceneedle.jpg',
    alt: 'Seattle Sunset',
    title: 'Seattle Sunset',
    render: function(){
    var spaceNeedleParent = document.getElementById('article');
    var h2Element = document.createElement('h2');
    h2Element.textContent = this.title;
    spaceNeedleParent.appendChild(h2Element);
}
}

spaceNeedle.render();
