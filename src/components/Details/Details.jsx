import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { useHistory, useParams, Link } from 'react-router-dom';
import './Details.css';

function Details (){
    // import useParams
    const params = useParams();
    console.log('params', params);

    // Bring local state for particular selected movie
    const movie = useSelector(store => store.movies[params.id - 1]);
    
   
    // conditional rendering
    if (movie === undefined || null){
        return ( <h2> Loading</h2>)
    }
    

return (
    <>
    <div className="movieBox2">
        <div className="title">
            <h3>{movie.title}</h3>
        </div>
        <div className="poster">
             <img src={movie.poster} alt="selected movie" />
        </div>
        <div className="description">
             <p>{movie.description}</p>
        </div>
    </div>
    {/*  Link to return back to home page */}
    <Link to="/"><button>Back to Home 🏠 </button></Link>
    
    </>

)
}

export default Details;