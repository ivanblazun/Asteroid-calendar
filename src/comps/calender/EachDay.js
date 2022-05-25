import React from 'react'
import moment from 'moment'

const EachDay = ({ day }) => {

  const activeDay = moment().date()

  return (
    <div className='eachDay'
      style={activeDay.toString() === day ?
        { backgroundColor: "red" } :
        { backgroundColor: 'white' }}
    >
      {day}
    </div>
  )
}

export default EachDay