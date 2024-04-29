import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

instance.interceptors.request.use(
  config => {
    const accessToken =
      'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGJjNGU3ZGM2NDQ5NTQ1ODI3N2FiMThjZDBhZTQ5OCIsInN1YiI6IjYwY2JiYjRlNjY1NDA4MDA2Y2FiZGQ2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2gvRNP5NUrSKrfo1NOWueZyaaUxE4uib7tqaQhxKFFc';

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
