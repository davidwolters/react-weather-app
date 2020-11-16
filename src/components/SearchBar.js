import React, { useRef, useContext, useState, useEffect } from 'react'
import { ThemeContext } from './App'

// Our search bar at the topo of the screen.
const SearchBar = (props) => {

	// Ref to our input element.
	const inputElement = useRef(null)

	// The current theme.
	const theme = useContext(ThemeContext)

	// The value of our input.
	const [value, setValue] = useState('')

	// When we change, format the text and update the value.
	const onChange = () => {
		const text = inputElement.current.value
		const words = text.split(" ");
		let formattedText = words.map( (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase() )
		setValue(formattedText.join(" "));
	}

	// When we submit (enter or unfocus), tell the App that we have submitted a new place.
	const onSubmit = event => {
		event.preventDefault();
		props.onSubmit(value)
	}

	// When we mount, focus on the input.
	useEffect( () => {
		inputElement.current.focus();
	}, [])

	return (
		<div className={'search-container'}>
			<form onSubmit={onSubmit}>
			<input type={'text'}
				   ref={inputElement}
				   value={value}
				   className={'search text-' + theme}
				   placeholder={'Enter Place'}
				   onChange={onChange}
				   onBlur={() => { props.onSubmit(value)}}
				   />
			</form>
		</div>
	)
}

export default SearchBar