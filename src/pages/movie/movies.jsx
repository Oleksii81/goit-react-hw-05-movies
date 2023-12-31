import { Link, useSearchParams, useLocation } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { searchMovies } from '../../api/api';
import SearchBar from '../../components/Searchbar/SearchBar';
import { MoviesContainer } from './movie.styled';


const Movies = () => {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const movieName = searchParams.get('movieName') ?? '';
    const [moviesList, setMoviesList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
  
    useEffect(() => {
        if (movieName === '') {
          return;
        }
        setMoviesList([]);
        setIsLoading(true);
      
        const fetchData = async () => {
            try {
              const data = await searchMovies(movieName);
              if (!data.results.length) {
                setError(true);
                toast.error('There is no movies with this request. Please, try again');
              } else {
                setError(false);
                setMoviesList(data.results);
              }
            } catch (error) {
              setError(true);
              toast.error('Error occurred while fetching movies:', error);
            } finally {
              setIsLoading(false);
            }
          };
        
          fetchData();
        }, [movieName]);
      
    const onSubmit = value => {
            if (movieName === value) {
              return toast.info('Please search something else');
            }
            setSearchParams(value !== '' ? { movieName: value } : {});
          };
    
  
    const path = 'https://image.tmdb.org/t/p/w300';
  
    return (
      <MoviesContainer>
        <SearchBar className="searchbar" onSubmit={onSubmit} />
        {error && <p>We can't find any movie with this name</p>}
        <ul className="search-movie-list">
          {moviesList.map(movie => {
            return (
              <li className="search-movie-item" key={movie.id}>
                <Link
                  className="search-movie-link"
                  to={`/movies/${movie.id}`}
                  state={{ from: location }}
                >
                  <img
                    className="search-movie-img"
                    width={210}
                    height={315}
                    src={
                      movie.poster_path
                        ? path + movie.poster_path
                        : 'http://www.suryalaya.org/images/no_image.jpg'
                    }
                    alt={movie.original_title}
                  />
                  <p className='original-title'>{movie.title}</p>
                  
                </Link>
              </li>
            );
          })}
        </ul>
        {isLoading && <div><Loader /></div>}
      </MoviesContainer>
    );
  };
  export default Movies;