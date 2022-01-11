import {favourite , unfavourite, 
    characters, getStaff, getStudents, amount
} from "../actions";


/* function reducer(state, action) {
    switch(action.type){
        case FILTER_STAFF:
        case FILTER_STUDENTS:
        case ADD_FAVOURITE:
        case DELETE_FAVOURITE: 
        case FAVOURITES:
            let tempHpInfo = state.charactersHP.map(hpInfoItem => {
                if(hpInfoItem.name === action.payload.name){
                    if(state.amount < 5){
                        hpInfoItem = { ...hpInfoItem, favorite: !hpInfoItem.favorite, amount: state.amount++}
                    }else{
                        console.log('Solo puedes agregar hasta 5 personajes favoritos')
                    }
                }
                return hpInfoItem
            })
            return {
                ...state,
                hpInfo: tempHpInfo
            }
        case UNFAVOURITES:
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
} */

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
  
  const favRed = (state=[], action) => {
    if(action.type === favoritesAdd) {
      return state.concat(action.payload)
       
     }
     return state
  }
  
  const reducer = (state = initialState, action) => {
  
    switch(action.type){
      case characters:
        return {
        ...state,
        characters: action.data,
        showCharacters: true
      }
      case getStudents:
        return {
          ...state,
          students: action.data,
          showCharacters: false,
          showStudents: true,
          showStaff: false
        }
      case getStaff:
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