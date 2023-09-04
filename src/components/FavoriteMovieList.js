import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { removeFavorite } from '../actions/favoritesActions';


const FavoriteMovieList = (props) => {
    const favorites = props.favoriteMovie;

    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
            {favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span onClick = {()=> props.removeFavorite(movie.id)} className="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            }) 
}
    </div>);
}

const mapStateToProps = state => {
    
    return {
        favoriteMovie : state.favoriteMovieState.favoriteMovies,
        toggledFavorites : state.favoriteMovieState.toggleFavorites,
    }
}
export default connect(mapStateToProps,{removeFavorite})(FavoriteMovieList);