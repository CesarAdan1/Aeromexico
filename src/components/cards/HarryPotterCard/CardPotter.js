import React from 'react'
import './card-potter.scss'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import {connect} from "react-redux";
import {FAVOURITES, UNFAVOURITES} from "../../../state/redux/actions";

const CardPotter = ({ onClick, addFavourite, info, dislike, like }) => {
    const { eyeColour, hairColour, name, dateOfBirth, gender,
        house, alive, image, hogwartsStudent } = info

    return (
        <div className='flex-direction-respon card'>
            <div className={`card--left ${house === "Slytherin" ? "slytherin-color"
                :house === "Ravenclaw" ?  "ravenclaw-color" 
                :house === "Hufflepuff"? "hufflepuff-color" 
                :house === "Gryffindor" ? "griphyndor-color" 
                : null} `
            }>
               <figure>
                <img 
                    className="position-img"
                    src={image}
                    alt={name}
                />
               </figure> 
            </div>
            <div className='card--cont2'>
                <span className='card--cont2-sub'>
                    <p className="card--alive">{`${alive ? "vivo" : "Finado"}`}{" "}/{" "}{`${hogwartsStudent ? "Estudiante" : "Staff"}`}</p>
                    <span onClick={onClick} className={addFavourite ? "card--liked-color" : "card--like"}>
                        {!addFavourite 
                        ? <BookmarkBorderIcon onClick={() => {dislike()}}/> 
                        : <BookmarkIcon onClick={() => {like()}}/>}
                    </span>
                </span>
                <div className='card--cont2-sub2'>
                    <h2>{name}</h2>
                    <div className='card--cont2-sub3'>
                        <div style={{display: "flex", overflow: 'hidden', alignItems: 'center', height: '20px'}}>
                            <p className='card--cont2-p'>Cumpleanios: </p> 
                            <span className='card--cont2-description'>{dateOfBirth}</span>
                        </div>
                        <div style={{display: "flex", overflow: 'hidden', alignItems: 'center', height: '20px'}}>
                            <p className='card--cont2-p'>Genero: </p> 
                            <span className='card--cont2-description'>{gender}</span>
                        </div>
                        <div style={{display: "flex", overflow: 'hidden', alignItems: 'center', height: '20px'}}>
                            <p className='card--cont2-p'>Color de ojos: </p> 
                            <span className='card--cont2-description'>{eyeColour}</span>
                        </div>
                        <div style={{display: "flex", overflow: 'hidden', alignItems: 'center', height: '20px'}}>
                            <p className='card--cont2-p'>Color de pelo: </p> 
                            <span className='card--cont2-description'>{hairColour}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    const {name} = ownProps
    return { favoritos: () => dispatch({
        type:FAVOURITES, 
        payload:{name}}), 
        dislike: () => dispatch({type:UNFAVOURITES, 
            payload:{name}})}
}

export default connect(null, mapDispatchToProps)(CardPotter)
