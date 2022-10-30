import axios from 'axios';
import { BASE_URL, API_KEY } from '../constant/api';
import { toast } from 'react-toastify';

export const fetchGallery = async options => {
  try {
    const result = await axios.get(BASE_URL, {
      params: {
        ...options,
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 12,
      },
    });
    return result;
  } catch (error) {
    toast.error(`Something went wrong ${error}`);
  }
};
