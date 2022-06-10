import React, { useState, useContext } from 'react'

const FormContext = React.createContext('formContext')

function FormDataProvider({ children }) {
    const [page, setPage] = useState(0);
    const titles = ['1', '2', '3', '4']
    const [formData, setFormData] = useState({
        fullName: '',
        displayName: '',
        workspaceName: '',
        workspaceUrl: '',
        userOrTeam: ''
    })

    let contextValue = {
        page,
        setPage,
        titles,
        formData,
        setFormData
    }

    return (
        <div>
            <FormContext.Provider value={contextValue}>
                {children}
            </FormContext.Provider>
        </div>
    )
}

export default FormDataProvider

export const useGlobalFormValues = () => useContext(FormContext)
