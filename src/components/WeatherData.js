import React from 'react'
import WeatherDataElement from './WeatherDataElement'
import WeatherIcon from './WeatherIcon'
import Title from './Title'

// The weather data.
const WeatherData = (props) => {

	// If we haven't entered a place yet, render nothing.
	if (props.data === null) {
		return ''
	}

	// If we have entered a place, but that place isn't found, error message.
	if (props.data === undefined) {
		return (<div className={'weather-container'}>
			<div style={{ textAlign: 'center' }}>
				<WeatherIcon type={'wind_wane_bird'} size={'big'}/>
			</div>
			<Title>
				Sorry, that's not a place we know
			</Title>
		</div>)
	}

	// Some weather's have a secondary icon.
	let secondaryIcon = "";

	if ( props.data.main.secondaryIcon !== undefined ) {
		secondaryIcon = <WeatherIcon type={props.data.main.secondaryIcon} size={'big'}  />
	}


	// Otherwise, return the weather data box.
	return (
		<div className={'weather-container'}>
			<div style={{ textAlign: 'center' }}>
				<WeatherIcon type={props.data.main.icon} size={'big'}/>
				{secondaryIcon}
			</div>
			<Title>
				{props.data.main.description}
			</Title>

			<WeatherDataElement icon={props.data.temperature.icon}
								text={props.data.temperature.actual + '°C'}/>
			<WeatherDataElement icon={'wind'} text={props.data.wind + ' m/s'}/>
			<WeatherDataElement icon={'humidity'}
								text={props.data.humidity + '%'}/>
			<WeatherDataElement icon={'sunrise'}
								text={props.data.sunrise.toLocaleTimeString()}/>
			<WeatherDataElement icon={'sunset'}
								text={props.data.sunset.toLocaleTimeString()}/>
		</div>
	)
}

export default WeatherData