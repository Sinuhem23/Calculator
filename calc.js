// Calculator using Functions! ////////////////////////////////////////////////////////
var prompt = require('prompt-sync')();
var user_num1 = Number(prompt('Enter first number: '));

var case_selection = Number(
  prompt(
    'Select between 1-6. 1:Add, 2:Subtract, 3:Multiply, 4:Divide, 5:Average, 6:Exit : '
  )
);

if (case_selection != 6) {
  if (case_selection < 6) {
    var user_num2 = Number(prompt('Enter second number: '));
  }
}

if (case_selection == 6) {
  return console.log('You have now exited');
}

function calc(num1, num2) {
  switch (case_selection) {
    case 1:
      return num1 + num2;
    case 2:
      return num1 - num2;
    case 3:
      return num1 * num2;
    case 4:
      return num1 / num2;
    case 5:
      return (num1 + num2) / 2;
    case 6:
      break;
    default:
      return 'Invalid Choice';
  }
}
var result = calc(user_num1, user_num2);
console.log(result);
