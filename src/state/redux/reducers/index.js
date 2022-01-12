import {favourite , unfavourite, 
    characters, filterStudents, filterStaff, amount,
    CHARACTERS, FILTERSTUDENTS, FILTERSTAFF, FAVOURITE,
  UNFAVOURITE, AMOUNT
} from "../types";


const initialState = {
    characters: [],
    students: [],
    staff: [],
    favorites: [],
    unfavourite: [],
    showCharacters: null,
    showStudents: null,
    showStaff: null,
    amount: 0
  }
  
  const reducer = (state = initialState, action) => {
  
    switch(action.type){
      case characters:
        return {
        ...state,
        characters: action.data,
        showCharacters: true
      }
      case filterStudents:
        return {
          ...state,
          students: action.data,
          showCharacters: false,
          showStudents: true,
          showStaff: false
        }
      case filterStaff:
        return {
          ...state,
          staff: action.data,
          showCharacters: false,
          showStudents: false,
          showStaff: true
        }
      case favourite:
        let inc = (state.amount).length < 5 
        ? favourites =+ favourites 
        : "Solo puedes agregar 5 elementos"
        return {
          favorites: state.favorites.concat(action.data),
          amount: inc
        }
      case unfavourite:
        let dec = (state.amount).length === 1 
        ? favourites =- favourites 
        : "No hay elementos"
        return {
          favorites: state.favorites,
          amount: dec
        }
      default:
        return state
    }
  }  
export default reducer;

export const hpReducer = (state = initialState, action) => {
  switch(action.type){
    case CHARACTERS:
      return {
        ...state,

      }
    default:
      return state
  }
}