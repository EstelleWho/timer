// This is for when using Node.js, it will skip "node" and "name of file" to access the elements of the array
const args = process.argv.slice(2);

// checking if the num is positive
function goodNumber(value) {
  return !isNaN(value) && Number(value) >= 0;
}

// filter non numb and neg num
const alarms = args.filter(goodNumber).map(Number);

// this is the beeping function
function timedBeep(seconds) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, seconds * 1000);
}

// this will tell the function to beep
alarms.forEach(alarm => {
  if (!isNaN(alarm)) {
    timedBeep(alarm);
  }
});

// Implement an alarm clock/timer which will beep after a specified amount of time has passed. 
// The user can specify an unlimited number of alarms using command line arguments.

  // EDGE CASES - Situations in which it would not beep:
// 1. No numbers are provided. It should just not beep at all and end immediately since no beeps should get scheduled.


// 2. An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.


// 3. An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.



//process.stdout.write('\x07'); // this will make a beep sound