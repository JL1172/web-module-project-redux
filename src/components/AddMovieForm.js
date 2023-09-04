import React, { useState } from 'react';
import { addMovie, changeValue } from './../actions/movieActions';
import { connect } from 'react-redux';

import { Link, useHistory } from 'react-router-dom';

const AddMovieForm = (props) => {
    const { push } = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const movieObj = {
            id : Date.now(),
            title : props.title,
            director : props.director,
            metascore : props.metascore,
            genre : props.genre,
            description : props.description,
        }
        props.addMovie(movieObj);
        console.log(movieObj)
        push("/movies/");
    }

    return(<div className="col">
        <div className="modal-dialog">
            <div className="modal-content">
                <form onSubmit={handleSubmit}>
                    <div className="modal-header">						
                        <h4 className="modal-title">Add Movie</h4>
                    </div>

                    <div className="modal-body">					
                        <div className="form-group">
                            <label>Title</label>
                            <input value={props.title} 
                            onChange={(e)=>props.changeValue(e.target.name,e.target.value)} name="title" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Director</label>
                            <input value={props.director} 
                            onChange={(e)=>props.changeValue(e.target.name,e.target.value)} name="director" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Genre</label>
                            <input value={props.genre} 
                            onChange={(e)=>props.changeValue(e.target.name,e.target.value)} name="genre" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Metascore</label>
                            <input value={props.metascore} 
                            onChange={(e)=>props.changeValue(e.target.name,e.target.value)} name="metascore" type="number" className="form-control"/>
                        </div>		
                        <div className="form-group">
                            <label>Description</label>
                            <textarea value={props.description} 
                            onChange={(e)=>props.changeValue(e.target.name,e.target.value)} name="description" className="form-control"></textarea>
                        </div>
                        			
                    </div>
                    <div className="modal-footer">
                        <input type="submit" className="btn btn-success" value="Add"/>
                        <Link to={`/movies`}><input type="button" className="btn btn-default" value="Cancel"/></Link>
                    </div>
                </form>
            </div>
        </div>
    </div>);
}
const mapStateToProps = state => {
    return {
        title : state.movieState.title,
        director : state.movieState.director,
        genre : state.movieState.genre,
        metascore : state.movieState.metascore,
        description : state.movieState.description,
    }
}

export default connect(mapStateToProps,{changeValue,addMovie})(AddMovieForm);