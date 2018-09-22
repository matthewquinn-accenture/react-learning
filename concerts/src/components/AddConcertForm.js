import { Component, PropTypes } from 'react'

export class AddConcertForm extends Component {
  render() {

  const { concert, date, ohio, outdoor } = this.props

  return (
      <form className="add-day">
        <label htmlFor="resort"> Concert </label>
        <input id="resort" type="text" required defaultValue={concert}/>

        <label htmlFor="date"> Date </label>
        <input id="date" type="date" required defaultValue={date}/>

        <label htmlFor="powder"> Ohio Concert </label>
        <input id="powder" type="text" defaultValue={ohio}/>

        <label htmlFor="backcountry"> Outdoor Concert </label>
        <input id="backcountry" type="text" defaultValue={outdoor}/>
      </form>
    )
  }
}

AddConcertForm.defaultProps = {
	concert: "Dreamville",
	date: new Date("2018/01/02"),
	ohio: "yes",
	outdoor: "no"
}

AddConcertForm.propTypes = {
  concert: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  ohio: PropTypes.string.isRequired,
  outdoor: PropTypes.string.isRequired
}
