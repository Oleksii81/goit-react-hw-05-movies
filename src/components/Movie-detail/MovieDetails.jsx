import { useRef } from 'react';
import { Suspense } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from '../../api/api';
import { MovieDetailsStyled } from './MovieDetails.styled'

const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId).then(data => setMovieDetail(data));
  }, [movieId]);

  const {
    original_title,
    overview,
    genres,
    poster_path,
    vote_average,
    release_date,
    vote_count,
  } = movieDetail;

  const date = new Date(release_date);

  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  const formattedDate = date.toLocaleDateString('en-US', options);

  return (
    <MovieDetailsStyled>
      <Link to={backLinkLocationRef.current} className="back-to-main-link">
        Back to main{' '}
      </Link>
      <div className="movie-info-wrapper">
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : `http://www.suryalaya.org/images/no_image.jpg`
          }
          width={320}
          loading="lazy"
          alt={original_title}
        />
        <div className="movie-info">
          <h2>{original_title}</h2>
          <h3>{formattedDate}</h3>
          <ul className="ganres">
            {genres &&
              genres.length &&
              genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </ul>
          <p className="owerview">{overview}</p>
          <h4>Vote total: {vote_count}</h4>
          <h4>Average: {vote_average}</h4>
        </div>
      </div>
      <div>
        <ul className="nav-list">
          <li>
            <Link to="cast" className="nav-link">
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" className="nav-link">
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </MovieDetailsStyled>
  );
};

export default MovieDetails;