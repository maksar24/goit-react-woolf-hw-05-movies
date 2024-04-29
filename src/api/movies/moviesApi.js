import instance from 'api';

export const getTrendingMoviesApi = async () => {
  const { data } = await instance(`trending/movie/day?language=en-US`);
  return data;
};

export const getSearchMovieApi = async query => {
  const { data } = await instance(
    `search/movie?query=${query}&include_adult=false&language=en-US`
  );
  return data;
};

export const getDetailsMovieApi = async id => {
  const { data } = await instance(`movie/${id}?language=en-US`);
  return data;
};

export const getCastMovieApi = async id => {
  const { data } = await instance(`movie/${id}/credits?language=en-US`);
  return data;
};

export const getReviewsMovieApi = async id => {
  const { data } = await instance(`movie/${id}/reviews?language=en-US`);
  return data;
};
