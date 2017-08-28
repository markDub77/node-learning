# Weather App
This app can use your address to give you the weather

### To enter your address:
``node app.js -a THE ADDRESS``

or

``node app-promise.js -a THE ADDRESS``

## geocode
This uses the Google Maps API to retrieve the formatted_address, longitude and latitude.

## weather
This uses the Dark Sky API. We give it the longitude and latitude from geocode and we get back the Temperature and apparentTemperature
