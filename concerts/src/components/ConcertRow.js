import { PropTypes } from 'react'

export const ConcertRow = ({concert, date, ohio, outdoor}) => (

  <tr>
    <td> {date.getMonth()+1}/{date.getDate()}/{date.getFullYear()} </td>
    <td> {concert} </td>
    <td> {ohio} </td>
    <td> {outdoor} </td>
  </tr>

)

ConcertRow.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  concert: PropTypes.string,
  ohio: PropTypes.string,
  outdoor: PropTypes.string
}
