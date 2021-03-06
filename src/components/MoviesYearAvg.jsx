function MoviesYearAvg({ movies }) {
  const avg = movies.length
    ? movies.reduce((acc, el) => acc + Number(el.year), 0) / movies.length
    : 0

  return (
    <div className="MoviesYearAvg">
      {Math.round(avg)}
    </div>
  )
}

export default MoviesYearAvg
