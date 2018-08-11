import React from 'react'
import { render } from 'react-dom'
import { ConcertList } from './components/ConcertList.js'

window.React = React /** Errors will show if 'React" isn't defined in window */

render(
    <ConcertList days={
      [
        {
          concert: "Dreamville",
          date: new Date("1/2/2018"),
          ohio: "Yes",
          outdoor: "No"
        },
        {
          concert: "DreamvilleFest",
          date: new Date("1/2/2018"),
          ohio: "No",
          outdoor: "Yes"
        },
        {
          concert: "Dreamville JID",
          date: new Date("1/2/2018"),
          ohio: "No",
          outdoor: "No"
        }
      ]
    }
    />, document.getElementById('react-container')
)
