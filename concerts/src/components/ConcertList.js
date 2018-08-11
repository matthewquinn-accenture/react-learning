import { ConcertRow } from './ConcertRow.js'

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
                          concert={day.concert}
                          date={day.date}
                          ohio={day.ohio}
                          outdoor={day.outdoor} />
            )}
      </tbody>

  </table>
)
