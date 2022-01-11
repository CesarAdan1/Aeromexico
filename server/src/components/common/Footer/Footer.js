import React from 'react'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './footer.scss'

const Footer = ({ showMenu, openModal }) => {
    return (
        <>
        <footer className='ft-cont'>
            <div className='ft-cont--its'>
                <div className='ft-cont-lg'>
                    <button
                        className='capitalize ft-cont--btn'
                        onClick={showMenu}
                    >
                        <span>Favoritos</span>
                        <div style={{ marginLeft: '10px' }}>
                            <BookmarkIcon />
                        </div>
                    </button>
                </div>
                <div className='ft-cont-lg'>
                    <button
                        onClick={openModal}
                        className='capitalize ft-cont--btn'
                    >
                        <span>Agregar</span>
                        <div style={{ marginLeft: '10px' }}>
                            <AddCircleOutlineIcon />
                        </div>
                    </button>
                </div>
            </div> 
            {children}
        </footer>
       
        </>
    )
}

/* 
 {modalFavShow ?
                    <span className="ft-cont--fav">
                        {charactersHP.map((favorites) => {
                            const { favorite } = favorites
                            if (favorite) return (
                                <FavMenuItem
                                key={favorite.id} {...favorite} />
                            )
                        })}
                    </span>
                    : null
                }

const mapStateToProps = (store) => {
    //console.log(store)
    const { charactersHP } = store
    return { charactersHP }
} */

export default Footer
