import { combineReducers } from 'redux';

import { favoriteReducer } from './favoriteReducer';
import reducer from './movieReducer';

export const rootReducer = combineReducers({
    movieState : reducer,
    favoriteMovieState : favoriteReducer, 
})
