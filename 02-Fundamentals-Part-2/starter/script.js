/*
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('i can drive');


function logger() {
    console.log('myname is andy ');
}

logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


function calcAge1(birthYear) {
    return 2022 - birthYear;
}
const age1 = calcAge1(1995);
console.log(age1);

const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}
const age2 = calcAge2(1992);
console.log(age2);


const calcAge3 = birthYear => 2038 - birthYear;
const age3 = calcAge3(1995);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1995, 'andy'));


function cutFruit(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruit(apples);
    const orangePieces = cutFruit(oranges);

    console.log(apples, oranges);
    const juice = `juice with ${applePieces} apples and ${orangePieces} oranges`;
    return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
    return 2022 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years`;
    } else {
        return `${firstName}  already retired`;

    }

}
console.log(yearsUntilRetirement(1995, 'andy'));
console.log(yearsUntilRetirement(1930, 'sue'));


const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphin = calcAverage(85, 54, 41);
const avgKoala = calcAverage(23, 34, 27);

function checkWinner(avgDolphin, avgKoala) {
    if (avgDolphin >= avgKoala * 2) {
        return `dolphins win with ${avgDolphin} points vs ${avgKoala} points for koala`;
    } else if (avgKoala >= avgDolphin * 2) {
        return `koalas win with ${avgKoala} points vs ${avgDolphin} points for dolphins`;
    } else {
        return `no winners`;
    }

}
console.log(checkWinner(avgDolphin, avgKoala));


//more common to use square brackets
const friends = ['michael', 'steven', 'andy'];
console.log(friends);

const year = new Array(1991, 1992, 1993, 1994, 1995);
console.log(years);


console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[1] = 'james';
console.log(friends);

const calcAge = function (birthYear) {
    return 2022 - birthYear;
}

const years = [1995, 1992, 1990, 1998];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[3]);

console.log(age1, age2, age3, age4);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[years.length - 1])]
console.log(ages);


//add elemnt
const friends = ['michael', 'steven', 'andy'];
const newLength = friends.push('sue'); //adds at the end
console.log(friends);
console.log(newLength);

friends.unshift('mike');// adds at front
console.log(friends);

//remove element
friends.pop(); // removes last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();// removes first element
console.log(friends);

console.log(friends.indexOf('michael'));

console.log(friends.includes('steven'));
console.log(friends.includes('bob'));

if (friends.includes('steven')) {
    console.log('you have a friend called steven');
}

function calcTip(bill) {

    // return bill >= 50 && bill <= 300 ? bill*0.15: bill *0.2
    if (bill >= 50 && bill <= 300) {
        const tip = bill * 0.15;
        return tip;
    } else {
        const tip = bill * 0.2
        return tip;
    }
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(bills);
console.log(tips);
console.log(total);


//object
const andy = {
    firstName: 'andy',
    lastName: 'kim',
    age: 2022 - 1995,
    job: 'student',
    friends: ['mike', 'sue', 'steven']
}
console.log(andy);
console.log(andy.firstName);
console.log(andy.friends);
console.log(andy['lastName']);

const nameKey = 'Name';
console.log(andy['first' + nameKey]);
console.log(andy['last' + nameKey]);

const andyInfo = prompt('what do u want to know firstname, lastname, age, job, friends');

andy.location = 'perth';
andy['height'] = 175;
if (andy[andyInfo]) {
    console.log(andy[andyInfo]);
} else {
    console.log('wrong ');
}

console.log(`${andy.firstName} has ${andy.friends.length} friends and his best friend is ${andy.friends[2]}`);


const andy = {
    firstName: 'andy',
    lastName: 'kim',
    birthYear: 1995,
    job: 'student',
    friends: ['mike', 'sue', 'steven'],
    hasLicense: true,

    //calcAge: function () {
    //    console.log(this);
    //    return 2022 - this.birthYear;
    //}
    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.age} year old ${this.job} and he has ${this.hasLicense ? 'a' : 'no'} driver license`
    };
}
console.log(andy.calcAge());
console.log(andy.age);
console.log(andy.getSummary());


const mark = {
    fullName: 'mark miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2
        return this.bmi;
    }
}
const john = {
    fullName: 'john smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();

// easier if done with if else statement..
console.log(`${mark.bmi > john.bmi ? 'mark' : 'john'} has higher bmi (${mark.bmi > john.bmi ? mark.bmi : john.bmi}) than ${mark.bmi > john.bmi ? 'john' : 'mark'}(${mark.bmi > john.bmi ? john.bmi : mark.bmi})`);


for (let rep = 1; rep <= 10; rep++) {
    console.log(`lift ${rep} times`);
}


const andy = [
    'andy',
    'kim',
    2022 - 1995,
    'student',
    ['mike', 'peter', 'steve'],
    true

];
const types = [];

for (let i = 0; i < andy.length; i++) {
    console.log(andy[i], typeof andy[i]);
    //add things to array
    //types[i] = typeof andy[i];

    types.push(typeof andy[i])
}
console.log(types);

const years = [1990, 1992, 1996, 2002];
const ages = [];

for (let i = 0; i < years.length; i++) {

    ages.push(2022 - years[i])
}
console.log(ages);

//continue and break
for (let i = 0; i < andy.length; i++) {
    if (typeof andy[i] !== 'string') continue;

    console.log(andy[i], typeof andy[i]);
}
for (let i = 0; i < andy.length; i++) {
    if (typeof andy[i] == 'number') break;

    console.log(andy[i], typeof andy[i]);
}


const andy = [
    'andy',
    'kim',
    2022 - 1995,
    'student',
    ['mike', 'peter', 'steve'],
    true
];

for (let i = andy.length - 1; i >= 0; i--) {
    console.log(i, andy[i]);
}

for (let exercise = 1; exercise <= 4; exercise++) {
    console.log(`starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`exercise ${exercise} : lifting weight ${rep}`);
    }
}


for (let rep = 1; rep <= 10; rep++) {
    console.log(`lift ${rep} times`);
}
let rep = 1;
while (rep <= 10) {
    console.log(`lifting ${rep}`);
    rep++;
}


let dice = Math.trunc(Math.random() * 6) + 1
console.log(dice);

while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('loop is ending');
}
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    // return bill >= 50 && bill <= 300 ? bill*0.15: bill *0.2
    if (bills[i] >= 50 && bills[i] <= 300) {
        const tip = bills[i] * 0.15;
        tips.push(tip)
        const total = bills[i] + tips[i];
        totals.push(total)

    } else {
        const tip = bills[i] * 0.2
        tips.push(tip)
        const total = bills[i] + tips[i];
        totals.push(total)

    }
}

console.log(tips, totals);

function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + totals[i];
    }
    return sum / arr.length;
}
console.log(totals);
console.log(calcAverage(totals));