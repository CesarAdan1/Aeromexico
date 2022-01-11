import React from 'react'
import './fav-item.scss'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {unfavourite} from "../../state/redux/actions";
import {connect} from "react-redux";
import {v4 as uuidv4} from "uuid";

const FavMenuItem = (data) => {
    const { image, name, unfavourite } = data
    return(
        <div key={uuidv4()} className='fav-item'>
             <div className='fav-item--sub'>
                <figure>
                    <img 
                        className='fav-item--img'
                        src={image}
                        alt={name}
                    />
                    <h2 className='fav-item--name'>{name}</h2>
                    <span className='fave-item--ic' onClick={() => {unfavourite()}}>
                        <DeleteOutlineIcon />
                    </span>
                </figure>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    const {name} = ownProps
    return { unfavourite: () => dispatch({type:unfavourite, payload:{name}})}
}

export default connect(null, mapDispatchToProps)(FavMenuItem)
