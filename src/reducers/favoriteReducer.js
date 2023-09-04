import { ADD_FAVORITE, TOGGLE_FAVORITES, REMOVE_FAVORITE } from "../actions/favoritesActions";

const initialState = {
    favoriteMovies : [],
    toggleFavorites : false, 
}

export const favoriteReducer = (state = initialState,action) => {
    switch(action.type) {
        case(ADD_FAVORITE) :
            return({...state, favoriteMovies : [...state.favoriteMovies, action.payload]});
        case(TOGGLE_FAVORITES) :
            return({...state, toggleFavorites : !state.toggleFavorites});
        case(REMOVE_FAVORITE) :
            return({...state, favoriteMovies : state.favoriteMovies.filter(n=> n.id !== action.payload)});
        default : 
            return(state);
    }
}