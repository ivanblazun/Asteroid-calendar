import React from 'react'

const CurrentMonth = ({ momentM }) => {

  const curr = momentM.format('MMMM')

  return (
    <div>{curr}</div>
  )
}

export default CurrentMonth