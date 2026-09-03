import React from 'react'
import './CssMovieList.css'

const MovieList = () => {
  return (
    <section className='movie-list'>
      <header className='center movie-header'>
        <h2>Popular</h2>
        <div className='center'>
          <ul className='movie-filter center'>
            <li className='movie-filter-item'>8 +</li>
            <li className='movie-filter-item'>7 +</li>
            <li className='movie-filter-item'>6 +</li> 
          </ul>
          <select name="" id="" className="movie-sorting">
            <option value="">Sort By</option>
            <option value="">Date</option>
            <option value="">Rating</option>
          </select>
          <select name="" id="" className="movie-sorting">
            <option value="">Acending</option>
            <option value="">Decending</option>
          </select>
        </div>
      </header>
    </section>
  )
}

export default MovieList
