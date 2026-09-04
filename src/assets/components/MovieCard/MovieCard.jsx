import React from 'react'
import './CssMovieCard.css'
import PropTypes from 'prop-types'
import Star from '../../images/star.png'

const MovieCard = ({movie}) => {
  return (
    <div className='movie-card-container'>
    <a href={`https://www.themoviedb.org/movie/${movie.id}`} target='_blank' className='movie-card'>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
       alt="Movie" className='movie-img'/>
       <div className="movie-details">
        <h3>{movie.title}</h3>
        <div className='movie-date center'>
          <p>{movie.release_date}</p>
          <p className='number-rating'> {movie.vote_average} <img src={Star} className='star-rating' alt="star-rating" /></p>
        </div>
        <p className='movie-description'>{movie.overview.slice(0,50)+"..."}</p>
       </div>
    </a>
    </div>
  )
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string
  })
}

export default MovieCard
