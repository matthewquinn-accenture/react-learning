import '../stylesheets/ui.scss'

const percentToDecimal = (decimal) => {
  return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
  return percentToDecimal(total/goal)
}

export const ConcertCount = (props) => (
  <div className='concert-count'>

     <div className='total-concerts'>
         <span> {props.total} </span>
         <span>concerts</span>
     </div>

     <div className='ohio-concerts'>
         <span> {props.ohio} </span>
         <span>Ohio concerts</span>
     </div>

     <div className='outdoor-concerts'>
         <span> {props.outdoor} </span>
         <span>outdoor concert</span>
     </div>

     <div>
         <span> {calcGoalProgress(props.total, props.goal)} </span>
     </div>

  </div>
)

ConcertCount.defaultProps = {
  total: 50,
  ohio: 5,
  outdoor: 17,
  goal: 75
}
