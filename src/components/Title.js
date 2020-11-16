import { useContext } from 'react'
import { ThemeContext } from './App'

// A heading.
const Title = (props) => {

	// Get the theme.
	const theme = useContext(ThemeContext)
	return (
		<div>
			<h2 className={'title text-' + theme}>{props.children}</h2>
		</div>
	)
}

export default Title