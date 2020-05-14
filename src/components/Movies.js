import React from 'react'

/**
 * The `DEFAULT_IMAGE_PLACEHOLDER  ` variable
 * is as a result of some movies gotten from the API do not have a placeholder image,
 * so instead of rendering no images,
 * I decided to render this, as the default one.
 */
const DEFAULT_IMAGE_PLACEHOLDER =
    'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg'

export default function Movies({ movie }) {
    const poster =
        movie.Poster === 'N/A' ? DEFAULT_IMAGE_PLACEHOLDER : movie.Poster

    return (
        <div className="movie__base box-shadow">
            <div className="movie__img__desc">
                <img
                    src={poster}
                    alt={`This movie's title is: ${movie.Title}`}
                />
            </div>
            <div className="mov__description">
                <h2>{movie.Title}</h2>
                <p>({movie.Year})</p>
            </div>
        </div>
    )
}
