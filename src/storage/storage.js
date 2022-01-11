import { combineReducers, createStore } from "redux";

const characters = "characters";
const filterStudents = "filterStudents";
const filterStaff = "filterStaff";
const favoritesAdd = "favoritesAdd";
const favoriteDelete = "favoritesDelete";

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

const reducerAdd = (state = initialState, action) => {

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
    case favoritesAdd:
      return {
        ...state,
        favorites: state.favorites.concat(action.data),
      }
    case favoriteDelete:
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
/*   if (action.type === characters) {
    
  }

  if(action.type === filterStudents) {
    return {
      ...state,
      students: action.data,
      showCharacters: false,
      showStudents: true,
      showStaff: false
    }
  }

  if(action.type === filterStaff) {
    return {
      ...state,
      staff: action.data,
      showCharacters: false,
      showStudents: false,
      showStaff: true
    }
  }

  if(action.type === favoritesAdd) {
    return {
      ...state,
      favorites: state.favorites.concat(action.data),
    }
  }

  if(action.type === favoriteDelete) {
    let temporaryHpInfo = state.hpInfo.map(hpInfoItem => {
      if(hpInfoItem.name === action.payload.name){
          hpInfoItem = { ...hpInfoItem, favorites: !hpInfoItem.favorites, amount: state.amount--}
      }
      return hpInfoItem
  })
  return {
      ...state,
      characters: temporaryHpInfo
  }
  }
  
  return state
} */


const reducer = combineReducers({
  favourite: favRed,
  reducerAdd: reducerAdd
})

export default createStore(reducerAdd)