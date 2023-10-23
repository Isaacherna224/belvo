import React, { Component } from 'react';
import axios from 'axios'; 
import { useHistory } from 'react-router-dom';
const history = useHistory();

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
  
   
    const data = {
      correo: this.state.correo,
      contrasenia: this.state.contrasenia,
    };
  

    const url = 'https://b14lv7trlb.execute-api.us-east-2.amazonaws.com/lambda_get_user';
  

    try {
      const response = await axios.get(url, { 
        params: data,
      });
      console.log('Respuesta de la solicitud:', response.data);
  
      if (response.data.id) {
        this.setState({ alerta: 'Éxito' });
        history.push('/institutions');
      } else {
        this.setState({ alerta: 'No se encontraron registros que cumplan con los criterios.' });
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);  
      this.setState({ alerta: 'Error' });
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