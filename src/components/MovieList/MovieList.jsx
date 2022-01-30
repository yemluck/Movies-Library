import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const history= useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const selectMovie = (movie) => {
        console.log('in selectMovie');
        history.push(`/details/${movie.id}`)
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div 
                        className="movieBox"
                        key={movie.id} 
                        onClick={() => selectMovie(movie)}
                        >


                            <h3>{movie.title}</h3>
                            <img src={movie.poster} 
                            alt={movie.title}
                           
                            />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;