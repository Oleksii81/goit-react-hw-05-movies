import { Routes, Route } from 'react-router-dom';
import Reviews from './Reviews/Reviews';
import Cast from './Cast/Cast';
import SharedLayout from './SharedLayout/SharedLayout';
import NotFound from  '../pages/not-found/NotFound';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/home/home'));
const Movies = lazy(() => import('../pages/movie/movies'));
const MovieDetails = lazy(() =>
  import('./Movie-detail/MovieDetails')
);

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Home/>} />
          <Route path="movies" element={<Movies/>} />
          <Route path="movies/:movieId" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast/>} />
            <Route path="reviews" element={<Reviews/>} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
};
