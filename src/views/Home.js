import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ModalAdd from "../components/Modal/ModalAdd";
import DeleteIcon from '@mui/icons-material/Delete';
import CardPotter from "../components/card/CardPotter";
import Header from '../components/common/Header/Header'
import Footer from '../components/common/Footer/Footer'
import HarryP from '../static/assets/harry-potter.svg'
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const Home = (props) => {
  const {
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
    unfavourite,
    changeStateFav,
    changeStateFavDelete
  } = props;

  const [showModal, setShowModal] = useState(false);
  const [showFav, setShowFav] = useState(true);
  const [isRefresh, setIsRefresh] = useState(false);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true)
    await axios.get('http://localhost:3000/characters')
      .then(res => {
        changeState(res.data);
      })
      .catch(error => {
        console.log('error', error)
      })

      setLoading(false)
  }

  const noFavorite = () => {

  }
  const favorite = (item) => {
    const filter = favorites.filter((element) => element.id === item.id);
    console.log(filter)
    if (filter.length === 0 && favorites.length < 5) {
      changeStateFav(item)
    }else {
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

  const showItems = (item) => {
    console.log(item)
    const like = favorites.filter((element) => element.id === item.id);
    console.log(like)
    return (
      <CardPotter
        key={item.name}
        item={item}
        addFav={favorite}
        like={like.length > 0}
      />
    )
  }

  const dataForm = async (data) => {

    await axios.post('http://localhost:3000/characters', {
      id: uuidv4() + 1,
      name: data.name,
      species: "human",
      gender: data.gender,
      house: "Gryffindor",
      dateOfBirth: data.birthday,
      ancestry: "half-blood",
      eyeColour: data.eyecolor,
      hairColour: data.eyehair,
      hogwartsStudent: data.position === "student",
      hogwartsStaff: data.position === "staff",
      alive: true,
      image:  "http://hp-api.herokuapp.com/images/harry.jpg"
    })
      .then(res => {
        getData();
        setShowModal(false);
      })
      .catch(error => {
        console.log('error', error)
      })
  }

  useEffect(() => {

    if (!isRefresh) {
      getData();
      setIsRefresh(true);
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

  const colorEstudent = showStudents ? "buttons-style button-active" : "buttons-style button-normal";
  const colorStaff = showStaff ? "buttons-style button-active" : "buttons-style button-normal";

  return (
    <div className="main">
      <Footer 
        onClick={() => setShowFav(!showFav)}
        onClickModal={() => setShowModal(!showModal)}
        children={
          showFav > 0 ? 
          <>
            {favorites.map((fav) => {
              if(fav){
                return(
                  <div key={uuidv4()} className="ft-cont--content">
                    <img className="ft-cont--imagen" src={fav.image} alt={fav.name} />
                    <span className="ft-cont--name">{fav.name}</span>
                    <div className="ft-cont--size-ic" onClick={favorite}>
                      <DeleteIcon />
                    </div>
                  </div>
                )
              } 
            })
            }
            </>
          : null
        }
      />
        <Header />
      <div className="buttons">
        <span className={colorEstudent} style={{ marginRight: '10%' }} onClick={() => getStudent()}>ESTUDIANTES</span>
        <span className={colorStaff} onClick={() => getStaff()}>STAFF</span>
      </div> {!loading ?
        
      <div className="main--sec-all">
       
        {showCharacters && characters.map((item) => showItems(item))}
        {showStudents && students.map((item) => showItems(item))}
        {showStaff && staff.map((item) => showItems(item))}
      </div>
      : <p className="main--sec-all">Cargando...</p>
    }
      <ModalAdd
        visible={showModal}
        toogle={() => setShowModal(!showModal)}
        actionData={dataForm}
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
  unfavourite: state.unfavourite
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
      type: "favorite",
      data
    })
  },
  changeStateFav(data) {
    dispatch({
      type: "unfavorite",
      data
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
/* 
<footer className='ft-cont'>
            <div className='ft-cont--its'>
                <div className='ft-cont-lg'>
                    <button
                        className='capitalize ft-cont--btn'
                        onClick={() => setShowFav(!showFav)}
                    >
                        <span>Favoritos</span>
                        <div style={{ marginLeft: '10px' }}>
                            <BookmarkIcon />
                        </div>
                    </button>
                </div>
                <div className='ft-cont-lg'>
                    <button
                        onClick={() => setShowModal(!showModal)}
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
            {
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
            </div>
        </footer> */