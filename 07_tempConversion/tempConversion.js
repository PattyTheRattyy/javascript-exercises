const convertToCelsius = function(fahrenheit) {
  console.log(`Fahrenheit value: ${fahrenheit}`);

  let converted = ((fahrenheit - 32) * (5/9)).toFixed(1);

  console.log(`Converted value ${converted}`);
  return parseFloat(converted);
};

const convertToFahrenheit = function(celsius) {
  console.log(`Celsius value: ${celsius}`);

  let converted = ((celsius * (9/5) + 32)).toFixed(1);

  console.log(`Converted value ${converted}`);
  return parseFloat(converted);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
