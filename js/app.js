var hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

var cityData = [];

var insertParent = document.getElementById('cookiedata');

function randomizer(min, max, avg) {
    var randomArray = [];
    for (var i = 0; i < 14; i++) {
        var customersPerHour = Math.floor(Math.random() * (max - min) + min);
        randomArray.push(Math.round(customersPerHour * avg));
    }
    return randomArray
}

/* console.log(randomizer(23, 65, 6.3)); */

function Allcitydata(cityname, minCust, maxCust, avgCookie,) {
    this.cityname = cityname;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookie = avgCookie;
    this.randomHrCookies = randomizer(minCust, maxCust, avgCookie);

    cityData.push(this);
}

var seattle = new Allcitydata('Seattle', 23, 65, 6.3);
var tokyo = new Allcitydata('Tokyo', 3, 24, 1.2);
var dubai = new Allcitydata('Dubai', 11, 38, 3.7);
var paris = new Allcitydata('Paris', 20, 38, 2.3);
var lima = new Allcitydata('Lima', 2, 16, 4.6);

/* console.log(cityData); */


Allcitydata.prototype.insert = function () {
    var insertTr = document.createElement('tr');
    var insertTh = document.createElement('th');
    insertTh.textContent = this.cityname;
    insertTr.appendChild(insertTh);
    for (var i = 0; i < hoursArray.length; i++) {
        var insertTd = document.createElement('td');
        insertTd.textContent = this.randomHrCookies[i];
        insertTr.appendChild(insertTd);
    }
    insertParent.appendChild(insertTr);
}

seattle.insert();
tokyo.insert();
dubai.insert();
paris.insert();
lima.insert();



    // Sum:
/*     var city1Sum = city1Values.reduce(function (a, b) {
        return a + b;
    }, 0);
    var insertParent = document.getElementById('cookiedata');
    var insertLi = document.createElement('li');
    insertLi.textContent = 'Total: ' + city1Sum;
    insertParent.appendChild(insertLi);
} */















