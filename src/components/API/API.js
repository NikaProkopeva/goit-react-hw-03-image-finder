import axios from 'axios';

const ServiceAPI = (q, page) => {
  const options = {
    params: {
      key: '27744397-00c9d3c8db15fb4b973904244',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      q,
      page,
    },
  };

  return axios.get('https://pixabay.com/api/', options);
};

export { ServiceAPI };
