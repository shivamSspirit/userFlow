import React from 'react'
import Personal from '../steps/personalInfo/personal';
import Workspace from '../steps/workspaceInfo/workspace';
import UserAndTeam from '../steps/userSpecific/userAndteam';
import Final from '../steps/finalspace/final';
import { useGlobalFormValues } from '../../fromDataContext';
import ProgrssBar from '../progressBar/progrssBar';
import headIcon from '../../assest/brandicon.png'
import './form.css'

function Form() {
    const { page, setPage, titles, formData, setFormData } = useGlobalFormValues();

    const handelSPace = () => {
        setPage(page + 1)
    }

    const dispalyPage = () => {
        if (page === 0) {
            return (
                <Personal />
            )
        }
        if (page === 1) {
            return (
                <Workspace />
            )

        }
        if (page === 2) {
            return (
                <UserAndTeam />
            )
        }
        if (page === 3) {
            return (
                <Final />
            )
        }
    }

    const handleUser = () => {
        const userData = { ...formData }
        console.log('userData', userData)
        setTimeout(() => {
            setFormData({
                fullName: '',
                displayName: '',
                workspaceName: '',
                workspaceUrl: '',
                userOrTeam: ''
            });
        }, 999)
    }

    return (
        <div className='main-app-container'>
            <div className='form-container'>
                <div className='head-name'>
                    <img className='brand-icon' src={headIcon} alt='head' />
                    <h2 className='brand-name'>Shivam Soni</h2>
                </div>
                <div>
                    <ProgrssBar />
                </div>
                <div>
                    {dispalyPage()}
                    <button className='space-btn' onClick={page === titles.length - 1 ? handleUser : handelSPace}>{`${page === titles.length - 1 ? "launch legend" : 'Create Space'}`}</button>
                </div>
            </div>
        </div>
    )
}

export default Form
