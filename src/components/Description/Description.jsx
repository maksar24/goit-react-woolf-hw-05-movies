import React from 'react';
import {
  Image,
  MainContainer,
  MainTitle,
  Text,
  Title,
} from './Description.styled';

const Description = ({ data }) => {
  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = data;
  const defaultImg =
    'https://glavcom.ua/img/article/9139/95_main-v1678685008.jpg';
  const date = new Date(release_date);
  const year = date.getFullYear();
  const percentRating = Math.round(vote_average * 10);
  const genresList = genres
    ?.map((obj, i) => {
      if (i === 0) {
        return obj.name;
      } else {
        return obj.name.charAt(0).toLowerCase() + obj.name.slice(1);
      }
    })
    .join(', ');

  return (
    <MainContainer>
      <Image
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : defaultImg
        }
        alt={`Poster of ${original_title}`}
      />
      <div>
        <MainTitle>
          {original_title ? `${original_title} (${year})` : 'Movie title'}
        </MainTitle>
        {percentRating ? <Text>User Score: {percentRating}%</Text> : ''}
        <Title>Overview</Title>
        <Text>{overview}</Text>
        <Title>Genres</Title>
        <Text>{genresList}</Text>
      </div>
    </MainContainer>
  );
};

export default Description;
