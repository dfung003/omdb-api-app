import { useState } from "react";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";


export default function App() {
    const apiKey = '3e9968c7';
    //State to hold movie data
    const [movie, setMovie] = useState(null);

    //Function to getMovies
    const getMovie = async (searchTerm) => {
        try {
            const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`);
            const data = await response.json();
            setMovie(data);
        } catch (error) {
            console.error(error)
        }

    }

    return (
        <div className="App">
            <h1 className="header">OMDB</h1>
            <Form moviesearch={getMovie} />
            <MovieDisplay movie={movie} />
        </div>
    )
}