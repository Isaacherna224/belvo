import React, { Component } from 'react';
import axios from 'axios';

class InstitutionsList extends Component {
  constructor() {
    super();
    this.state = { 
      institutions: null,
      institutionsDetails: null,
    };
  }

  componentDidMount() {
    this.getInstitutions();
  }

  getInstitutions() {
    const config = {
      method: 'get',
      url: 'https://sandbox.belvo.com/api/institutions/?page_size=100',
      headers: { 
        'Authorization': 'Basic ZDc1ZDA4MzAtZTI5Yi00MjJhLTkyZjUtOTAxMWMzMzNmM2ViOnRYLVptQjBtNzdJYjkxR1Zhbko3RENhTTJmemhiSnVfbXZXbXR3SDVfNlg3cFFEUjV3d0pJN3lDOGZ6c2lMQko='
      }
    };

    axios(config)
      .then((response) => {
        this.setState({ institutions: response.data });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  getDetailsInstitution(idInstitution){
    const config = {
      method: 'get',
      url: 'https://sandbox.belvo.com/api/institutions/'+idInstitution+'/',
      headers: { 
        'Authorization': 'Basic ZDc1ZDA4MzAtZTI5Yi00MjJhLTkyZjUtOTAxMWMzMzNmM2ViOnRYLVptQjBtNzdJYjkxR1Zhbko3RENhTTJmemhiSnVfbXZXbXR3SDVfNlg3cFFEUjV3d0pJN3lDOGZ6c2lMQko='
      }
    };

    axios(config)
      .then((response) => {
        this.setState({ institutionsDetails: response.data });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Listado de Instituciones</h1>
        <ul>
          {this.state.institutions && this.state.institutions.results && this.state.institutions.results.map((institution, index) => (
            <li key={index} onClick={() => this.getDetailsInstitution(institution.id)}>
            {institution.display_name}
          </li>
          ))}
        </ul>

        <div>
          {this.state.institutionsDetails ? (
            <React.Fragment>
              <h2>Detalles de Institucion</h2>
              <p>Nombre: {this.state.institutionsDetails.display_name}</p>
              <p>Codigo: {this.state.institutionsDetails.code}</p>
              <p>Pais: {this.state.institutionsDetails.country_code}</p>
            </React.Fragment>
          ) : (
            <p></p>
          )}
        </div>


      </div>
    );
  }
}

export default InstitutionsList;
