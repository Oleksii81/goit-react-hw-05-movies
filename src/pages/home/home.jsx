import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../../api/api';
import Loader from '../../components/Loader/Loader';
import { HomeContainer } from './home.styled';


const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    getTrendingMovies().then(data => {
      setTrendMovies(data.results);
      setIsLoading(false);
    });
  }, []);
  const path = 'https://image.tmdb.org/t/p/w300';
  return (
    <HomeContainer>
      <h1 className="wellcome-title">Wellcome to Movie Land</h1>
      <h3 className="popular-title">Most popular movies today</h3>
      <ul className="top-list">
        {trendMovies.map(movie => (
          <li key={movie.id}>
            <Link
              className="top-item"
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              {/* {movie.original_title || movie.name} */}
              <img src={path + movie.poster_path} alt={movie.original_title} />
            </Link>
          </li>
        ))}
        {isLoading && <Loader />}
      </ul>
    </HomeContainer>
  );
};
export default Home;