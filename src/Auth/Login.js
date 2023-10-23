import React, { Component } from 'react';
import axios from 'axios'; 

class Login extends Component {
  state = {
    correo: '',
    contrasenia: '',
    alerta: '', 
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  
  loginSubmit = async (e) => {
    e.preventDefault();
  
    // datos del login
    const data = {
      correo: this.state.correo,
      contrasenia: this.state.contrasenia,
    };
  
    // URL del endpoint
    const url = 'https://b14lv7trlb.execute-api.us-east-2.amazonaws.com/lambda_get_user';
  
    // Realizar la solicitud GET
    try {
      const response = await axios.get(url, {
        params: data,
      });
      console.log('Respuesta de la solicitud:', response);
  
      const statusCode = response.headers['status']; 
  
      if (statusCode === '200') {
        this.setState({ alerta: 'Éxito' });
  
        console.log('Datos de la respuesta:', response.data);
      } else if (statusCode === '404') {
        this.setState({ alerta: 'Error: No se encontraron registros que cumplan con los criterios.' });
      } else {
        this.setState({ alerta: 'Error: Código de estado desconocido' });
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
  
      this.setState({ alerta: 'Error: Hubo un problema en la solicitud' });
    }
  }; 
  
  

  render() {
    return (
      <div>
        {this.state.alerta && (
          <div className="alert">{this.state.alerta}</div>
        )}
        <form onSubmit={this.loginSubmit}>
          <input
            type="email"
            name="correo"
            placeholder="Correo Electrónico"
            onChange={this.handleInput}
          />
          <input
            type="password"
            name="contrasenia"
            placeholder="Contraseña"
            onChange={this.handleInput}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
