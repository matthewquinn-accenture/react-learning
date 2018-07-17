import React from 'react'
import { render } from 'react-dom'
import { ConcertCount } from './components/ConcertCount'

window.React = React /** Errors will show if 'React" isn't defined in window */

render(
    <ConcertCount total={5}
                  ohio={2}
                  outdoor={4}
                  goal={10}
    />, document.getElementById('react-container')
)
