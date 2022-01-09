import {FAVOURITES , UNFAVOURITES } from "../actions";

const initialState = {
    dataHP: [],
    loading: false,
    amount: 0,
    favorite: false
}

function addFavReducer(state = initialState, action) {
    switch(action.type){
        case FAVOURITES :
            let tempDataHP = state.dataHP.map(dataHPItem => {
                if(dataHPItem.name === action.payload.name){
                    if(state.amount < 5){
                        dataHPItem = { ...dataHPItem, favorite: !dataHPItem.favorite, amount: state.amount++}
                    } else {
                        alert('Solo puedes agregar hasta 5 personajes FAVOURITES ')
                    }
                }
                return dataHPItem
            })
            return {
                ...state,
                dataHP: tempDataHP
            }
        case UNFAVOURITES :
            let temporarydataHP = state.dataHP.map(dataHPItem => {
                if(dataHPItem.name === action.payload.name){
                    dataHPItem = { ...dataHPItem, favorite: !dataHPItem.favorite, amount: state.amount--}
                }
                return dataHPItem
            })
            return {
                ...state,
                dataHP: temporarydataHP
            }
        default:
            return state
    }
}

export default addFavReducer;