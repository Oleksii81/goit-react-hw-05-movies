import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { SharedLayoutStyled } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <SharedLayoutStyled>
      <nav className="nav-container">
        <ul className="nav-list">
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className="nav-link">
              Movie
            </NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </SharedLayoutStyled>
  );
};
export default SharedLayout;