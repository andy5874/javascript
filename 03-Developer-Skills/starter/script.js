// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max);
  console.log(min);
};
calcTempAmplitude([3, 7, 4, 'error']);

const array1 = ['a', 'b', 'c'];
const array2 = [1, 2, 3];
const array3 = array1.concat(array2);
console.log(array3);

const measureKel = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    value: Number(prompt('degrees celcius')),
  };
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKel());

/*
Given an array of forecasted maximum temperatures, the thermometer displays a 
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a 
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up 
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
*/

const data1 = [17, 21, 23];
const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `... ${arr[i]}ºC in ${i + 1} days `;
  }
  console.log(str + '...');
};
printForecast(data1);
