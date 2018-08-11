import React from 'react'
import { render } from 'react-dom'
import { ConcertCount } from './components/ConcertCount-ES6.js'

window.React = React /** Errors will show if 'React" isn't defined in window */

render(
  <ConcertCount />,
  document.getElementById('react-container')
)


/* render(
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
) **/
