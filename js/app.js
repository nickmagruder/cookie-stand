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


/* fillValues1();
fillValues2();
fillValues3();
fillValues4();
fillValues5(); */

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



/* Array Totaling Hint adapted from this tutorial: https://www.tutorialrepublic.com/faq/how-to-find-the-sum-of-an-array-of-numbers-in-javascript.php */


/* console.log(city1Sum)
console.log(city2Sum)
console.log(city3Sum)
console.log(city4Sum)
console.log(city5Sum) */



/* 14 Hours, 6am - 7pm
+ a Total */

/* 6am: 16 cookies */