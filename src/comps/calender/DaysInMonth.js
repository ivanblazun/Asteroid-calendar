import React from 'react'
import moment from 'moment'

//comps
import EachDay from './EachDay'
const DaysInMonth = () => {

  let daysArray = []
  const daysInMonthFunc = () => {
    let daysInMonth = moment().daysInMonth()

    while (daysInMonth) {
      let currentDay = moment().date(daysInMonth);

      daysArray.push(`${currentDay.format('D')}`);
      daysInMonth--
    }
    return daysArray.reverse()
  }

  daysInMonthFunc()

  return (
    <div className='daysInMonth'>
      {daysArray.map((day, index) => <EachDay key={index} day={day} />)}
    </div>
  )
}

export default DaysInMonth