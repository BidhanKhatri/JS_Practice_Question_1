//WAP to convert Celsius to Fahrenheit temperature
//-> formula is (0C * 9)/5 + 32

function celsiusToFahrenheit(celsius) {
  let fehrenheitTemp = 0;

  if (celsius < 0) {
    throw new Error("Celsius cannot be negative");
  }
  if (celsius > 100) {
    return console.log("Celsius cannot be greater than 100");
  }

  fehrenheitTemp = (celsius * 9) / 5 + 32;

  console.log(`${celsius} celsius is equal to ${fehrenheitTemp} fahrenheit`);
}

celsiusToFahrenheit(18);
