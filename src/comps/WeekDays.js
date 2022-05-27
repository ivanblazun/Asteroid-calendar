import { weekdays } from 'moment'
import React, { useState } from 'react'

const WeekDays = ({ weekDays }) => {



  return (
    <div className='weekDays'>
      {weekDays.map((wd, index) =>
        <p key={index} style={{ margin: '1rem' }} >{wd}</p>)}
    </div>
  )
}

export default WeekDays