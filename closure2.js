var countdownGenerator = function (x) {
  var count = x;
  return function() {
    if (x > 0){
    return ('T-minus' + x-- + '...');
    }
    else if (x === 0){
      x--
      return ('Blast Off!');
    }
    else if (x < 0){
      x--
    return ("Rockets already gone, bub!");
    }
  }
  /* your code here */
};

var countdown = countdownGenerator(3);
console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 2...
console.log(countdown()); // T-minus 1...
console.log(countdown()); // Blast Off!
console.log(countdown()); // Rockets already gone, bub!
console.log(countdown()); // Rockets already gone, bub!
