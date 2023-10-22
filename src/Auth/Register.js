import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
  }

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos de registro al servidor.
  }

  render() {
    return (
      <div>
        <h2>Registro</h2>
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
            <label>Correo electrónico:</label>
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
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
          <button type="submit">Registrarse</button>
        </form>
      </div>
    );
  }
}

export default Register;
