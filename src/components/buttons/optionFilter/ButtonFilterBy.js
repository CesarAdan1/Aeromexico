import React from 'react'
import '.button-filter.scss'

const ButtonFilterBy = ({onClick, title, className}) => {
    return (
        <div onClick={onClick} className='container'>
            <div className={className}>
                <span>{title}</span>
            </div>
        </div>
    )
}

export default ButtonFilterBy
