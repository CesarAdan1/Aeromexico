import React from 'react'
import './checkbox.scss'

const Checkbox = ({forW, onClick, titleCheckbox}) => {
    return (
        <div className='check-inp'>
            <label 
                htmlFor={forW}
                className='check-inp--label'
            >{titleCheckbox}</label>
            <input 
                className='check-inp--input'
                type="radio" 
                onClick={onClick}
            />
        </div>
    )
}

export default Checkbox
