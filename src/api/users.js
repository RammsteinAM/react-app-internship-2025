import axios from 'axios';

export const getUsers = () =>
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.data);

export const insertUser = (newUser) =>
  axios.post('https://jsonplaceholder.typicode.com/users', newUser);
