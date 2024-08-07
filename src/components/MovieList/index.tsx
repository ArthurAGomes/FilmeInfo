'use client';
import {useState, useEffect} from 'react';
import axios from 'axios';
import MovieCard from '../MovieCard';
import { Movie } from '@/types/movie';
import ReactLoading from 'react-loading';
import './index.scss';

export default function MovieList(){
    const [movies, setMovies]= useState<Movie[]>([]);
    const [isLoading, setIsLoading]= useState<boolean>(true);
    useEffect(()=>{
        getMovies();
    }, []);

    const getMovies = async () =>{
     await axios({
        method:'get',
        url:'https://api.themoviedb.org/3/discover/movie',
        params:{
            api_key:'a30900a38967fa4abfb7916e7950ff61',
            language:'pt-BR'
        }
    }).then(response =>{
        setMovies(response.data.results);
    })

    setIsLoading(false);
}

if(isLoading){
    return(
        <div className='loading-container'>
            <ReactLoading type='spin' color="#6046ff" height={300} width={375} />
        </div>
    )
}
    return(
        <ul className='movie-list'>
            {movies.map((movie)=>
            <MovieCard
            key={movie.id}
            movie={movie}
            />
            )}
        </ul>
    );
}