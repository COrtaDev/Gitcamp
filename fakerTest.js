const faker = require('faker');

const { commerce, random, address } = faker;

let color, city, streetName, streetNames, localeIdx, geoIdx;
const locale = [
    "Camp",
    "Campground",
    "Campgrounds",
    "Basecamp",
    "Retreat",
    "Cabin",
    "Cabins",
    "Acres",
    "Farm",
    "Farms",
    "Farmsted",
    "Hideout",
    "Hideaway",
    "Ranch",
    "Lodge",
    "Barn",
];
const geo = [
    "Wood",
    "Woods",
    "Springs",
    "Forest",
    "River",
    "Valley",
    "River",
    "Meadow",
    "Island",
    "Creek",
    "Overlook",
    "Mountain",
    "Stream",
    "Brook",
    "Bay",
    "Pond",
];
const roads = [
    'Road',
    'Avenue',
    'Square',
    'Freeway',
    'Courts',
    'Court',
    'Motorway',
    'Turnpike',
    'Overpass',
    'Plaza',
    'Highway',
    "Expressway",
    "Skyway",
    "Tunnel",
    "Parkways",
    "Route",
    "Trafficway",
    "Causeway",
];
const randomSpotName = (num) => {
    cityPrefix = address.cityPrefix();
    city = address.city();
    localeIdx = random.number({ 'max': locale.length - 1 });
    geoIdx = random.number({ 'max': geo.length - 1 });
    if (num % 2 === 0) {
        return `${getColor()} ${geo[geoIdx]} ${locale[localeIdx]} of ${getStreetName()}`;
    }
    else if (num % 7 === 0) {
        return `${getColor()} ${geo[geoIdx]} ${locale[localeIdx]} at ${city}`;
    }
    else if (num % 5 === 0) {
        return `${locale[localeIdx]} at ${getStreetName()} ${geo[geoIdx]}`;
    }
    else if (num % 9 === 0) {
        return `${getStreetName()} ${cityPrefix} ${geo[geoIdx]} ${locale[localeIdx]}`;
    }
    else {
        return `${getStreetName()} ${geo[geoIdx]} ${locale[localeIdx]}`;
    }
}
const getColor = () => {
    color = commerce.color();
    colorwWords = color.split(' ');
    if (colorwWords.length > 1) return (colorwWords[0].charAt(0).toUpperCase() + colorwWords[0].slice(1)) + (colorwWords[1].charAt(0).toUpperCase() + colorwWords[1].slice(1));
    return colorwWords[0].charAt(0).toUpperCase() + colorwWords[0].slice(1)
};
const getStreetName = () => {
    streetName = address.streetName();
    streetNames = streetName.split(' ')
    if (roads.includes(streetNames[1])) { return streetNames[0] }
    else { return streetName }
}
const printNamesThisManyTimes = (num) => {
    for (let i = 0; i < num; i++) {
        console.log(randomSpotName(random.number({ min: 1, max: 10 })));
    }
}
printNamesThisManyTimes(50);
