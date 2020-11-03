'use strict';

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



