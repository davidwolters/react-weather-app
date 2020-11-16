
// Class for handling weather data.
export class Weather {

	static processWeatherData(data) {
		// If we don't have data to handle, return undefined.
		if ( data.weather === undefined || data.weather[0] === undefined ) {
			return undefined;
		}

		// Where we will be storing the data to send back.
		let weather = {};

		// The id of the weather type, from the response.
		const id = data.weather[0].id;

		weather.main = {
			description: data.weather[0].main
		};

		// Is it day or night? Depends on the icon's last letter.
		const isDay = data.weather[0].icon.substring(2) === 'd';

		// For themes.
		const dayOrNight = isDay ? "day" : "night";

		// Find icon corresponding to current weather, and set the theme from that.
		if ( id >= 200 && id < 300 ) {
			// Thunder weather.
			weather.main.icon = "thunder";
			weather.main.theme = "stormy-" + dayOrNight;
		} else if ( id >= 300 && id < 400 ) {
			// Drizzle weather.
			weather.main.icon = "drizzle";
			weather.main.theme = "rainy-" + dayOrNight;
		} else if ( id >= 400 && id < 500 ) {
			// Rain weather.
			if ( id <= 501 ) { // This is normal rain.
				weather.main.icon = "rain_default";
			} else if ( id === 511 ) {
				weather.main.icon = "snow";
			} else {
				weather.main.icon = "rain_intense";
			}
			weather.main.theme = "rainy-" + dayOrNight;
		} else if ( id >= 500 && id < 600 ) {
			weather.main.icon = "snowy";
			if ( id === 602 || id === 622 ) {
				weather.main.secondaryIcon = "snow";
			}
			weather.main.theme = "snowy-" + dayOrNight;
		} else if ( id >= 700 && id < 800 ) {
			if ( id === 781 ) {
				weather.main.icon = "tornado"
				weather.main.theme = "stormy-" + dayOrNight;
			} else {
				weather.main.icon = "mist";
				weather.main.theme = "misty-" + dayOrNight;
			}
		} else if ( id === 800 ) {
			// Is it day or night?
			weather.main.icon = "clear_" + dayOrNight;
			weather.main.theme = "clear-" + dayOrNight;

		} else {
			if ( id === 801 ) {
				weather.main.icon = "cloudy_" + dayOrNight;
			} else if (id === 802 ) {
				weather.main.icon = "cloud";
			} else {
				weather.main.icon = "cloudy";
			}
			weather.main.theme = "cloudy-" + dayOrNight;
		}

		weather.temperature = {
			actual: data.main.temp,
			icon: ( data.main.temp < 15 ) ? 'cold' : 'hot'
		}
		weather.wind = data.wind.speed;
		weather.humidity = data.main.humidity;
		weather.sunrise = new Date( data.sys.sunrise * 1000 );
		weather.sunset = new Date( data.sys.sunset * 1000 );

		return weather;
	}

}


export default Weather;