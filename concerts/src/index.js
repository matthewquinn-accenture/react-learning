import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App.js'

window.React = React /** Errors will show if 'React" isn't defined in window */

render(
    <App />,
		document.getElementById('react-container')
)
