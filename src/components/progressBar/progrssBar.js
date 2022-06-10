import React from 'react'
import './steps.css'
import { useGlobalFormValues } from '../../fromDataContext'
import StepNav from './stepNavigation/stepNav';

function ProgrssBar() {
    const { page, setPage, titles } = useGlobalFormValues();

    const updateSteps = (currentstep) => {
        setPage(currentstep)
    }

    return (
        <div className='progress-container'>
            <StepNav updateSteps={updateSteps} currentPage={page} circleArr={titles} />
        </div>
    )
}

export default ProgrssBar
