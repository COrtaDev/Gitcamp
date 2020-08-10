const fetch = require('node-fetch')
const fs = require('fs')
const write = require('./write')
const { getCoordinates } = require('./locationGenerator');

let location = getCoordinates();
console.log(location)
// let { latitude, longitude } = location;
// let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GEO_API_KEY}`
let url = `https://api.weather.gov/points/${location.latitude},${location.longitude}`
// let weatherURL = 'https://api.weather.gov/gridpoints/BOI/48,101/forecast'
// console.log(url);

const getCity = async () => {
    const res = await fetch(url);
    const data = await res.json();
    const city = await data.properties.relativeLocation.properties.city
    return city;
}
const getState = async () => {
    const res = await fetch(url);
    const data = await res.json();
    const { state } = data.properties.relativeLocation.properties
    return state;
}
const getLocation = async () => {
    const res = await fetch(url);
    const data = await res.json();
    let seedLocation = {
        latitude: location.latitude,
        longitude: location.longitude,
        City: data.properties.relativeLocation.properties.city,
        State: data.properties.relativeLocation.properties.state,
        rawData: data
    }
    // JSON.stringify(seedLocation)
    fs.appendFile('good-coordinates.js', JSON.stringify(seedLocation), function (err) {
        if (err) throw err;
        console.log('Updated!');
    });
    // await write(data);
    // console.log(data);
    console.log(data.properties);
    console.log(data.properties.relativeLocation.properties.city);
    console.log(data.properties.relativeLocation.properties.state);
    // console.log(city, state);
}
const getWeather = async () => {
    const res = await fetch(weatherURL);
    const data = await res.json();
    console.log(data);
}
getLocation();
module.exports = { getCity, getState, getWeather };
