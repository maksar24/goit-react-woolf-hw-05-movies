import { Image, Item, LinkComponent, Title } from './MovieItem.styled';

const MovieItem = ({ url, title, id, location }) => {
  const defaultImg =
    'https://glavcom.ua/img/article/9139/95_main-v1678685008.jpg';

  return (
    <Item>
      <LinkComponent to={`/movies/${id}`} state={{ from: location }}>
        <Image
          src={url ? `https://image.tmdb.org/t/p/w500/${url}` : defaultImg}
          alt={`Poster of ${title}`}
        />
        <Title>{title}</Title>
      </LinkComponent>
    </Item>
  );
};

export default MovieItem;
