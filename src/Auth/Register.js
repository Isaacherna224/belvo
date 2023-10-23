import React, { Component } from 'react';
import AWS from 'aws-sdk';

class Formulario extends Component {
  state = {
    nombrecompleto: '',
    correo: '',
    contrasenia: '',
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    // Crear un objeto con los datos del formulario
    const data = {
      nombrecompleto: this.state.nombrecompleto,
      correo: this.state.correo,
      contrasenia: this.state.contrasenia,
    };

    // Configurar el SDK de AWS
    AWS.config.update({
      accessKeyId: 'AKIASAGINZXX4AWBIUO7',
      secretAccessKey: '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',
      region: 'us-east-1', // Cambia a tu región de preferencia
    });

    const sqs = new AWS.SQS();

    // Configurar el mensaje a enviar
    const params = {
      MessageBody: JSON.stringify(data),
      QueueUrl: 'https://sqs.us-east-2.amazonaws.com/137859288559/LambdaRDSQueue',
    };

    // Enviar el mensaje a la cola
    sqs.sendMessage(params, (err, data) => {
      if (err) {
        console.error('Error al enviar el mensaje a la cola SQS', err);
      } else {
        console.log('Mensaje enviado a la cola SQS', data);
        // Puedes realizar acciones adicionales aquí, como mostrar una confirmación al usuario.
      }
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="nombrecompleto"
          placeholder="Nombre Completo"
          onChange={this.handleInputChange}
        />
        <input
          type="email"
          name="correo"
          placeholder="Correo Electrónico"
          onChange={this.handleInputChange}
        />
        <input
          type="password"
          name="contrasenia"
          placeholder="Contraseña"
          onChange={this.handleInputChange}
        />
        <button type="submit">Registrar</button>
      </form>
    );
  }
}

export default Formulario;
