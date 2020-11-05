
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










// Tuesday Demo code:







//GOAL: generate a list of cookie sales to the DOM
    // SEattle
    // # of cookies per day sold

//Object literal for each store
    // Need an array of cookies sold each hour - ultimate goal
    // render method to render that array of cookeis sold each hour to the DOM

    // an array of custoemrs each hour
    // Genereate the array of customers per hour
        //using Math.random, min and max customers

        var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

        var seattleStore = {
            city: 'Seattle',
            minCustomers: 23,
            maxCustomers: 65,
            averageCookieSale: 6.3,
            cookiesForTheDay: 0,
        
            customersEachHour: [],
            cookiesSoldEachHour: [],
        
                // generate the customers each hour
            generateCustomersEachHour: function(){
                for(var i=0; i<hours.length; i++){
                    var randomCustomerNumber = generateRandomNumber(this.minCustomers)
                    this.customersEachHour.push(randomCustomerNumber);
                }
            }
                //generate the cookies sold each hour
                // loop over my customersEachHour and multiply that number by my avg cookie sale
            generateCookiesSoldEachHour: function(){
                for(var i=0; i < this.customersEachHour.length; i++){
                    var cookieTotalForTheHour = this.customersEachHour[i] * this.averageCookieSale
                    this.cookiesSoldEachHour.push(cookieTotalForTheHour);
                // total for the day
                this.cookiesFOrTheDay += cookiesSoldEachHour;
        
                }
            }
                //render the cookiesSOldEach Hour to the DOM
            render: function(){
        
            }
        }
        
        //helper function
        function generateRandomNumber(min, max){
        return Math.floor()
        
        minCustomers= Math.ceil(minCustomers);
        maxCustomers = Math.floor(maxCustomers);
        
        var randomCustomerNumber = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
        }
        
        seattleStore.generateCustomersEachHour();
        seattleStore.generateCookiesSoldEachHour()
        
        
        
        
        
        
        // TABLES
        
        
        var tbodyParent = document.getElementById('table')
        
        var trElement = document.createElement('tr');
        var thElement = document.createElement('th');
        
        thElement.textContent = 'Name';
        
        tbodyParent.appendChild(trElement);
        trElement.appendChild(thElement);
        
        thElement = document.createElement('th');
        
        thElement.textContent = 'Type';
        
        
        
        var allAnimals = [];
        
        function Animal(name, type, color, age){
            this.name = name;
            this.type = type;
            this.type = color;
            this.age = age;
        
            allAnimals.push(this);
        }
        
        Animal.prototype.render = function(){
            //make a tr
            var trRowTwo = ducment.createElement('tr');
            //append tr to tbodyparent
            tbodyParent.appendChild(trRowTwo);
        
            //for name, type, color, age - 
            // make a td
            var tdRowTwo = document.createElement('td');
            // fill it with content
            tdRowTwo.textContent = this.name;
            //append to tr
            trRowTwo.appendChild(tdRowTwo);
        
        }
        
        var spot = new Animal('spot', 'cat', 'orange', 2);
        var fluffy = new Animal('fluffy', 'cat', 'brown', 3);
        var fred = new Animal('fred', 'cat', 'tux', 3);
        
        
        for(var i=0; i<allAnimals.length; i++){
            allAnimals[i]
        }



        // OLD APP

        var minCookies
var maxCookies
var cookieArray = [minCookies, maxCookies]
var hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']



var city1Sum
var city2Sum
var city3Sum
var city4Sum
var city5Sum

var city1 = {
    cityname: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgCookie: 6.3,
}

var city2 = {
    cityname: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgCookie: 1.2,
}

var city3 = {
    cityname: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgCookie: 3.7,
}

var city4 = {
    cityname: 'Paris',
    minCust: 20,
    maxCust: 38,
    avgCookie: 2.3,
}

var city5 = {
    cityname: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgCookie: 4.6,
}

function randomInput(a, b, c) {
    var minCookies = a * c;
    var maxCookies = b * c;
    return [minCookies, maxCookies];
}

var city1Input = (randomInput(city1.minCust, city1.maxCust, city1.avgCookie));
var city2Input = (randomInput(city2.minCust, city2.maxCust, city2.avgCookie));
var city3Input = (randomInput(city3.minCust, city3.maxCust, city3.avgCookie));
var city4Input = (randomInput(city4.minCust, city4.maxCust, city4.avgCookie));
var city5Input = (randomInput(city5.minCust, city5.maxCust, city5.avgCookie));

/* Random number generator adapted from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
function randomCookie(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

var city1Values = []
var city2Values = []
var city3Values = []
var city4Values = []
var city5Values = []

function fillValues1() {
    for (var i = 0; i < 14; i++) {
        var newCookieNumber = randomCookie(city1Input[0], city1Input[1])
        city1Values.push(newCookieNumber);
    }
}

function fillValues2() {
    for (var i = 0; i < 14; i++) {
        var newCookieNumber = randomCookie(city2Input[0], city2Input[1])
        city2Values.push(newCookieNumber);
    }
}

function fillValues3() {
    for (var i = 0; i < 14; i++) {
        var newCookieNumber = randomCookie(city3Input[0], city3Input[1])
        city3Values.push(newCookieNumber);
    }
}

function fillValues4() {
    for (var i = 0; i < 14; i++) {
        var newCookieNumber = randomCookie(city4Input[0], city4Input[1])
        city4Values.push(newCookieNumber);
    }
}

function fillValues5() {
    for (var i = 0; i < 14; i++) {
        var newCookieNumber = randomCookie(city5Input[0], city5Input[1])
        city5Values.push(newCookieNumber);
    }
}

function insert1() {
    fillValues1();
    var insertParent = document.getElementById('cookiedata');
    var insertLi = document.createElement('p');
    insertLi.textContent = city1.cityname;
    insertParent.appendChild(insertLi);
    for (var i = 0; i < hoursArray.length; i++) {
        var insertLi = document.createElement('li');
        insertLi.textContent = hoursArray[i] + ': ' + city1Values[i] + ' cookies';
        insertParent.appendChild(insertLi);
    }
    var city1Sum = city1Values.reduce(function (a, b) {
        return a + b;
    }, 0);
    var insertParent = document.getElementById('cookiedata');
    var insertLi = document.createElement('li');
    insertLi.textContent = 'Total: ' + city1Sum;
    insertParent.appendChild(insertLi);
}

function insert2() {
    fillValues2();
    var insertParent = document.getElementById('cookiedata');
    var insertLi = document.createElement('p');
    insertLi.textContent = city2.cityname;
    insertParent.appendChild(insertLi);
    for (var i = 0; i < hoursArray.length; i++) {
        var insertLi = document.createElement('li');
        insertLi.textContent = hoursArray[i] + ': ' + city1Values[i] + ' cookies';
        insertParent.appendChild(insertLi);
    }
    var city2Sum = city2Values.reduce(function (a, b) {
        return a + b;
    }, 0);
    var insertParent = document.getElementById('cookiedata');
    var insertLi = document.createElement('li');
    insertLi.textContent = 'Total: ' + city2Sum;
    insertParent.appendChild(insertLi);
}

function insert3() {
    fillValues3();
    var insertParent = document.getElementById('cookiedata');
    var insertLi = document.createElement('p');
    insertLi.textContent = city3.cityname;
    insertParent.appendChild(insertLi);
    for (var i = 0; i < hoursArray.length; i++) {
        var insertLi = document.createElement('li');
        insertLi.textContent = hoursArray[i] + ': ' + city1Values[i] + ' cookies';
        insertParent.appendChild(insertLi);
    }
    var city3Sum = city3Values.reduce(function (a, b) {
        return a + b;
    }, 0);
    var insertParent = document.getElementById('cookiedata');
    var insertLi = document.createElement('li');
    insertLi.textContent = 'Total: ' + city3Sum;
    insertParent.appendChild(insertLi);
}

function insert4() {
    fillValues4();
    var insertParent = document.getElementById('cookiedata');
    var insertLi = document.createElement('p');
    insertLi.textContent = city4.cityname;
    insertParent.appendChild(insertLi);
    for (var i = 0; i < hoursArray.length; i++) {
        var insertLi = document.createElement('li');
        insertLi.textContent = hoursArray[i] + ': ' + city1Values[i] + ' cookies';
        insertParent.appendChild(insertLi);
    }
    var city4Sum = city4Values.reduce(function (a, b) {
        return a + b;
    }, 0);
    var insertParent = document.getElementById('cookiedata');
    var insertLi = document.createElement('li');
    insertLi.textContent = 'Total: ' + city4Sum;
    insertParent.appendChild(insertLi);
}

function insert5() {
    fillValues5();
    var insertParent = document.getElementById('cookiedata');
    var insertLi = document.createElement('p');
    insertLi.textContent = city5.cityname;
    insertParent.appendChild(insertLi);
    for (var i = 0; i < hoursArray.length; i++) {
        var insertLi = document.createElement('li');
        insertLi.textContent = hoursArray[i] + ': ' + city1Values[i] + ' cookies';
        insertParent.appendChild(insertLi);
    }
    var city5Sum = city5Values.reduce(function (a, b) {
        return a + b;
    }, 0);
    var insertParent = document.getElementById('cookiedata');
    var insertLi = document.createElement('li');
    insertLi.textContent = 'Total: ' + city5Sum;
    insertParent.appendChild(insertLi);
}

insert1();
insert2();
insert3();
insert4();
insert5();


var city1Sum = city1Values.reduce(function (a, b) {
    return a + b;
}, 0);

var city2Sum = city2Values.reduce(function (a, b) {
    return a + b;
}, 0);

var city3Sum = city3Values.reduce(function (a, b) {
    return a + b;
}, 0);

var city4Sum = city4Values.reduce(function (a, b) {
    return a + b;
}, 0);

var city5Sum = city5Values.reduce(function (a, b) {
    return a + b;
}, 0);


/* Array Totaling Hint adapted from this tutorial: https://www.tutorialrepublic.com/faq/how-to-find-the-sum-of-an-array-of-numbers-in-javascript.php */


/* console.log(city1Sum)
console.log(city2Sum)
console.log(city3Sum)
console.log(city4Sum)
console.log(city5Sum) */



/* 14 Hours, 6am - 7pm
+ a Total */

/* 6am: 16 cookies */

function generateHeaderRow() {
    var insertParent = document.getElementById('cookiedata');
    var trElement = document.createElement('tr');
    insertParent.appendChild(trElement);
    var thElement = document.createElement('th');
    thElement.textContent = 'City';
    trElement.appendChild(thElement);
    for (var i = 0; i < hoursArray.length; i++) {
        var insertTh = document.createElement('th');
        thElement.textContent = hoursArray[i];
        trElement.appendChild(thElement);
    }
}

generateHeaderRow()


    // get parent element
    // make a tr
    // append to the parent
    // make a th element
    // fill it with content
    // append to the tr


    function generateFooterRow() {

        var totalOfAllTotals = 0;
        var insertParent = document.getElementById('cookiedata');
        var trElememt = document.createElement('tr');
        parent.appendChild(trElement);

        for (var i = 0; i < hoursArray.length; i++){
            var hourlyTotal = 0;

            for(var j=0; j<allStores.length; j++){
                hourlyTotal += allStores[j].cookiesSoldEachHour[i];
                totalOfAllTotals += allStores[j].cookiesSoldEachHour[i];

            }

        }
    }
 
