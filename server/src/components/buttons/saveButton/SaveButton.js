import React from 'react'
import './save-button.scss'

const SaveButton = ({onClick, ButtonActionName}) => {
    return (
        <div onClick={onClick}>
            <button>{ButtonActionName}</button>
        </div>
    )
}

export default SaveButton
