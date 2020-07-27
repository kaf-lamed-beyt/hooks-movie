import React, { useState, useEffect } from 'react'
import Header from './Header'
import Movies from './Movies'
import Search from './Search'
import Loader from './Loader'

// The Omdb movie API
const movie_API_Endpoint = 'https://www.omdbapi.com/?s=man&apikey=4a3b711b'

export default function App() {
    const [movies, setMovies] = useState([])
    const [errMessage, setErrMessage] = useState(null)
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        fetch(movie_API_Endpoint)
            .then((response) => response.json())
            .then((jsonResponse) => {
                setMovies(jsonResponse.Search)
                setLoader(false)
            })
    }, [])

    const search = (searchKeyword) => {
        setLoader(true)
        setErrMessage(null)

        fetch(`https://www.omdbapi.com/?s=${searchKeyword}&apikey=4a3b711b`)
            .then((response) => response.json())
            .then((jsonResponse) => {
                if (jsonResponse.Response === 'True') {
                    setMovies(jsonResponse.Search)
                    setLoader(false)
                } else {
                    setErrMessage(jsonResponse.Error)
                    setLoader(false)
                }
            })
    }

    return (
        <div className="app__base">
            <div>
                <Header text="Hello movies  😎" />
                <Search search={search} />
            </div>
            <div className="movies">
                {loader && !errMessage ? (
                    <Loader />
                ) : errMessage ? (
                    <div className="errMessage">{errMessage}</div>
                ) : (
                    movies.map((movie, index) => (
                        <Movies key={`${index}-${movie.Title}`} movie={movie} />
                    ))
                )}
            </div>
        </div>
    )
}
