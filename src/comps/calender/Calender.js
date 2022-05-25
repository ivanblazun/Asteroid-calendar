import React from 'react'
import moment from 'moment'

// comps
import WeekDay from './WeekDay'
import Today from './Today'
import DaysInMonth from './DaysInMonth'

const Calender = () => {

  let weekDays = moment.weekdays(true)

  return (
    <div className='container'>
      <h2>Calendar</h2>
      <div>
        <Today />
      </div>
      <div className='d-flex justify-content-around'>
        {weekDays.map((wd, index) => <WeekDay key={index} wd={wd} />)}
      </div>
      <div>
        <DaysInMonth />
      </div>
    </div>
  )
}

export default Calender