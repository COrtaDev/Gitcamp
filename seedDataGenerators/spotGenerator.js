
const { getName } = require('./nameGenerator')
const { getCity, getState, getWeather } = require('./locationAPI')
const { getCoordinates } = require('./locationGenerator');

// let location = getCoordinates();
// let { latitude, longitude } = location;
// let url = `https://api.weather.gov/points/${latitude},${longitude}`

console.log(getName());
console.log(getCity());
// console.log(getState());
// console.log(getWeather());
