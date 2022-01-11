import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import './container.scss';
import ButtonFilterBy from '../buttons/optionFilter/ButtonFilterBy';
import CardPotter from '../cards/HarryPotterCard/CardPotter';
import { Footer } from 'antd/lib/layout/layout';
import ModalAdd from '../modal/ModalAdd'
import axios from "axios";

const MainContent = ({ 
    changeState,
    characters,
    showCharacters,
    showStudents,
    students,
    filterStudent,
    staff,
    filterStaff,
    showStaff,
    favorites,
    changeStateFav,
    changeStateFavDelete
}) => {
    const [modalShown, toggleModal] = useState(false);
    const [modalFavShow, toggleModalFav] = useState(false)
    const [loading, setLoading] = useState(true)
    const [refresh, setRefresh] = useState(false);
    const [data, setData] = useState([])
    // console.log(charactersHP)
    // const handleStudents = () => {
    //     setActiveStudents(true)
    //     setActiveStaff(false)
    // }

    // const handleStaff = () => {
    //     setActiveStaff(true)
    //     setActiveStudents(false)
    // }

    const getData = async () => {
        try{
            setLoading(true)
            const res = await axios.get('http://localhost:3000/characters')
            changeState(res.data)
            console.log((res.data))
        }catch(e){
            console.log(e)
        } 
    }

    const favorite = (item) => {
        const filter = favorites.filter((element) => element.id === item.id);

        if (filter.length === 0 && favorites.length < 5) {
            changeStateFav(item)
        } else {
            alert("Solo se puede agregar 5 personajes a favoritos")
        }

        if (filter.length === 1 && favorites.length < 5) {
            const index = favorites.indexOf(item);
            if (index !== -1) {
                let newData = favorites.filter((element) => element.id !== item.id);
                changeStateFavDelete(newData)
            }
        }
    }

    const cardItem = (item) => {
        const isFav = favorites.filter((element) => element.id === item.id);
        console.log(item)
        return (
            <CardPotter
                key={uuidv4()}
                info={item}
                addFav={favorite}
                like={isFav.length > 0}
            />
        )
    }

    const dataC = async (data) => {
console.log(data)
        await axios.post('http://localhost:5000/characters', {
            id: uuidv4(),
            name: data.name,
            species: "human",
            gender: data.gender,
            house: "Gryffindor",
            dateOfBirth: data.birthday,
            yearOfBirth: 1980,
            ancestry: "half-blood",
            eyeColour: data.eyecolor,
            hairColour: data.eyehair,
            wand: {
                wood: "holly",
                core: "phoenix feather",
                length: 11
            },
            patronus: "stag",
            hogwartsStudent: data.position === isStudent,
            hogwartsStaff: !(data.position === isStudent),
            actor: "",
            alive: true,
            image: "http://hp-api.herokuapp.com/images/harry.jpg"
        })
            .then(res => {
                getData();
                toggleModal(false);
            })
            .catch(error => {
                console.log('error', error)
            })
    }

    useEffect(() => {
        if (!refresh) {
            getData();
            setRefresh(true);
        }
    }, []);

    const getStudent = async () => {
        const filterStudentData = characters.filter((item) => item.hogwartsStudent);
        await filterStudent(filterStudentData);
    }

    const getStaff = async () => {
        const filterStaffData = characters.filter((item) => item.hogwartsStaff);
        await filterStaff(filterStaffData);
    }

    return (
        <div className='main'>
            <div className='main--sec'>
                <ButtonFilterBy
                    active={showStudents}
                    title="Estudiantes"
                    onClick={() => getStudent()}
                    separate="20px"

                />
                <ButtonFilterBy
                    active={showStaff}
                    title="Staff"
                    onClick={() => getStaff()}
                />
            </div>
            <div>
                {loading ? <p style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%',
                    fontSize: "25px", fontWeight: "600", position: 'fixed', color: 'white'
                }}>Cargando...</p>
                    : <div className='main--sec-all'>
                        {showCharacters && characters.map((item) => cardItem(item))}
                        {showStudents && students.map((item) => cardItem(item))}
                        {showStaff && staff.map((item) => cardItem(item))}
                        {console.log(characters)}
                    </div>
                }
            </div>
            <Footer
                showMenu={() => toggleModalFav(!modalFavShow)}
                openModal={() => toggleModal(!modalShown)}
                children={
                    showFav > 0 ? <div>
                      {favorites.map((fav) => {
                        if(fav){
                          return(
                            <div key={fav.id} className="ft-cont--content">
                              <img className="ft-cont--imagen" src={fav.image} alt={fav.name} />
                              <span className="ft-cont--name">{fav.name}</span>
                              <div className="ft-cont--size-ic" onClick={favorite}>D</div>
                            </div>
                          )
                        } 
                      })
                      }
                    </div>
                    : null
                  }
            />
            <ModalAdd
                show={modalShown}
                toogle={() => toggleModal(!modalShown)}
                showData={dataC}
            />
        </div>
    )
}

const mapStateToProps = state => ({
    characters: state.characters,
    students: state.students,
    staff: state.staff,
    favorites: state.favorites,
    showCharacters: state.showCharacters,
    showStudents: state.showStudents,
    showStaff: state.showStaff,
})

const mapDispatchToProps = dispatch => ({
    changeState(data) {
        dispatch({
            type: "characters",
            data
        })
    },
    filterStudent(data) {
        dispatch({
            type: "filterStudents",
            data
        })
    },
    filterStaff(data) {
        dispatch({
            type: "filterStaff",
            data
        })
    },
    changeStateFav(data) {
        dispatch({
            type: "favoritesAdd",
            data
        })
    },
    changeStateFavDelete(data) {
        dispatch({
            type: "favoritesDelete",
            data
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MainContent)

/* {charactersHP.map((info) => {
    //console.log(info)
    if(info.hogwartsStudent && activeStudent) {
        return (<CardPotter key={info.id} info={info} />)
    } else if(info.hogwartsStaff && activeStaff) {
        return (<CardPotter key={uuidv4()} {...info} />)
    } 
}) */