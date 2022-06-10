import React from 'react'

function MasterInput(props) {
    const { name, value, changeHandler, placeholder, styleclasses } = props;
    return (
        <>
            <input required className={styleclasses} name={name} value={value} placeholder={placeholder} onChange={changeHandler} />
        </>
    )
}

export default MasterInput
