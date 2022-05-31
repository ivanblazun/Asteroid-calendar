import React, { useEffect } from 'react'
import moment from 'moment'
import axios from 'axios'

// comps
import Day from './Day'

const DaysInMonth = ({ cd, month }) => {

  //check variable for is today the day :) 
  let thisDay = moment().format('D')

  return (
    <div className='daysInMonth' style={thisDay == cd.props.children ?
      { backgroundColor: '#db4877' } : { backgroundColor: '#a6daff' }}>
      <Day cd={cd} month={month} />
    </div>
  )
}

export default DaysInMonth