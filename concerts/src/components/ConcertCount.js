import { PropTypes } from 'react'
import '../stylesheets/ui.scss'

const percentToDecimal = (decimal) => {
  return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
  return percentToDecimal(total/goal)
}

export const ConcertCount = ({total=70, ohio=15, outdoor=10, goal=100}) => (
  <div className='concert-count'>

     <div className='total-concerts'>
         <span> {total} </span>
         <span>concerts</span>
     </div>

     <div className='ohio-concerts'>
         <span> {ohio} </span>
         <span>Ohio concerts</span>
     </div>

     <div className='outdoor-concerts'>
         <span> {outdoor} </span>
         <span>outdoor concert</span>
     </div>

     <div>
         <span> {calcGoalProgress(total, goal)} </span>
     </div>

  </div>
)

ConcertCount.propTypes = {
  total: PropTypes.number,
  ohio: PropTypes.number,
  outdoor: PropTypes.number,
  goal: PropTypes.number
}
