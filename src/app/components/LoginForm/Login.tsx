import axios from 'axios';
const apiUrl = 'http://35.233.79.129/auth';

export type Auth = {
  login: (x: string, y: string) => void;
};

export const _Login: Auth = {
  login: (x: string, y: string) => {
    console.log('x = ', x, 'y = ', y);
  },
};

export const _LoginWithData: Auth = {
  login: (username: string, password: string) => {
    const data = {
      username,
      password,
    };

    if (username.length === 0 || password.length === 0) {
      console.log('ERROR');
    } else {
      axios
        .post(apiUrl, data)
        .then((response) => {
          console.log(response);
          const token = response.data.token;
          localStorage.setItem('user', JSON.stringify(token));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
};
