import React from 'react'
import './InputFiels.scss'

const InputField = ({ForName, onChange, type, labelTitle, onClick, onBlur}) => {
    return (
        <div className='input-field'>
            <label className='input-field--lab' htmlFor={ForName}>
                {labelTitle}
                <input 
                    type={type}
                    className='input-field--inp'
                    onBlur={onBlur}
                    onClick={onClick}
                    onChange={onChange}
                /> 
            </label>
        </div>
    )
}

export default InputField
