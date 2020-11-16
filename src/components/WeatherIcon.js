import { ThemeContext } from './App';
import { useContext } from 'react'

// An icon
const WeatherIcon = (props) => {

	// Get the theme, for coloring icons white or black.
	const theme = useContext(ThemeContext);
	return (
		<img src={"/icons/" + props.type + ".png"}
			 className={"weather-icon icon-" + theme + " icon-" + props.size}
			 alt={props.type}/>
	);
}

export default WeatherIcon;