import axios from 'axios';

export async function getAllUsers() {
  const response = await axios.get('https://api.github.com/users');
  return response.data;
}
