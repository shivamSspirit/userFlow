import React from 'react'
import './final.css'
import checkIcon from '../../../assest/icons8-check-48.png'
function Final() {
  return (
    <>
      <div className='final-container'>
        <div className='headIcon'>
          <img className='iconCheck' src={checkIcon} alt='icon' />
        </div>

        <div className='perosnal-headings'>
          <h2 className='common-heading'>Congratulations shivam</h2>
          <p className='common-description'>You have completed onboarding ,you can use shivam soni in your product</p>
        </div>
      </div>
    </>
  )
}

export default Final
