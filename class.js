/**
 * ------- Problem -------
 * Rewrite to class
 * The Clock class (see the sandbox) is written in functional style. Rewrite it in the “class” syntax. 
 * 
  function Clock({ template }) {
  
    let timer;
  
    function render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    this.stop = function() {
      clearInterval(timer);
    };
  
    this.start = function() {
      render();
      timer = setInterval(render, 1000);
    };
  
  }
  
  let clock = new Clock({template: 'h:m:s'});
  clock.start();
 */

class Clock {
  timer = null;

  constructor({template}) { // object destructuring 
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10)  mins = '0' + mins;

    let seconds = date.getSeconds();
    if (seconds < 10)  seconds = '0' + seconds;

    let output = 
      this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', seconds);
    
    console.log(output);
  }

  start() {
    this.render();
    this.timer = setInterval(() => {this.render()}, 1000); // losing 'this' slolution {1. arrow function 2. bind() method}
  }
  stop() {
    clearInterval(timer);
  }
}

let clock = new Clock({template: 'h:m:s'});
clock.start();
