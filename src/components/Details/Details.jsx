import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { useHistory, useParams, Link } from 'react-router-dom';
import './Details.css';

function Details (){

    const movie = useSelector(store => store.movies)
    const params = useParams();
    console.log('this is the store for movies', movie);
    console.log('params', params);
    
    const selectedMovie = movie[params.id - 1]

    //useEffect(())

    if (selectedMovie === undefined || null){
        return ( <h2> Loading</h2>)
    }
    

return (
    <>
    <div className="movieBox2">
        <div className="title">
            <h3>{selectedMovie.title}</h3>
        </div>
        <div className="poster">
             <img src={selectedMovie.poster} alt="selected movie" />
        </div>
        <div className="description">
             <p>{selectedMovie.description}</p>
        </div>

    </div>
    
    </>

)
}

export default Details;