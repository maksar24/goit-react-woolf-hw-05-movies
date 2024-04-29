import { useLocation } from 'react-router-dom';
import { List } from './MovieList.styled';
import MovieItem from 'components/MovieItem/MovieItem';

const MoviesList = ({ data }) => {
  const location = useLocation();

  return (
    <List>
      {data.map(({ id, original_title, poster_path }) => (
        <MovieItem
          key={id}
          url={poster_path}
          title={original_title}
          id={id}
          location={location}
        />
      ))}
    </List>
  );
};

export default MoviesList;
