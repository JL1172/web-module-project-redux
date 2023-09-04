export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const CHANGE_VALUE = "CHANGE_VALUE"; 

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}
export const changeValue = (name,value) => {
    return {type : CHANGE_VALUE, payload : {name : name, value : value}}
}
export const addMovie = (newMovie) => {
    return{type : ADD_MOVIE, payload : newMovie}
}
