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
  printMinutes()
  printSeconds()
}



function printMinutes() {
 const numMin = chronometer.computeTwoDigitNumber(chronometer.getMinutes()).
 
  minDecElement.textContent = numMin[0];
  minUniElement.textContent = numMin[1];

 }



function printSeconds() {
  const numSec = chronometer.computeTwoDigitNumber(chronometer.getSeconds()).
 
  secDecElement.textContent = numSec[0];
  secUniElement.textContent = numSec[1];
}

// ==> BONUS
function printMilliseconds() {
  
}

function printSplit() {
  const split = chronometer.split();

  splitsElement.textContent = split;
  
  }

function clearSplits() {

 
}

function setStopBtn() {
  chronometer.stop()

  btnLeftElement.textContent = 'Start' ;
  btnLeftElement.className = 'btn start';
  
}

function setSplitBtn() {
  chronometer.split()
  btnRightElement.textContent = 'Split' ;
btnRightElement.className = 'btn split';
}

function setStartBtn() {
 chronometer.start(printTime)
 
 btnLeftElement.textContent = 'Stop' ;
  btnLeftElement.className = 'btn stop';

 

 }
function setResetBtn() {
chronometer.reset()
btnRightElement.textContent = 'Reset' ;
btnRightElement.className = 'btn reset';


minDecElement.textContent = '0';
minUniElement.textContent = '0';
secDecElement.textContent = '0';
secUniElement.textContent = '0';
milDecElement.textContent = '0';
milUniElement.textContent = '0';
splitsElement.textContent = '0';
// document.querySelector('#clock').innerHTML=`
//       <div id="sphere">
//         <span id="minDec" class="number">0</span>
//         <span id="minUni" class="number">0</span>
//         <span>:</span>
//         <span id="secDec" class="number">0</span>
//         <span id="secUni" class="number">0</span>
//         <div id="milliseconds">
//           <span id="milDec">0</span>
//           <span id="milUni">0</span>
//         </div>
//       </div>
//     `
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
 if (btnLeftElement.textContent.contains("start")) {
  
  setStartBtn()}
 
 setStopBtn()
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
 
});

