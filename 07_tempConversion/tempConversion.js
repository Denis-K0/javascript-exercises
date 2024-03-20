const convertToCelsius = function(fahrenheit) {
  fahrenheit = (fahrenheit - 32) * (5/9);
  return +fahrenheit.toFixed(1);
};

const convertToFahrenheit = function(celsius) {
  celsius = celsius * (9/5) + 32;
  return +celsius.toFixed(1);

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
