import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del inicio de sesión al servidor.
  }

  render() {
    return (
      <div>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Nombre de usuario:</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </div>
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    );
  }
}

export default Login;
