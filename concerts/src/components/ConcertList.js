import { ConcertRow } from './ConcertRow.js'
import { PropTypes } from 'react'
import { Link } from 'react-router'

export const ConcertList = ({days, filter}) => {
  const filteredDays = (!filter ||
        !filter.match(/ohio|outdoor/))?
        days:
        days.filter(day => day [filter])

  return (
    <div className="ski-day-list" >
    <table>
      <thead>
          <tr>
              <th>Date</th>
              <th>Concert</th>
              <th>Ohio</th>
              <th>Outdoor</th>
          </tr>
          <tr>
            <td colSpan={4}>
              <Link to="/list-concerts">
                All Concerts
              </Link>
              <Link to="/list-concerts/ohio">
                Ohio Concerts
              </Link>
              <Link to="/list-concerts/outdoor">
                Outdoor Concerts
              </Link>
            </td>
          </tr>
      </thead>
      <tbody>
            {filteredDays.map((day, i) =>
              <ConcertRow key={i}
                      {...day} />
            )}
      </tbody>

    </table>
    </div>
  )
}

ConcertList.propTypes = {
  days: function(props) {
    if(!Array.isArray(props.days)) {
      return new Error(
        "ConcertList should be an array"
      )
    } else if (!props.days.length) {
      return new Error(
        "ConcertList must have at least one record"
      )
    } else {
      return null
    }
  }
}
