import React, {useState} from 'react'
import ModalAdd from '../../modal/ModalAdd';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { v4 as uuidv4 } from "uuid";
import {connect} from "react-redux";
import './footer.scss'
import InputField from '../../inputs/ifield/InputField';
import { CheckBox } from '@mui/icons-material';

const Footer = () => {
    const [modalShown, toggleModal] = useState(false);
    const [modalFavShow, toggleModalFav] = useState(false)
    const [nombre, setNombre] = useState("")
    const [birthday, setBirthday] = useState("")
    const [eyedColor, setEyedColor] = useState("")
    const [hairColor, setHairColor] = useState("")
    const [genre, setGenre] = useState("")
    const [position, setPosition] = useState("")
    const [photo, setPhoto] = useState("")

    const showModal = () => {
        toggleModal(true)
    }

    const hideModal = () => {
        toggleModal(false)
    }

    const showMenu = () => {
        toggleModalFav(!modalFavShow)
    }

    return (
        <>
        <footer className='ft-cont'>
            <div className='ft-cont--its'>
                <div onClick={showModal} 
                    className='ft-cont-lg'>
                    <button className='capitalize ft-cont--btn'>
                        <span>Favoritos</span>
                        <div style={{marginLeft: '10px'}}>
                           <BookmarkIcon /> 
                        </div>
                        
                    </button>
                </div>
                <div className='ft-cont--line'></div>
                <div className='ft-cont-lg'>
                    <button onClick={showMenu} 
                        className='capitalize ft-cont--btn'
                    >
                        <span>Agregar</span>
                        <div style={{marginLeft: '10px'}}>
                           <AddCircleOutlineIcon /> 
                        </div>
                    </button>
                </div>
            </div>
        </footer>
        {<div>
            Hello
        </div>
        }
        {
        <ModalAdd
            title="Agrega un personaje"
            onClickShow={modalShown}
            onClickClose={hideModal}
            children={
                <>
                <section className='modal-add--sec1'>
                    <InputField 
                        labelTitle="Nombre"
                        type="text"
                    />
                    <InputField 
                        type="date"
                        labelTitle="Cumpleanios"

                    />
                    <InputField 
                        labelTitle="Color de ojos"
                        type="text"
                    />
                    <InputField 
                        labelTitle="Color de Pelo"
                        type="text"
                    />
                </section>
                <section className='modal-add--sec2'>
                    <div className='modal-add--sec2-i1A'>
                        <div className='modal-add--sec2-i1'>
                            <span className='modal-add--sec2-i1-T'>Genero</span>
                            <CheckBox 
                                
                                titleCheckbox="Mujer"
                            />
                            <CheckBox 
                                titleCheckbox="Hombre"
                            />
                        </div>
                        <div>
                            <span className='modal-add--sec2-i1-T'>Posicion</span>
                            <CheckBox 
                                titleCheckbox="Estudiante"
                            />
                            <CheckBox 
                                titleCheckbox="Staff"
                            />
                        </div>
                    </div>
                </section>
                <section className='modal-add--sec3'>

                </section>
                </>
            }
        />

        }
        </>
    )
}

const mapStateToProps = (store) => {
    const {dataHP} = store
    return {dataHP}
}

export default connect(mapStateToProps)(Footer)
