import React from 'react'
import moviesData from '../data/movies.json'
import MoviesYearAvg from './MoviesYearAvg'

class Movies extends React.Component {
  state = {
    movies: []
  }

  addRandomMovie = (company) => {
  }

  deleteMovie = (company) => {
  }

  render() {
    return (
      <div className="Movies p-5">
        <div>
          <button className="btn btn-sm btn-primary">Add random movie</button>
        </div>
        

        <ul>TODO: render movies list</ul>

        <MoviesYearAvg/>
      </div>
    )
  }
}

export default Movies
