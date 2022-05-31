import React, { useState } from 'react'
import moment from 'moment'

//comps
import WeekDays from './WeekDays'
import DaysInMonth from './DaysInMonth'
import PrevMonthDays from './PrevMonthDays'

const Calendar = () => {

  // const [momentM, setMomentM] = useState(moment().set('month', 4))
  const [momentM, setMomentM] = useState(moment())

  // list of days in week
  let weekDays = moment.weekdays()

  // return function of days in month
  let daysInMonth = () => {
    return momentM.daysInMonth()
  }

  // get first day of month 
  let firstDayOfMonth = () => {
    let date = momentM
    let firstDay = moment(date).startOf('month').format('d')

    return firstDay
  }

  // empty blocks/days
  let emptyDays = []
  for (let i = 0; i < firstDayOfMonth(); i++) {
    emptyDays.push(<span>{''}</span>)
  }

  // days in current mounth
  let daysInCurrentMonth = []
  for (let i = 1; i < daysInMonth() + 1; i++) {
    daysInCurrentMonth.push(<span >{i}</span>)
  }

  let leftDays = []
  for (let i = 0; i < 35 - daysInCurrentMonth.length - emptyDays.length; i++) {
    leftDays.push(<span >{''}</span>)
  }

  // prev month
  const prevMonth = () => {
    if (momentM.month() > 0) {
      let prevMonth = moment().set('month', momentM.month() - 1)
      setMomentM(prevMonth)
    }
  }

  // next month
  const nextMonth = () => {
    if (momentM.month() < 11) {
      let prevMonth = moment().set('month', momentM.month() + 1)
      setMomentM(prevMonth)
    }
  }
  return (
    <div className='calendar-container'>
      <div className='header'>
        <h1>Asteroid approach calendar for 2022</h1>
      </div>
      <div >
        <button
          className='prevBtn'
          onClick={prevMonth}>
          Prev
        </button>
        <span className='month'>
          {momentM.format('MMMM')}
        </span>
        <button
          className='nextBtn'
          onClick={nextMonth}>
          Next
        </button>
      </div>
      <div>
        <WeekDays weekDays={weekDays} />
      </div>
      <div className='alldaysInMonth'>
        {emptyDays.map((ed, index) => <PrevMonthDays key={index} ed={ed} />)}
        {daysInCurrentMonth.map((cd, index) => <DaysInMonth key={index} cd={cd} month={momentM.format("MM")} />)}
        {leftDays.map((ed, index) => <PrevMonthDays key={index} ed={ed} />)}
      </div>
    </div>
  )
}

export default Calendar