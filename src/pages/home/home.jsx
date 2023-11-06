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
    try {
      getTrendingMovies().then(data => {
        setTrendMovies(data.results);
      });
    } catch (error) {
      console.error('Error occurred while fetching trending movies:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);
  
  const path = 'https://image.tmdb.org/t/p/w300';
  return (
    <HomeContainer>
      <h1 className="wellcome-title">Trending Movies</h1>
      <ul className="top-list">
        {trendMovies.map(movie => (
          <li className="movie-card" key={movie.id}>
            <Link
              className="top-item"
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              <img 
              className='movie-img'
              width={210}
              height={315}
              src={path + movie.poster_path} alt={movie.original_title} />
            </Link>
            <p className='original-title'>{movie.original_title}</p>
          </li>
        ))}
      </ul>
      <div>{isLoading && <Loader />}</div>
    </HomeContainer>
  );
};
export default Home;