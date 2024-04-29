import { getSearchMovieApi } from 'api/movies/moviesApi';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchBar from 'components/SearchBar/SearchBar';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';

  useEffect(() => {
    const getSearchMovie = async () => {
      try {
        const data = await getSearchMovieApi(movieName);
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getSearchMovie();
  }, [movieName]);

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <div>
      <SearchBar onSubmit={updateQueryString} />
      <MoviesList data={movies} />
    </div>
  );
};

export default SearchPage;
