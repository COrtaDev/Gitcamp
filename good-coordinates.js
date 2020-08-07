{
    "latitude": "46.9209",
        "longitude": "-68.8256",
            "City": "Eagle Lake",
                "State": "ME",
                    "rawData": {
        "@context": [
            "https://geojson.org/geojson-ld/geojson-context.jsonld", {
                "@version": "1.1",
                "wx": "https://api.weather.gov/ontology#",
                "s": "https://schema.org/",
                "geo": "http://www.opengis.net/ont/geosparql#",
                "unit": "http://codes.wmo.int/common/unit/",
                "@vocab": "https://api.weather.gov/ontology#",
                "geometry": {
                    "@id": "s:GeoCoordinates",
                    "@type": "geo:wktLiteral"
                },
                "city": "s:addressLocality",
                "state": "s:addressRegion",
                "distance": {
                    "@id": "s:Distance",
                    "@type": "s:QuantitativeValue"
                },
                "bearing": {
                    "@type": "s:QuantitativeValue"
                }, "value": {
                    "@id": "s:value"
                },
                "unitCode": {
                    "@id": "s:unitCode",
                    "@type": "@id"
                },
                "forecastOffice": {
                    "@type": "@id"
                },
                "forecastGridData": {
                    "@type": "@id"
                },
                "publicZone": {
                    "@type": "@id"
                },
                "county": {
                    "@type": "@id"
                }
            }],
            "id": "https://api.weather.gov/points/46.9209,-68.8256",
                "type": "Feature",
                    "geometry": {
            "type": "Point",
                "coordinates": [-68.8256, 46.9209]
        }, "properties": {
            "@id": "https://api.weather.gov/points/46.9209,-68.8256",
                "@type": "wx:Point",
                    "cwa": "CAR",
                        "forecastOffice": "https://api.weather.gov/offices/CAR",
                            "gridId": "CAR",
                                "gridX": 51,
                                    "gridY": 160,
                                        "forecast": "https://api.weather.gov/gridpoints/CAR/51,160/forecast",
                                            "forecastHourly": "https://api.weather.gov/gridpoints/CAR/51,160/forecast/hourly",
                                                "forecastGridData": "https://api.weather.gov/gridpoints/CAR/51,160",
                                                    "observationStations": "https://api.weather.gov/gridpoints/CAR/51,160/stations",
                                                        "relativeLocation": {
                "type": "Feature",
                    "geometry": {
                    "type": "Point",
                        "coordinates": [-68.589246, 47.034475]
                },
                "properties": {
                    "city": "Eagle Lake",
                        "state": "ME",
                            "distance": {
                        "value": 21932.26036731,
                            "unitCode": "unit:m"
                    },
                    "bearing": {
                        "value": 234,
                            "unitCode": "unit:degrees_true"
                    }
                }
            },
            "forecastZone": "https://api.weather.gov/zones/forecast/MEZ001",
                "county": "https://api.weather.gov/zones/county/MEC003",
                    "fireWeatherZone": "https://api.weather.gov/zones/fire/MEZ001",
                        "timeZone": "America/New_York",
                            "radarStation": "KCBW"
        }
    }
}
