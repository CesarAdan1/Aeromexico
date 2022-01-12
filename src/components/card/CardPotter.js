import React from 'react'
import './card-potter.scss'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';


const CardPotter = ({item, addFav, like}) => {
  const { eyeColour, hairColour, name, dateOfBirth, gender,
    house, alive, image, hogwartsStudent, unfavourite,
     } = item

  const addToFav = (data) => {
    addFav(data)
  }

  return (
    <div className='card' data-testid="card">
      <div className={`card--left ${house === "Slytherin" ? "slytherin-color"
        : house === "Ravenclaw" ? "ravenclaw-color"
          : house === "Hufflepuff" ? "hufflepuff-color"
            : house === "Gryffindor" ? "griphyndor-color"
              : house === "" ? "empty"
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
          <span onClick={() => addToFav(item)}>

              {like
                ? <BookmarkIcon  />
                : <BookmarkBorderIcon  />
                }
          
          </span>
        </span>
            <h2 className='card--h2'>{name}</h2>
        <div className='card--cont2-sub2'>
         
          <div className='card--cont2-sub3'>
            <div className="card--cont2-sub3-element">
              <p className='card--cont2-p'>Cumpleanios: </p>
              <p className='card--cont2-description'>{dateOfBirth === null || dateOfBirth === undefined || dateOfBirth === "" ? "Desconocido" : dateOfBirth}</p>
            </div>
            <div className="card--cont2-sub3-element">
              <p className='card--cont2-p'>Genero: </p>
              <p className='card--cont2-description'>{gender}</p>
            </div>
            <div className="card--cont2-sub3-element">
              <p className='card--cont2-p'>Color de ojos: </p>
              <p className='card--cont2-description'>{eyeColour === "" ? "Dato desconocido" : eyeColour}</p>
            </div>
            <div className="card--cont2-sub3-element">
              <p className='card--cont2-p'>Color de pelo: </p>
              <p className='card--cont2-description'>{hairColour}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPotter