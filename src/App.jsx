
import { useEffect, useState } from 'react'
import './App.css'
import Footer from './assets/components/Footer/Footer'
import Header from './assets/components/Header/Header'
import MovieCard from './assets/components/MovieCard/MovieCard'
import MovieList from './assets/components/MovieList/MovieList'

function App() {

  const [movies, setMovies] = useState([])
  const [moviesFiltered, setMoviesFiltered] = useState([])
  const [starRating,setStarRating] = useState(0)
  //console.log(movies)

  const fetchMovies = async() => {
    const response  = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=de6807c13d206c1db3e9fdd3b2192033");
    const data = await response.json();
    setMovies(data.results);
    setMoviesFiltered(data.results);
  };

  useEffect(()=> {
    fetchMovies();
  }, [])

  const handleFilter = (rating) => {
    if(rating === starRating){ //resets filter
      setStarRating(0);
      setMovies(moviesFiltered);
    } else {
      setStarRating(rating)
      const filtered = moviesFiltered.filter((movie)=> movie.vote_average >= rating)
      setMovies(filtered)
    }
  }

  return (
    <>
      <Header />
      <MovieList handleFilter={handleFilter}/>
      <div className='movie-card-list'>
      {movies.map(movie => (<MovieCard key={movie.id} movie={movie}/>))}
      </div>
      <Footer />
    </>
  )
}

export default App
