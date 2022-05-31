import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from 'react-modal'


const Day = ({ cd, month }) => {

  const [asteroid, setAsteroid] = useState({
    name: null,
    id: null,
    isDangerous: false,
    diameter: null,
    kmFromEarth: null,
    velocityKmPS: null
  })

  const [showInfo, setShowInfo] = useState(false)

  const key = process.env.REACT_APP_API_KEY

  // define day and adding zero if number is single char string
  let dayNum = cd.props.children.toString()
  let dayNumLength = dayNum.length
  let zero = '0'
  if (dayNumLength < 2) {
    zero = zero.concat(dayNum)
  } else dayNum = dayNum

  // info handler
  const handleClick = () => {
    setShowInfo(!showInfo)
  }

  let asterArray = []

  const call = async () => {
    const res = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-${month}-${dayNum}&end_date=2022-${month}-${dayNum}&api_key=${key}`)
    const data = await res.data
    asterArray = data.near_earth_objects[Object.keys(data.near_earth_objects)[0]]

    // set response data to asteroid state
    setAsteroid({
      name: asterArray[0].name,
      id: asterArray[0].id,
      isDangerous: asterArray[0].is_potentially_hazardous_asteroid,
      diameter: asterArray[0].estimated_diameter.kilometers.estimated_diameter_max,
      kmFromEarth: asterArray[0].close_approach_data[0].miss_distance.kilometers,
      velocityKmPS: asterArray[0].close_approach_data[0].relative_velocity.kilometers_per_second
    })
  }

  useEffect(() => {
    call()
  }, [month])


  // style for dangerous objects
  const danger = {
    backgroundColor: "pink",
    border: '1px solid #f53d87',
    borderRadius: '6px',
    padding: '0,2rem',
    margin: '0,2rem'
  }

  // style for non dangerous objects
  const notDanger = {
    backgroundColor: "#aefcd7",
    border: '1px solid #32a86f',
    borderRadius: '6px',
    padding: '0,2rem',
    margin: '0,2rem'
  }

  return (
    <div className='eachDay'>
      <div className='dayNum' style={{ alignSelf: 'left', fontFamily: 'fantasy' }}>
        {cd}
      </div>
      {asteroid.name === null ? '' : <div className='eachDayItem'>
        <div style={asteroid.isDangerous === false ?
          notDanger :
          danger}>
          <p>Asteroid name:</p>
          {asteroid.name}
        </div>
      </div>}
      <div style={{ alignSelf: 'center' }}>
        <button className='button'
          onClick={handleClick}>
          About?
        </button>
      </div>
      {showInfo === false ? null :
        <div >
          <Modal ariaHideApp={false}
            isOpen={showInfo}
            onRequestClose={(e) => setShowInfo(false)}
            style={
              {
                overlay: {
                  position: 'absolute',
                  top: "20%",
                  left: '30%',
                  width: '21rem',
                  height: '21rem',
                  backgroundColor: '#a7e2eb',
                  borderRadius: "10px",
                },
                content: {
                  backgroundColor: '#b4f3fa',
                  fontFamily: 'sans-serif'
                }
              }
            }
          >
            <h2>Asteroid short info</h2>
            <p>Name: {asteroid.name}</p>
            <p>Distance from earth:{Math.floor(asteroid.kmFromEarth) + ' km'}</p>
            <p>Size/Diameter: {Math.floor(asteroid.diameter) + " km"}</p>
            <p>Velocity km/s: {Math.floor(asteroid.velocityKmPS)}</p>
            <p>Is dangerous: {asteroid.isDangerous === false ? "No" : "Yes!"}</p>
            <button className='button' onClick={(e) => setShowInfo(false)}>
              Close modal
            </button>
          </Modal>
        </div>}
    </div>
  )
}

export default Day