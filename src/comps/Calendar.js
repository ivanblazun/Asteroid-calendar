import React, { useState } from 'react'
import moment from 'moment'

//comps
import WeekDays from './WeekDays'
import DaysInMonth from './DaysInMonth'
import PrevMonthDays from './PrevMonthDays'

const Calendar = () => {

  const [momentM, setMomentM] = useState(moment().set('month', 4))
  // const [momentM, setMomentM] = useState(moment())
  const [today, setToday] = useState(moment())

  let weekDays = moment.weekdays()
  let weekDaysShort = moment.weekdaysShort()
  let months = moment.months()


  // return functions of string
  let year = () => {
    return momentM.format('Y')
  }
  let month = () => {
    return momentM.format('MMMM')
  }

  // return function of days in month
  let daysInMonth = () => {
    return momentM.daysInMonth()
  }

  // return function of current date 
  let currentDate = () => {
    return momentM.get('date')
  }

  // return current day string
  let currentDay = () => {
    return momentM.format('D')
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


  return (
    <div className='calendar-container'>
      <h1>Calendar</h1>
      <div>
        <WeekDays weekDays={weekDays} />
      </div>
      <div className='alldaysInMonth'>
        {emptyDays.map((ed, index) => <PrevMonthDays key={index} ed={ed} />)}
        {daysInCurrentMonth.map((cd, index) => <DaysInMonth key={index} cd={cd} />)}
        {leftDays.map((ed, index) => <PrevMonthDays key={index} ed={ed} />)}
      </div>
    </div>
  )
}

export default Calendar