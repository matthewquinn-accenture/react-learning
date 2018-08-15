import { ConcertRow } from './ConcertRow.js'
import { PropTypes } from 'react'

export const ConcertList = ({days}) => (
  <table>
      <thead>
          <tr>
              <th>Date</th>
              <th>Concert</th>
              <th>Ohio</th>
              <th>Outdoor</th>
          </tr>
      </thead>
      <tbody>
            {days.map((day, i) =>
              <ConcertRow key={i}
                      {...day} />
            )}
      </tbody>

  </table>
)

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
