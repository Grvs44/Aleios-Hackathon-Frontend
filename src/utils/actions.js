import axios from 'axios';
const BASEURL = 'https://sustainabilityoncampus.eu.pythonanywhere.com/';

export const loginAction = async data => {
  return await axios
    .post(`${BASEURL}auth/login/`, data, {
      auth: {
        username: 'admin',
        password: 'admin',
      },
    })
    .then(response => {
      return response.data;
    });
};

export const signupAction = async data => {
  return await axios
    .post(`${BASEURL}auth/signup/`, data, {
      auth: {
        username: 'admin',
        password: 'admin',
      },
    })
    .then(response => {
      return response.data;
    });
};

export const getCode = async data => {
  return await axios
    .get(`${BASEURL}code/${data}`, {
      headers: {
        Authorization: 'Token ' + getToken(),
      },
    })
    .then(response => {
      return response.data;
    });
};
export const getUser = () => {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  if (user) return user;
  else return null;
};
// remove the token and user from the session storage
export const removeUser = () => {
  return localStorage.removeItem('currentUser');
};
// set the token and user from the session storage
export const setUser = data => {
  return localStorage.setItem('currentUser', JSON.stringify(data));
};

export const getToken = () => {
  const user = JSON.parse(localStorage.getItem('token'));
  if (user) return user;
  else return null;
};
export const setToken = data => {
  return localStorage.setItem('token', JSON.stringify(data));
};

export const removeToken = () => {
  return localStorage.removeItem('token');
};

export const getName = () => {
  const user = JSON.parse(localStorage.getItem('firstName'));
  if (user) return user;
  else return null;
};
// remove the token and user from the session storage
export const removeName = () => {
  return localStorage.removeItem('firstName');
};
// set the token and user from the session storage
export const setName = data => {
  return localStorage.setItem('firstName', JSON.stringify(data));
};
