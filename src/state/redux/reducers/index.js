import {favourite , unfavourite, 
    characters, filterStudents, filterStaff, amount
} from "../actions";

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
        return {
          
          favorites: state.favorites.concat(action.data),
        }
      case unfavourite:
        return {
          favorites: [
            ...state.favorites
          ]
        }
      default:
        return state
    }
  }  
export default reducer;