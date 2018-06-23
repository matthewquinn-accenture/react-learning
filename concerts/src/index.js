import React from 'react'
import { render } from 'react-dom'
import { ConcertCount } from './components/ConcertCount'

window.React = React /** Errors will show if 'React" isn't define in window */

render(
    <ConcertCount />, document.getElementById('react-container')    
)