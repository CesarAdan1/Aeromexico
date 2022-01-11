import React from 'react'
import './button-filter.scss'

const ButtonFilterBy = ({onClick, title, active, separate}) => {
    return (
        <button onClick={onClick} style={{marginRight: separate}} className={`${separate} ${active ? "content-btn-active": ""} content-btn container`}>
            <div>
                <span className='content-letters'>{title}</span>
            </div>
        </button>
    )
}

export default ButtonFilterBy
