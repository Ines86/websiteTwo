$(document).ready(function() {
   
// Odometer One
const elOne = document.querySelector('.od1.odometer');

odOne = new Odometer({
  el: elOne,
  auto: false,
  value: 10,
  format: 'd',
  duration: 5000,
  animation: 'count'
});

// Odometer Two
const elTwo = document.querySelector('.od2.odometer');

odTwo = new Odometer({
  el: elTwo,
  value: 10,
  format: 'd',
  duration: 5000,
  animation: 'count'
});

// Odometer Three
const elThree = document.querySelector('.od3.odometer');

odThree = new Odometer({
  el: elThree,
  value: 10,
  format: 'd',
  duration: 5000,
  animation: 'count'
});



// Odometer Four
const elFour = document.querySelector('.od4.odometer');

odFour = new Odometer({
  el: elFour,
  value: 10,
  format: 'd',
  duration: 5000,
  animation: 'count'
});



setTimeout(function(){
    odOne.update(1000);
    odTwo.update(2017);
    odThree.update(1105);
    odFour.update(500);
}, 5000);

});