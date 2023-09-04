import { ADD_MOVIE, DELETE_MOVIE, CHANGE_VALUE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database",
    title: "",
    director: "",
    genre: "",
    metascore: 0,
    description:"",
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case DELETE_MOVIE:
            return {
                movies: state.movies.filter(item=>(action.payload !== item.id))
            }
        case CHANGE_VALUE :
            return{...state, [action.payload.name] : action.payload.value}
        case ADD_MOVIE :
            return {...state, movies : [...state.movies, action.payload], title : "", director : "", genre : "", metascore : "", description : ""}
        default:
            return state;
    }
}

export default reducer;