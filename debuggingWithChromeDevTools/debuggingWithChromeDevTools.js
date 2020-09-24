/*
Debugging
walk through how to solve a specific bug
*/

// Step 1: Reproduce the bug
function onClick() {
  if (inputsAreEmpty()) {
    label.textContent = 'Error: one or both inputs are empty.';
    return;
  }
  updateLabel();
}
function inputsAreEmpty() {
  if (getNumber1() === '' || getNumber2() === '') {
    return true;
  } else {
    return false;
  }
}
function updateLabel() {
  var addend1 = getNumber1();
  var addend2 = getNumber2();
  // var sum = addend1 + addend2;
  var sum = parseInt(addend1) + parseInt(addend2);
  label.textContent = addend1 + ' + ' + addend2 + ' = ' + sum;
}
function getNumber1() {
  return inputs[0].value;
}
function getNumber2() {
  return inputs[1].value;
}
var inputs = document.querySelectorAll('input');
var label = document.querySelector('p');
var button = document.querySelector('button');
button.addEventListener('click', onClick);

// Step 2: Introducing the Sources Panel
// shortcut: cmd + opt + I
// Events Listener Breakpoints
// Mouse Event Category
// check the click box

// Step 3: Step Through the Code
// Step over next function call button - step f9

// Step 4: Set another Breakpoint
// Resume script execution button

// Step 5: Check Variable Values
// Watch
// Add Expression

// Step 6: Apply a Fix
// Save your changes
// Deactivate breakpoints button
// Resume script execution button