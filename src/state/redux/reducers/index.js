import {favourite , unfavourite, 
    characters, filterStudents, filterStaff, amount
} from "../actions";

const initialState = {
    characters: [],
    students: [],
    staff: [],
    favorites: [],
    noFavorites: [],
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
        return {
          ...state,
          favorites: state.favorites.concat(action.data),
        }
      case unfavourite:
        let temporaryHpInfo = state.charactersHP.map(hpInfoItem => {
          if(hpInfoItem.name === action.payload.name){
              hpInfoItem = { 
                  ...hpInfoItem, favorite: !hpInfoItem.favorite, 
                  amount: state.amount--
              }
          }
          return hpInfoItem
      })
      return {
          ...state,
          charactersHP: temporaryHpInfo
      } 
      default:
        return state
    }
  }  
export default reducer;