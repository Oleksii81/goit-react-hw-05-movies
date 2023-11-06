import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from '../../api/api';
import { ReviewsStyled } from './Reviews.styled';

const Reviews = () => {
  const [reviewsList, setReviewsList] = useState([]);
  const [hasReviews, setHasReviews] = useState(true);

  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(data => {
      setReviewsList(data.results);
      setHasReviews(data.results.length > 0);
    });
  }, [movieId]);

  return (
    <>
      {!hasReviews && <div>Sorry, we don't have any review for this movie</div>}
      <ReviewsStyled>
        {hasReviews &&
          reviewsList.map(({ author, content, id }) => (
            <li key={id} className="reviews-item">
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
      </ReviewsStyled>
    </>
  );
};

export default Reviews;
