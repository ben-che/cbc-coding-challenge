### To get started
1. `git clone` the repo
2. Navigate to the root project directory and `npm install`
3. `npm start` to run the project on `localhost: 3000`

### How does the network request work?
Initially, I wanted to use the Geolocation API to get the user coordinates, but due to a combination of browser support,
user permissions and unreliable resolution times, I decided to use the user's IP address instead. This came with a tradeoff;
I originally wanted to host the project online so you wouldn't have to clone the repo, but the majority of free, accurate ip apis are only available through http protocol, and hosting solutions only allow https requests. 

I use the user's ip to get their coordinates, feed that into the weather api through a promise, then convert the XML into JSON and save the weather information that is returned into redux's store. 

Then, when the change propagates to the App component, it will render the weather UI as opposed to the loading UI based on 
whether or not weather information exists within props. I also give the Layout component access to the `getWeather` function
through `mapDispatchToProps`, and assign it to an `onClick` listener on the refresh button - allowing users to click the
refresh button and update their weather information.

### Potential points of failure
Because this project relies on two different APIs - if either get rate limited, modified or the user is behind a VPN or proxy, 
the information will be inaccurate or will not appear at all. Furthermore, users must allow http requests as opposed to the traditional https.

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
