import { getDetailsMovieApi } from 'api/movies/moviesApi';
import Description from 'components/Description/Description';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  Container,
  Info,
  Item,
  LinkItem,
  List,
  Title,
} from './MovieDetails.styled';
import LinkBack from 'components/LinkBack/LinkBack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function MovieDetails() {
  const [details, setDetails] = useState({});
  const { id } = useParams();
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    const getDetailsMovie = async () => {
      try {
        const data = await getDetailsMovieApi(id);
        setDetails(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getDetailsMovie();
  }, [id]);

  return (
    <Container>
      <LinkBack to={backLink}>
        <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '20px' }} />
        Back to movies
      </LinkBack>
      <Description data={details} />
      <Info>
        <Title>Additional information</Title>
        <List>
          <Item>
            <LinkItem to={'cast'}>Cast</LinkItem>
          </Item>
          <Item>
            <LinkItem to={'reviews'}>Reviews</LinkItem>
          </Item>
        </List>
      </Info>
      <Outlet />
    </Container>
  );
}

export default MovieDetails;
