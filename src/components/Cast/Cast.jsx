import { getCastMovieApi } from 'api/movies/moviesApi';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Image, Item, List, Text } from './Cast.styled';

function Cast() {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  const defaultImg =
    'https://glavcom.ua/img/article/9139/95_main-v1678685008.jpg';

  useEffect(() => {
    const getCastMovie = async () => {
      try {
        const data = await getCastMovieApi(id);
        setCast(data.cast);
      } catch (error) {
        console.log(error.message);
      }
    };
    getCastMovie();
  }, [id]);

  return (
    <List>
      {cast.map(({ profile_path, original_name, character, id }) => (
        <Item key={id}>
          <Image
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                : defaultImg
            }
            alt={original_name}
          />
          <Container>
            <Text>{original_name}</Text>
            <Text>Character: {character}</Text>
          </Container>
        </Item>
      ))}
    </List>
  );
}

export default Cast;
