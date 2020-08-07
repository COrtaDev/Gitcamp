const faker = require('faker');
const { address } = faker;
const { easternRanges, westernRanges, nothernRanges, southernRanges } = require('./locationRanges');

const getLatitude = () => {
    let latitude = address.latitude();
    while ((latitude > 48.893615) || (latitude < 25.453195)) {
        latitude = address.latitude();
    }
    return latitude;
}
const getLongitude = () => {
    let longitude = address.longitude();
    while ((longitude < -124.096897) || (longitude > -68.278134)) {
        longitude = address.longitude();
    }
    return longitude;
}

let lat = getLatitude();
let long = getLongitude();

const getLocation = () => {
    let location;
    if (!validateLatitude(lat) && validateLongitude(long)) {
        lat = getLatitude();
        getLocation();
    } else if (validateLatitude(lat) && !validateLongitude(long)) {
        long = getLongitude();
        getLocation();
    } else {
        location = { latitude: lat, longitude: long };
        // console.log(location);
        return location;
    }
}
const validateLatitude = (latitude) => {
    return (checkNorth(latitude) && checkSouth(latitude));
}
const validateLongitude = (longitude) => {
    return (checkWest(longitude) && checkEast(longitude));
}
const checkWest = (longitude) => {
    for (let i = 0; i < westernRanges.length; i++) {
        if (longitude < westernRanges[i][1]) return false;
    }
    return true;
}
const checkNorth = (latitude) => {
    for (let i = 0; i < nothernRanges.length; i++) {
        if (latitude > nothernRanges[i][0]) return false
    }
    return true
}
const checkEast = (longitude) => {
    for (let i = 0; i < easternRanges.length; i++) {
        if (longitude > easternRanges[i][1]) return false;
    }
    return true;
}
const checkSouth = (latitude) => {
    for (let i = 0; i < southernRanges.length; i++) {
        if (latitude < southernRanges[i][0]) return false
    }
    return true
}
const getCoordinates = () => getLocation();

module.exports = { getCoordinates };
