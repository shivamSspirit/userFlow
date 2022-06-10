import React from 'react'
import userIcon from '../../../assest/icons8-person-48.png'
import teamIcon from '../../../assest/icons8-management-48.png'

import { useGlobalFormValues } from '../../../fromDataContext'

function UserAndTeam() {
  const { formData, setFormData } = useGlobalFormValues()
  return (
    <>
      <div className='card-sections'>
        <div className='perosnal-headings'>
          <h2 className='common-heading'>How are you planning to use Shivam</h2>
          <p className='common-description'>We are streamline your setup experince accordinglly</p>
        </div>
        <div>
          <div className='anothertype'>
            <div className='partofit'>
              <div className='cards' onClick={() => {
                setFormData({
                  ...formData, userOrTeam: 'for me'
                })
              }}>
                <img className='icons' src={userIcon} alt='usericon' />
                <h5>For myself</h5>
                <p className='common-description'>write better. Thinks more clearly.</p>
              </div>
            </div>
            <div className='partofit'>
              <div className='cards' onClick={() => {
                setFormData({
                  ...formData, userOrTeam: 'for my team'
                })
              }}>
                <img className='icons' src={teamIcon} alt='usericon' />
                <h5>With my team</h5>
                <p className='common-description'>wiki docs tasks & project all in on house</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserAndTeam
