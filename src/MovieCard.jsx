import React from 'react';
import PropsTypes from 'prop-types';

const MovieCard = ({
  movie: {
    imdbID, Year, Poster, Title, Type,
  },
}) => (
  <div className="movie" key={imdbID}>
    <div>
      <p>{Year}</p>
    </div>

    <div>
      <img src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/400'} alt={Title} />
    </div>

    <div>
      <span>{Type}</span>
      <h3>{Title}</h3>
    </div>
  </div>
);

MovieCard.defaultProps = {
  movie: {},
};

MovieCard.propTypes = {
  movie: PropsTypes.shape({
    imdbID: PropsTypes.string,
    Year: PropsTypes.string,
    Poster: PropsTypes.string,
    Title: PropsTypes.string,
    Type: PropsTypes.string,
  }),
};

export default MovieCard;
