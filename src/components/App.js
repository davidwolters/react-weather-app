import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import WeatherData from './WeatherData'
import ThemedBackground from './ThemedBackground'
import Weather from '../includes/Weather'

// The theme for determining foreground & background.
export const ThemeContext = React.createContext('blank')

// The API key for the weather API.
const APIKey = '57c749e2458c09d52839ea33527699cf'

// Our main app class.
const App = () => {

	// The weather data retrieved from the API.
	let [weatherData, setWeatherData] = useState(null)

	// The current theme.
	let [weatherTheme, setWeatherTheme] = useState('blank')

	// The current place.
	let [place, setPlace] = useState(null)

	// Set the new weather data when we recieve it.
	const handleWeatherDataResponse = data => {
		setWeatherData(Weather.processWeatherData(data))

	}

	// When we recieve a new text, save it.
	const onTextUpdate = text => {
		if (text !== place) {
			setPlace(text)
		}
	}

	// Try to get the place when it updates.
	useEffect(
		() => {
			// Method to fetch weather data for the location.
			const getWeatherData = () => {
				fetch(
					'https://api.openweathermap.org/data/2.5/weather?units=metric&q=' +
					place + '&appid=' + APIKey)
				.then(response => response.json())
				.then(data => handleWeatherDataResponse(data))

			}
			if (place !== null) {
				getWeatherData()
			}
		}, [place],
	)

	// Set the document's title on mount.
	useEffect(
		() => {
			document.title = 'Weather App'
		}, [],
	)

	// Update the theme when we recieve new weather data.
	useEffect(
		() => {
			if (weatherData !== undefined && weatherData !== null) {
				setWeatherTheme(weatherData.main.theme)
			}
			else {
				setWeatherTheme('blank')
			}
		}, [weatherData],
	)

	return (
		<ThemeContext.Provider value={weatherTheme}>
			<ThemedBackground>
				<SearchBar onSubmit={onTextUpdate}/>
				<WeatherData data={weatherData}/>
			</ThemedBackground>
		</ThemeContext.Provider>
	)

}

export default App
