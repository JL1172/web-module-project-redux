import { ADD_FAVORITE, TOGGLE_FAVORITES, REMOVE_FAVORITE, toggleFavorites } from "../actions/favoritesActions";

const initialState = {
    favoriteMovies : [],
    toggleFavorites : false, 
    savedFavorites : [],
}

export const favoriteReducer = (state = initialState,action) => {
    switch(action.type) {
        case(ADD_FAVORITE) :
        if (!state.toggleFavorites) {
            return({...state, savedFavorites : [...state.savedFavorites, action.payload]})
        } else {
            return({...state, favoriteMovies : [...state.favoriteMovies, action.payload]});
        }
        case(TOGGLE_FAVORITES) :
        if (state.toggleFavorites) {
            return({...state, toggleFavorites : !state.toggleFavorites, savedFavorites : state.favoriteMovies, favoriteMovies : []});
        } else {
            return({...state, toggleFavorites : !state.toggleFavorites, favoriteMovies : state.savedFavorites,  savedFavorites : []});
        }
        case(REMOVE_FAVORITE) :
        if (state.toggleFavorites) {
            return({...state, favoriteMovies : state.favoriteMovies.filter(n=> n.id !== action.payload)});
        } else {
            return({...state, savedFavorites : state.savedFavorites.filter(n=> n.id !== action.payload)});
        }
        default : 
            return(state);
    }
}