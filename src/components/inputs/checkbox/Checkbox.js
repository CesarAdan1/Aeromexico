import React from 'react'
import './checkbox.scss'

const Checkbox = ({onClick, titleCheckbox}) => {
    return (
        <div>
            <input type="checkbox" onClick={onClick}/>
            <label>{titleCheckbox}</label>
        </div>
    )
}

export default Checkbox
