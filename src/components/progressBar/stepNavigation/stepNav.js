import React from 'react'
import Stepsss from '../steps/stepsss'
import './stepnav.css'

function StepNav(props) {
  return (
    <div className='stepWrapper'>
        {props?.circleArr?.map((item,idx)=>(
           <Stepsss selected={props.currentPage} key={`cir${idx}`} index={idx} circle={item} updateSteps={props.updateSteps}/>
        ))}
    </div>
  )
}

export default StepNav
