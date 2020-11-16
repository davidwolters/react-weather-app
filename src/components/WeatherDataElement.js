import { ThemeContext } from './App'
import { useContext } from 'react'
import WeatherIcon from './WeatherIcon'

// A data row, displaying an icon and text.
const WeatherDataElement = (props) => {

	// Get the theme
	let theme = useContext(ThemeContext)

	// Render the icon and text.
	return (
		<div className={'weather-element-container'}>
			<WeatherIcon type={props.icon} size={'small'}/>
			<h3 className={'weather-element text-' + theme}>{props.text}</h3>
		</div>

	)
}

export default WeatherDataElement