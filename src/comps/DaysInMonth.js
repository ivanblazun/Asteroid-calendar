import React, { useEffect } from 'react'
import moment from 'moment'
import axios from 'axios'
// comps
import Day from './Day'

const DaysInMonth = ({ cd }) => {

  let thisDay = moment().format('D')
  return (
    <div className='daysInMonth' style={thisDay == cd.props.children ?
      { backgroundColor: '#db4877' } : { backgroundColor: 'white' }}>
      <Day cd={cd} />
    </div>
  )
}

export default DaysInMonth