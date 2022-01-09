import React from 'react'
import './fav-item.scss'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const FavMenuItem = ({data, onClickDelete}) => {
    return(
        <div className='fav-item'>
             <div className='fav-item--sub'>
                <figure>
                    <img 
                        className='fav-item--img'
                        src={data.image}
                        alt={data.name}
                    />
                    <h2 className='fav-item--name'>{data.name}</h2>
                    <span className='fave-item--ic' onClick={onClickDelete}>
                        <DeleteOutlineIcon />
                    </span>
                </figure>
            </div>
        </div>
    )
}

export default FavMenuItem
