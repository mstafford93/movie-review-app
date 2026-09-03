
import './App.css'
import Footer from './assets/components/Footer/Footer'
import Header from './assets/components/Header/Header'
import MovieCard from './assets/components/MovieCard/MovieCard'
import MovieList from './assets/components/MovieList/MovieList'

function App() {
  

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
