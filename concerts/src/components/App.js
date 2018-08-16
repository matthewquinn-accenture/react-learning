import { Component } from 'react'
import { ConcertList } from './ConcertList.js'
import { ConcertCount } from './ConcertCount.js'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allConcertDays: [
        {
          concert: "Dreamville",
          date: new Date("1/2/2018"),
          ohio: "Yes",
          outdoor: ""
        },
        {
          concert: "DreamvilleFest",
          date: new Date("1/2/2018"),
          ohio: "",
          outdoor: "Yes"
        },
        {
          concert: "Dreamville JID",
          date: new Date("1/2/2018"),
          ohio: "Yes",
          outdoor: ""
        }
      ]
    }
  }

  countDays(filter) {
    const { allConcertDays } = this.state
    /* Filter the state to get the total count of each filter.
    If a filter is passed, count how many are marked.
    If a filter isn't passed, return the number of days.

    The "RETURN" represents a callback function.
    **/
		return allConcertDays.filter((day) => (filter) ? day[filter] : day).length
	}

  render() {
    return (
      <div className="app">
           <ConcertList  days={this.state.allConcertDays} />
           <ConcertCount total={this.countDays()}
                  ohio={this.countDays("ohio")}
                  outdoor={this.countDays("outdoor")} />
      </div>
    )
  }
}
