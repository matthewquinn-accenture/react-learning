import { createClass } from 'react'

export const App = createClass({
  getInitialState() {
    return {
      allConcertDays: [
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
  },
  render() {
    return (
      <div className="app">
				{this.state.allConcertDays[0]["concert"]}
			</div>
    )
  }
})
