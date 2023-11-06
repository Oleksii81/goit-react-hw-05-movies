import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'; 
import { getMovieCast } from '../../api/api';
import { CastStyled } from './Cast.styled';

const Cast = () => {
  const [castList, setCastList] = useState([]);
  const [hasCast, setHasCast] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId).then(data => {
      setCastList(data.cast);
      setHasCast(data.cast.length > 0);
    });
  }, [movieId]);

  return (
    <>
      {!hasCast && <div>Sorry, there is no cast information for this movie</div>}
      <CastStyled>
        {hasCast &&
          castList.map(({ id, name, profile_path, character }) => (
            <li key={id} className="cast-item">
              <img
                className="photo-img"
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : `http://www.suryalaya.org/images/no_image.jpg`
                }
                alt="actor"
                loading="lazy"
                width={120}
                height={180}
              />
              <h4 className="name-title">{name}</h4>
              <p className="character">{character}</p>
            </li>
          ))}
      </CastStyled>
    </>
  );
};

export default Cast;
