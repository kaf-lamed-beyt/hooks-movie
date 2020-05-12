import React from 'react' 

const defaultMovieImage = 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg'

export default function Movies ({ movie }) {
    const poster = movie.poster === 'N/A' ? defaultMovieImage : movie.poster

    return ( 
        <div className="movie__base box-shadow">
            <h2>{movie.Title}</h2>
            <div className="movie__img__desc">
                <img src={poster} alt={`This movie's title is: ${movie.title}`}/>
            </div>
        </div>     
    )
}