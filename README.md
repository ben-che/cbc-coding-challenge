### To get started
1. `git clone` the repo
2. Navigate to the root project directory and `npm install`
3. `npm start` to run the project on `localhost: 3000` - works best on Chrome 5+ ; other browsers might have trouble using the Geolocation API
4. Allow the app to use your location; this is needed to get localized temperature (I use the coordinates in the initial request)

### Screenshots:
Load State:

<img src="https://raw.githubusercontent.com/ben-che/cbc-coding-challenge/master/screenshots/load.png" alt="screenshot of load state" width='700' />

Snowy State:

<img src="https://raw.githubusercontent.com/ben-che/cbc-coding-challenge/master/screenshots/snow.png" alt="screenshot of snow state" width='300' />

Rainy State:

<img src="https://raw.githubusercontent.com/ben-che/cbc-coding-challenge/master/screenshots/rain.png" alt="screenshot of rain state" width='300' />

Sunny State

<img src="https://raw.githubusercontent.com/ben-che/cbc-coding-challenge/master/screenshots/sun.png" alt="screenshot of sunny state" width='300' />

### Additional Features:
- Load state added telling user to allow app to use location
- Now with a prettier UI
- Switch between celsius and farenheit by clicking the underlined C / F
- Background changes between sun / rain / snow; images are free from Unsplash
- Hover animation on the refresh button
