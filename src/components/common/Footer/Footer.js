import React from 'react'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './footer.scss'

const Footer = ({ onClick, onClickModal, children }) => {
    return (
        <footer className='ft-cont' data-testid="footer">
            <div className='ft-cont--its'>
                <div className='ft-cont-lg'>
                    <button
                        className='capitalize ft-cont--btn'
                        onClick={onClick}
                    >
                        <span>Favoritos</span>
                        <div style={{ marginLeft: '10px' }}>
                            <BookmarkIcon />
                        </div>
                    </button>
                </div>
                <div className='ft-cont-lg'>
                    <button
                        onClick={onClickModal}
                        className='capitalize ft-cont--btn'
                    >
                        <span>Agregar</span>
                        <div style={{ marginLeft: '10px' }}>
                            <AddCircleOutlineIcon />
                        </div>
                    </button>
                </div>
            </div>
            <div className="ft-cont--fav">
                {children}
            </div>
        </footer>
    )
}

export default Footer