import React from 'react'
import './CssMovieCard.css'
import Star from '../../images/star.png'

const MovieCard = () => {
  return (
    <div className='movie-card-container'>
    <a href="#MovieCard" className='movie-card'>
      <img src="https://images.unsplash.com/photo-1611419010196-a360856fc42f?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
       alt="Movie" className='movie-img'/>
       <div className="movie-details">
        <h3>Man Standing</h3>
        <div className='movie-date center'>
          <p>23 / 01 / 2050</p>
          <p className='number-rating'> 8.0 <img src={Star} className='star-rating' alt="star-rating" /></p>
        </div>
        <p className='movie-description'>Horror</p>
       </div>
    </a>
    </div>
  )
}

export default MovieCard
