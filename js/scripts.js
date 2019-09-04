var litersToGallons = function(number1, number2) {
  return number1 * number2;
};

var number1 = parseInt(prompt("Enter the amount of liters:"));
var number2 = parseFloat(3.785);

alert(litersToGallons(number1, number2));

var cupsToMl = function(number1, number2) {
  return number1 * number2;
};

var number1 = parseInt(prompt("Enter the amount of cups:"));
var number2 = parseInt(250);

alert(cupsToMl(number1, number2));

var ouncesToCups = function(number1, number2)  {
  return number1 / number2;
}

var number1 = parseInt(prompt("Enter the amount of ounces:"));
var number2 = parseInt(8);

alert(ouncesToCups(number1,number2));
