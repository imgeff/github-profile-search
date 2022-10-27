import axios from 'axios';
import {errors} from '../errors';

export function getUsers() {
  const response = axios.get('https://api.github.com/users')
      .then((result) => result.data)
      .catch((error) => {
        if (error.response) {
          const status = error.response.status;
          return errors[status];
        }
        return error.message;
      });
  return response;
}

export function genericGetRequest(url) {
  const response = axios.get(url)
      .then((result) => result.data)
      .catch((error) => {
        if (error.response) {
          const status = error.response.status;
          return errors[status];
        }
        return error.message;
      });
  return response;
}
