import React from 'react'
import './checkbox.scss'

const Checkbox = ({forW, onClick, title, name, 
    id, value
}) => {
    return (
        <div className='check-inp'>
            
            <input 
                className='check-inp--input'
                type="radio" 
                onClick={onClick}
                name={name}
                id={id}
                value={value}
            />
            <label 
                htmlFor={forW}
                className='check-inp--label'
            >{title}</label>
        </div>
    )
}

export default Checkbox
