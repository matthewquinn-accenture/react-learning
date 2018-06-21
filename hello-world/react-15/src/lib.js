import React from 'react'
import text from './titles.json'
import './stylesheets/farewell.scss'
import './stylesheets/greeting.css'

export const greeting = (
    <h1 id="title"
        className="greeting">
        {text.hello}
    </h1>
)

export const farewell = (
    <h1 id="title"
        className="farewell">
        {text.goodbye}
    </h1>
)