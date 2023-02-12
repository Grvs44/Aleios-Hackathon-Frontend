import axios from 'axios';
const BASEURL = 'https://sustainabilityoncampus.eu.pythonanywhere.com/';

export const loginAction = async data => {
  const body = {
    username: data.email,
    password: data.password,
  };

  const base64encodedData = btoa(`${data.email}:${data.password}`);

  return await axios
    .post(`${BASEURL}auth/login/`, body, {
      headers: {
        Authorization: 'Basic ' + base64encodedData,
      },
    })
    .then(response => {
      console.log(response.data);
      return response.data;
    });
};

export const signupAction = async data => {
  const first = data.fullName.split(' ')[0];
  const body = {
    username: data.email,
    password: data.password,
    first_name: first.substring(0, 1).toUpperCase() + first.substring(1),
    last_name: data.fullName.split(' ')[1],
  };
  return await axios
    .post(`${BASEURL}auth/signup/`, body)
    .then(response => {
      console.log(response);
      return response.data;
    })
    .catch(data => console.log(data));
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

export const getId = () => {
  const user = JSON.parse(localStorage.getItem('userId'));
  if (user) return user;
  else return null;
};
// remove the token and user from the session storage
export const removeId = () => {
  return localStorage.removeItem('userId');
};
// set the token and user from the session storage
export const setId = data => {
  return localStorage.setItem('userId', JSON.stringify(data));
};
