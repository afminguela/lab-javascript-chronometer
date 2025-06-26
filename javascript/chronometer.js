class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    // ... your code goes here
  }

  start(callback) {
    if(this.intervalId !== null)return;
    this.intervalId= setInterval(() => {
      this.currentTime++
      if(typeof callback === "function" ) {
        callback()
      }
    }, 1000);
    // ... your code goes here
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
    // ... your code goes here
  }

  getSeconds() {
     return Math.floor(this.currentTime % 60)
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
return  value.toString().padStart(2,"0")

}

  stop() {
    clearInterval(this.intervalId)
    
    // ... your code goes here
  }

  reset() {
    this.currentTime = 0;
    this.intervalId = null;
    document.querySelector('#clock').innerHTML=`
      <div id="sphere">
        <span id="minDec" class="number">0</span>
        <span id="minUni" class="number">0</span>
        <span>:</span>
        <span id="secDec" class="number">0</span>
        <span id="secUni" class="number">0</span>
        <div id="milliseconds">
          <span id="milDec">0</span>
          <span id="milUni">0</span>
        </div>
      </div>
    `
    // ... your code goes here
  }

  split() {
   const minutes = this.getMinutes();
   const seconds = this.getSeconds();

    const minutesFormat = this.computeTwoDigitNumber(minutes);
    const secondsFormat = this.computeTwoDigitNumber(seconds);

    return `${minutesFormat}:${secondsFormat}`
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
