import { RotatingLines } from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { LoaderStyled } from './Loader.styled';

const Loader = ({ loading }) => {
  return (
    <LoaderStyled>
      <RotatingLines
        loading={loading}
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </LoaderStyled>
  );
};
Loader.propTypes = {
  loading: PropTypes.bool,
};

export default Loader;