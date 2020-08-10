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
{"latitude":"41.4500","longitude":"-121.4242","City":"Lookout","State":"CA","rawData":{"@context":["https://geojson.org/geojson-ld/geojson-context.jsonld",{"@version":"1.1","wx":"https://api.weather.gov/ontology#","s":"https://schema.org/","geo":"http://www.opengis.net/ont/geosparql#","unit":"http://codes.wmo.int/common/unit/","@vocab":"https://api.weather.gov/ontology#","geometry":{"@id":"s:GeoCoordinates","@type":"geo:wktLiteral"},"city":"s:addressLocality","state":"s:addressRegion","distance":{"@id":"s:Distance","@type":"s:QuantitativeValue"},"bearing":{"@type":"s:QuantitativeValue"},"value":{"@id":"s:value"},"unitCode":{"@id":"s:unitCode","@type":"@id"},"forecastOffice":{"@type":"@id"},"forecastGridData":{"@type":"@id"},"publicZone":{"@type":"@id"},"county":{"@type":"@id"}}],"id":"https://api.weather.gov/points/41.45,-121.4242","type":"Feature","geometry":{"type":"Point","coordinates":[-121.4242,41.45]},"properties":{"@id":"https://api.weather.gov/points/41.45,-121.4242","@type":"wx:Point","cwa":"MFR","forecastOffice":"https://api.weather.gov/offices/MFR","gridId":"MFR","gridX":143,"gridY":26,"forecast":"https://api.weather.gov/gridpoints/MFR/143,26/forecast","forecastHourly":"https://api.weather.gov/gridpoints/MFR/143,26/forecast/hourly","forecastGridData":"https://api.weather.gov/gridpoints/MFR/143,26","observationStations":"https://api.weather.gov/gridpoints/MFR/143,26/stations","relativeLocation":{"type":"Feature","geometry":{"type":"Point","coordinates":[-121.15296,41.210401]},"properties":{"city":"Lookout","state":"CA","distance":{"value":34967.693822619,"unitCode":"unit:m"},"bearing":{"value":319,"unitCode":"unit:degrees_true"}}},"forecastZone":"https://api.weather.gov/zones/forecast/CAZ085","county":"https://api.weather.gov/zones/county/CAC049","fireWeatherZone":"https://api.weather.gov/zones/fire/CAZ285","timeZone":"America/Los_Angeles","radarStation":"KMAX"}}}{"latitude":"33.0366","longitude":"-108.9827","City":"York","State":"AZ","rawData":{"@context":["https://geojson.org/geojson-ld/geojson-context.jsonld",{"@version":"1.1","wx":"https://api.weather.gov/ontology#","s":"https://schema.org/","geo":"http://www.opengis.net/ont/geosparql#","unit":"http://codes.wmo.int/common/unit/","@vocab":"https://api.weather.gov/ontology#","geometry":{"@id":"s:GeoCoordinates","@type":"geo:wktLiteral"},"city":"s:addressLocality","state":"s:addressRegion","distance":{"@id":"s:Distance","@type":"s:QuantitativeValue"},"bearing":{"@type":"s:QuantitativeValue"},"value":{"@id":"s:value"},"unitCode":{"@id":"s:unitCode","@type":"@id"},"forecastOffice":{"@type":"@id"},"forecastGridData":{"@type":"@id"},"publicZone":{"@type":"@id"},"county":{"@type":"@id"}}],"id":"https://api.weather.gov/points/33.0366,-108.9827","type":"Feature","geometry":{"type":"Point","coordinates":[-108.9827,33.0366]},"properties":{"@id":"https://api.weather.gov/points/33.0366,-108.9827","@type":"wx:Point","cwa":"EPZ","forecastOffice":"https://api.weather.gov/offices/EPZ","gridId":"EPZ","gridX":11,"gridY":120,"forecast":"https://api.weather.gov/gridpoints/EPZ/11,120/forecast","forecastHourly":"https://api.weather.gov/gridpoints/EPZ/11,120/forecast/hourly","forecastGridData":"https://api.weather.gov/gridpoints/EPZ/11,120","observationStations":"https://api.weather.gov/gridpoints/EPZ/11,120/stations","relativeLocation":{"type":"Feature","geometry":{"type":"Point","coordinates":[-109.19605,32.917425]},"properties":{"city":"York","state":"AZ","distance":{"value":23909.632141899,"unitCode":"unit:m"},"bearing":{"value":56,"unitCode":"unit:degrees_true"}}},"forecastZone":"https://api.weather.gov/zones/forecast/NMZ402","county":"https://api.weather.gov/zones/county/NMC017","fireWeatherZone":"https://api.weather.gov/zones/fire/NMZ110","timeZone":"America/Denver","radarStation":"KEMX"}}}