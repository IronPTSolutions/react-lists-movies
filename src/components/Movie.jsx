function Movie({ movie, deleteMovie }) {
  return (
    <li>
      {movie.title} - {movie.year}
      <button className="btn btn-sm btn-danger" onClick={() => deleteMovie(movie)}>delete</button>
    </li>
  )
}

export default Movie
