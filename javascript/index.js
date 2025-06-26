const Chronometer = require("./chronometer");

const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
}

function printMinutes() {
 chronometer.getMinutes
  
  // ... your code goes here
}

function printSeconds() {
  chronometer.getSeconds

  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  chronometer.split
  // ... your code goes here
}

function clearSplits() {

  // ... your code goes here
}

function setStopBtn() {
  chronometer.stop
  // ... your code goes here
}

function setSplitBtn() {
  chronometer.split
  // ... your code goes here
}

function setStartBtn() {
 chronometer.start
 }
function setResetBtn() {
chronometer.reset
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
 
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});
