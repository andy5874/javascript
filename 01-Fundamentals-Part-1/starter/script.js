/*let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('jonas');
console.log(23);

let firstName = 'Jonas';
console.log(firstName);

let javaisfun = true;

console.log(typeof 2);
console.log(typeof 'hello');
console.log(typeof javaisfun);

javaisfun = 'yes'
console.log(typeof javaisfun)



let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 95;
let johnHeight = 1.88;

const markBmi = markWeight / markHeight ** 2
const johnBmi = johnWeight / johnHeight ** 2

let markHigherBMI = (markBmi > johnBmi)

console.log(markHigherBMI)

if (markBmi > johnBmi) {
    console.log(`mark's bmi (${markBmi}) is higher than John's (${johnBmi})`)
} else {
    console.log(`mark's bmi (${markBmi}) is  not higher than John's (${johnBmi})`)
}



const firstName = 'Andy';
const job = 'student';
const birthYear = 1995;
const year = 2022;

const andy = "I'm " + firstName + ', a ' + (year - birthYear) + 'years old ' + job;
console.log(andy)

const andyNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`
console.log(andyNew)

console.log(`hi im andy`)
console.log('string with\n\
multiple \n\
line')
console.log(`string
with
line`)


const age = 15;


if (age >= 18) {
    console.log('andy can start driving')
} else {
    const yearsLeft = 18 - age;
    console.log(`andy is too young to drive wait another ${yearsLeft} years`);
}


const inputYear = '2022';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(String(23), 23);


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));


const age = 18;
if (age === 18) console.log('you became an adult');

const fav = prompt('wahts your fav number');
console.log(fav);

if (fav == 10) {
    console.log('10 is good number')
} else if (fav == 7) {
    console.log('7 is good')
} else {
    console.log('number is not 10 or 7')
}
if (fav !== 10) console.log('why not 10');


const dolphinAve = ((96 + 108 + 89) / 3);
const koalaAve = ((88 + 91 + 110) / 3);

console.log(dolphinAve);
console.log(koalaAve);

if (dolphinAve == koalaAve) {
    console.log('score is same draw');
} else if (dolphinAve > koalaAve) {
    console.log('dolphins won');
} else {
    console.log('koalas win');
}

const dolphinAve = ((97 + 112 + 101) / 3);
const koalaAve = ((109 + 95 + 106) / 3);

console.log(dolphinAve);
console.log(koalaAve);

if (dolphinAve == koalaAve && dolphinAve >= 100 && koalaAve >= 100) {
    console.log('score is same draw');
} else if (dolphinAve > koalaAve && dolphinAve >= 100 && koalaAve >= 100) {
    console.log('dolphins won');
} else if (dolphinAve < koalaAve && dolphinAve >= 100 && koalaAve >= 100) {
    console.log('koalas won');
} else {
    console.log('average scores must be above 10');
}


const day = '1';

switch (day) {
    case '1':
        console.log('day is 1');
        break;
    case '2':
        console.log('day is 2');
        break;
    case '3':
        console.log('day is 3');
}


const age = 17;
age >= 18 ? console.log('i like wine') :
    console.log('i dont like wine');

const age = 19;
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);
*/

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(tip);
console.log(`the bill was ${bill} tip is ${tip} total value is ${bill + tip}`);