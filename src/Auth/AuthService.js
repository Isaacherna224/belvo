import axios from 'axios';

const API_URL = 'http://tu-servidor-de-autenticacion.com/api/';

class AuthService {
  register(username, password) {
    return axios.post(API_URL + 'register', {
      username,
      password
    });
  }

  login(username, password) {
    return axios
      .post(API_URL + 'login', {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }
}

export default new AuthService();
