import {Link} from 'react-router-dom'
import './index.css'

const MovieCard = props => {
  const {movieDetails} = props
  const {id, title, posterPath, voteAverage} = movieDetails

  return (
    <li className="movie-card-container">
      <img className="movie-card-image" alt={title} src={posterPath} />
      <h1 className="movie-title">{title}</h1>
      <div className="rating-view-details">
        <p className="movie-rating">Rating: {voteAverage}</p>
        <Link to={`/movie/${id}`}>
          <button className="view-details-button" type="button">
            View Details
          </button>
        </Link>
      </div>
    </li>
  )
}

export default MovieCard
