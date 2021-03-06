function Movie({ movie }) {
  return (
    <li>
      {movie.title} - {movie.year}
      <button className="btn btn-sm btn-danger">delete</button>
    </li>
  )
}

export default Movie
