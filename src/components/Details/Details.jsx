import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { useHistory, useParams, Link } from 'react-router-dom';
import './Details.css';

function Details (){
    // import useParams
    //const dispatch = useDispatch();
    const params = useParams();
    console.log('params', params);



    // Bring local state for particular selected movie
    const movie = useSelector(store => store.movies[params.id - 1]);
    const genre = useSelector(store => store.genres[params.id - 1]);

    console.log('Genre is:', genre);
   
    // conditional rendering
    if (movie === undefined || null){
        return ( <>
        <h2> Loading</h2>
        <Link to="/"><button> Back </button></Link>
        </>)
    }
    

return (
    <>
    
        <div className="movieBox2">
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt="selected movie" />
            <p>{genre.genre_name}</p>
        </div>
        <div className="description">
             <p>{movie.description}</p>
        </div>
    
    {/*  Link to return back to home page */}
    <Link to="/"><button>Back to Home 🏠 </button></Link>
    
    </>

)
}

export default Details;