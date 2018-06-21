import React from 'react'
import text from './titles.json'

export const greeting = (
    <h1 id="title"
        className="header"
        style={{backgroundColor: 'orange', color: 'purple'}}> 
        {text.hello}
    </h1>
)

export const farewell = (
    <h1 id="title"
        className="header"
        style={{backgroundColor: 'purple', color: 'orange'}}>
        {text.goodbye}
    </h1>
)