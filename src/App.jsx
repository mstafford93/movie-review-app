
import { useEffect } from 'react'
import './App.css'
import Footer from './assets/components/Footer/Footer'
import Header from './assets/components/Header/Header'
import MovieCard from './assets/components/MovieCard/MovieCard'
import MovieList from './assets/components/MovieList/MovieList'

function App() {

  const fetchMovies = async() => {
    const response  = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=de6807c13d206c1db3e9fdd3b2192033");
    const data = await response.json();
    console.log(data);
  };

  useEffect(()=> {
    fetchMovies();
  }, [])

  return (
    <>
      <Header />
      <MovieList />
      <MovieCard />
      <main>Movie Review App Main Section</main>
      <Footer />
    </>
  )
}

export default App
