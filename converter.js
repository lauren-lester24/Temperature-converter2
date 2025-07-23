function convertToCelsius(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

function describeTemperature(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  let description;

  if (celsius < 0) {
    description = "very cold";
  } else if (celsius < 20) {
    description = "cold";
  } else if (celsius < 30) {
    description = "warm";
  } else if (celsius < 40) {
    description = "hot";
  } else if (celsius >= 40) {
    description = "very hot";
  }
  return `${fahrenheit} degrees is equilvalant to ${celsius} degrees celsius which is ${description}!`;
}

console.log(describeTemperature(100));
