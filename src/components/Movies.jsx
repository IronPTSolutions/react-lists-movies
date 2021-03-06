import React from 'react'
import moviesData from '../data/movies.json'
import Movie from './Movie'
import MoviesYearAvg from './MoviesYearAvg'

class Movies extends React.Component {
  state = {
    movies: []
  }

  addRandomMovie = () => {
    this.setState(prev => {
      const randomIndex = Math.floor(Math.random() * (moviesData.length - 1))
      const random = moviesData[randomIndex]

      return {
        movies: [random, ...prev.movies]
      }
    })
  }

  deleteMovie = (movie) => {
    this.setState(prev => {
      return {
        movies: prev.movies.filter(m => m !== movie)
      }
    })
  }

  render() {
    const movies = this.state.movies
      .filter(m => !m.genre.includes("Western"))
      .sort((a, b) => Number(b.rate) - Number(a.rate))

    return (
      <div className="Movies p-5">
        <div>
          <button className="btn btn-sm btn-primary" onClick={this.addRandomMovie}>Add random movie</button>
        </div>
        

        <ul>{movies.map(movie => <Movie movie={movie} deleteMovie={this.deleteMovie}/>)}</ul>

        <MoviesYearAvg movies={movies}/>
      </div>
    )
  }
}

export default Movies
