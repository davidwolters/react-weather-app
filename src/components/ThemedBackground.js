import { useContext } from 'react'
import { ThemeContext } from './App'

// Our background, that changes color : )
const ThemedBackground = (props) => {

	// Get the theme.
	const theme = useContext(ThemeContext)

	return (
		<div className={'container bg-' + theme}>
			{props.children}
		</div>
	)
}

export default ThemedBackground