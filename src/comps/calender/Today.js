import React, { useState } from 'react'
import moment from 'moment'

const Today = () => {

  const [useMonth, setUsemonth] = useState("MMMM")



  const now = moment().format(`dddd, / D /${useMonth}  / Y`)


  return (
    <div>{now}</div>
  )
}

export default Today