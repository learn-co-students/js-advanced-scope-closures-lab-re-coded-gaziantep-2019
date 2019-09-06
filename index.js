function produceDrivingRange(blockRange) {
  
  return function(start,end) {
    let startNumber = start.substring(0,start.indexOf('t'));
    let endNumber   = end.substring(0,end.indexOf('t'));
    let result = endNumber - (startNumber * 1 + blockRange);
    
    if(result < 0) {
      return (`within range by ${-1 * result}`);
    }else {
      return (`${result} blocks out of range`);
    }
  }
}

function produceTipCalculator(tipPercentage) {
  return function(price) {
    return price * tipPercentage;
  }
}

function createDriver() {
  let driverId = 0;
  return class Driver {
    constructor(name) {
      this.name = name;
      this.id = ++ driverId;
    }
  }
}