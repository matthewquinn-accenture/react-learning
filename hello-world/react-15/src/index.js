import React from 'react'
import { render } from 'react-dom'
import { greeting, farewell } from './lib'

render(
    <div>
        {greeting}
        {farewell}
    </div>, document.getElementById('react-container')
)