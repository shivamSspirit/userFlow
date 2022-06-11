import React from 'react'
import './stepsss.css'

function Stepsss(props) {
    console.log(props)
    return (
        <div className={`stepSection ${(props.selected === props.index) && "selected"}`}>
            <div className={`circles`}>
                <div onClick={() => props.updateSteps(props.index)} className={`cir`}>{props.index + 1}</div>
            </div>
        </div>
    )
}

export default Stepsss
