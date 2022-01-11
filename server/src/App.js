import React, { useState, useEffect } from "react"
import { MainView } from "./views/main-view/MainView"
import { getInfo } from "./utils/api/aero_api";
import reducer from "./state/redux/reducers/addFavReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import axios from "axios";
import { store } from "./state/redux/store";

const App = () => {
    /* const [charactersHP, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)

    const url = `http://localhost:3000/characters`;

    const getAllCharacters = async () => {
        try {
            
            const resp = await getInfo()
            //console.log("res" + res.data)
           //setLoading(true)
            setLoading(false)
            setCharacters(resp.data)
            

        } catch (e) {
            console.log(e)
        }
    }

    async function getAllCharacter() {
        try{
            setLoading(true)
            const res = await axios.get(url)
            setLoading(false)
            setCharacters(res.data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getAllCharacter()
    }, [])

    const initialState = {
        charactersHP: charactersHP,
        students: [],
        staff: [],
        showStudents: null,
        showCharacters: null,
        showStaff: null,
        
        loading: loading,
        amount: 0,
        favorites: [],
        favorite: false
    } */

    //const store = createStore(reducer, initialState)

    return (
        <Provider store={store}>
            <MainView />
        </Provider>
        )
}

export default App

