import React from 'react'
import './card-potter.scss'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';


const CardPotter = (props) => {
    const { eyeColour, hairColour, name, dateOfBirth, gender,
        house, alive, image, hogwartsStudent, unfavourite, 
        favorite, like } = props.info

        const addToFav = (data) => {
            props.addFav(data)
          }

    return (
        <div className='card'>
            <div className={`card--left ${house === "Slytherin" ? "slytherin-color"
                :house === "Ravenclaw" ? "ravenclaw-color" 
                :house === "Hufflepuff"? "hufflepuff-color" 
                :house === "Gryffindor" ? "griphyndor-color" 
                :house === "" ? "empty"
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
                    <span onClick={() => addToFav(props.info)}>
                        {
                        like 
                        ? <BookmarkIcon onClick={() => {unfavourite()}}/> 
                        : <BookmarkBorderIcon onClick={() => {favorite()}}/>}
                    </span>
                </span>
                <div className='card--cont2-sub2'>
                    <h2>{name}</h2>
                    <div className='card--cont2-sub3'>
                        <div style={{display: "flex", overflow: 'hidden', alignItems: 'center', height: '20px'}}>
                            <p className='card--cont2-p'>Cumpleanios: </p> 
                            <span className='card--cont2-description'>{dateOfBirth === null || dateOfBirth === undefined || dateOfBirth === "" ? "Desconocido" : dateOfBirth}</span>
                        </div>
                        <div style={{display: "flex", overflow: 'hidden', alignItems: 'center', height: '20px'}}>
                            <p className='card--cont2-p'>Genero: </p> 
                            <span className='card--cont2-description'>{gender}</span>
                        </div>
                        <div style={{display: "flex", overflow: 'hidden', alignItems: 'center', height: '20px'}}>
                            <p className='card--cont2-p'>Color de ojos: </p> 
                            <span className='card--cont2-description'>{eyeColour === "" ? "Dato desconocido" : eyeColour}</span>
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

export default CardPotter
