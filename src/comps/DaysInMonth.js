import React, { Fragment } from 'react'
import moment from 'moment'
// comps
import Day from './Day'

const DaysInMonth = ({ cd }) => {

  let thisDay = moment().format('D')
  return (
    <div className='daysInMonth' style={thisDay == cd.props.children ? { backgroundColor: 'red' } : { backgroundColor: 'white' }}>
      <Day cd={cd} />
    </div>
  )
}

export default DaysInMonth