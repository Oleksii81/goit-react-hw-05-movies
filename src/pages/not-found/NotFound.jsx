import { Link } from 'react-router-dom';
import { NotFoundStyled } from './NotFound.styled';

const NotFound = () => {
    return (
      <NotFoundStyled>
        <h1 className="main-title">Movie Land</h1>
        <Link className="not-found-link" to="/">
          Enter
        </Link>
      </NotFoundStyled>
    );
  };
  export default NotFound;