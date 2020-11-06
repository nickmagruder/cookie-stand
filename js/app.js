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
// array totaler adapted from: https://codeburst.io/javascript-arrays-finding-the-minimum-maximum-sum-average-values-f02f1b0ce332
function cityTotaler(array) {
    return array.reduce(function (a, b) {
        return (a + b)
    }, 0);
}

function Allcitydata(cityname, minCust, maxCust, avgCookie,) {
    this.cityname = cityname;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookie = avgCookie;
    this.randomHrCookies = randomizer(minCust, maxCust, avgCookie);
    this.cityTotal = cityTotaler(this.randomHrCookies);

    cityData.push(this);
}

var seattle = new Allcitydata('Seattle', 23, 65, 6.3);
var tokyo = new Allcitydata('Tokyo', 3, 24, 1.2);
var dubai = new Allcitydata('Dubai', 11, 38, 3.7);
var paris = new Allcitydata('Paris', 20, 38, 2.3);
var lima = new Allcitydata('Lima', 2, 16, 4.6);

Allcitydata.prototype.insert = function () {
    var insertTr = document.createElement('tr');
    var insertTh = document.createElement('th');
    var insertTotalTh = document.createElement('th')
    insertTh.textContent = this.cityname;
    insertTr.appendChild(insertTh);
    for (var i = 0; i < hoursArray.length; i++) {
        var insertTd = document.createElement('td');
        insertTd.textContent = this.randomHrCookies[i];
        insertTr.appendChild(insertTd);
    }
    insertParent.appendChild(insertTr);
    insertTotalTh.textContent = this.cityTotal;
    insertTr.appendChild(insertTotalTh);
}

function generateHeaderRow() {
    var insertTr = document.createElement('tr');
    var insertTh = document.createElement('th');
    var insertTotalTh = document.createElement('th')
    insertTh.textContent = 'City';
    insertTr.appendChild(insertTh);
    for (var i = 0; i < hoursArray.length; i++) {
        var insertTd = document.createElement('th');
        insertTd.textContent = hoursArray[i];
        insertTr.appendChild(insertTd);
    }
    insertParent.appendChild(insertTr);
    insertTotalTh.textContent = 'Total';
    insertTr.appendChild(insertTotalTh);
}

function generateFooterRow() {
    var footerTotals = 0;
    var insertParent = document.getElementById('cookiedata');
    var insertTr = document.createElement('tr');
    insertParent.appendChild(insertTr);
    var insertTd = document.createElement('td');
    insertTd.textContent = 'Totals';
    insertTr.appendChild(insertTd);
    for (var i = 0; i < hoursArray.length; i++) {
        var hourTotal = 0;
        for (var x = 0; x < cityData.length; x++) {
          hourTotal += cityData[x].randomHrCookies[i];
          footerTotals += cityData[x].randomHrCookies[i];
        }
        var insertTd = document.createElement('td');
        insertTd.textContent = hourTotal;
        insertTr.appendChild(insertTd);
    }
      var insertTd = document.createElement('td');
      insertTd.textContent = footerTotals;
      insertTr.appendChild(insertTd);
}

generateHeaderRow();

seattle.insert();
tokyo.insert();
dubai.insert();
paris.insert();
lima.insert();

generateFooterRow();
