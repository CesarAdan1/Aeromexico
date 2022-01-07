import React from 'react'
import './file.scss'

const FileInput = ({onChange}) => {
    return (
        <div>
           <input 
                placeholder='Fotografia' 
                type="file"
                onChange={onChange}
            /> 
        </div>
    )
}

export default FileInput
