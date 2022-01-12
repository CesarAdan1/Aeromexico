import React from 'react'
import './button.scss'

const Button = ({marginRight, marginLeft,
    staff, students, onClick, title
}) => {
    return (
        <button onClick={onClick} 
            className={`
                ${students ? "btn btn--active" : "btn btn--normal"}
                ${staff ? "btn btn--active" : "btn btn--normal"}
            `} 
            style={{textTransform: "uppercase", marginRight: marginRight, marginLeft: marginLeft}}
        >
            {title}
        </button>
    )
}

export default Button
