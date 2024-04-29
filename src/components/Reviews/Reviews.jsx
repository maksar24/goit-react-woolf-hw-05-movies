import { getReviewsMovieApi } from 'api/movies/moviesApi';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Item, List, Name, Text, Title } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getReviewsMovie = async () => {
      try {
        const data = await getReviewsMovieApi(id);
        setReviews(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getReviewsMovie();
  }, [id]);

  return (
    <List>
      {reviews.map(({ id, author, content }) => (
        <Item key={id}>
          <Title>
            Author: <Name>{author}</Name>
          </Title>
          <Text>{content}</Text>
        </Item>
      ))}
    </List>
  );
};

export default Reviews;
