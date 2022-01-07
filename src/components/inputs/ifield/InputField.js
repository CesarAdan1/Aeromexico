import React from 'react'
import './inputField.scss'

const InputField = ({onChange, labelTitle, onClick, onBlur}) => {
    return (
        <div>
            <label for={ForName}>
                {labelTitle}
                <input 
                    onBlur={onBlur}
                    onClick={onClick}
                    onChange={onChange}
                /> 
            </label>
        </div>
    )
}

export default InputField
