import axios from 'axios';
const API_KEY = '38025038-9fdd5583408e5024924784dee';
const BASE_URL = 'https://pixabay.com/api/';

axios.defaults.headers.common['x-api-key'] = API_KEY;
axios.defaults.baseURL = BASE_URL;

// 10та
// -----------------
// export const getImages = () => {
//   return axios.get('/breeds');
// };
// export const fetchCatByBreed = breedId => {
//   return axios.get(`/images/search?breed_ids=${breedId}`);
// };
// ----------------

export const getImages = (page, query, perPage) => {
  const params = {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: perPage,
    },
  };
  return params;
};
