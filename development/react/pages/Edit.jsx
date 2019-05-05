import React from 'react';
import Alert from '../controls/Alert';
import Page from '../controls/Page';
import Box from '../controls/Box/Box';
import BoxBody from '../controls/Box/BoxBody';
import BoxHeader from '../controls/Box/BoxHeader';
import InputForm from '../controls/Input/InputForm';
import Textarea from '../controls/Textarea';


class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alertVisible: false,
      username: '',
      password: ''
    };
    this.create = this.create.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.delete= this.delete.bind(this);
  }

  onInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  create() {
    console.log(this.state);
   
    this.setState({
      alertVisible: true,
      alertMessage: 'Datos modificados!',
      alertType: 'success'
    });
  }
  delete(){
     this.setState({
      alertVisible: true,
      alertMessage: 'Paciente eliminado!',
      alertType: 'danger'
    });
  }

  render() {
 
    return (
      <Page title="Edicion de informaci&oacute;n" subtitle="Paciente">
        <div className="row">
          <div className="col-sm-8">
            <Box>
              <BoxHeader title="Informaci&oacute;n"/>
              <BoxBody>
                <form className="form-horizontal">
                  <InputForm
                    label="Nombre"
                    name="username"
                    type="text"
                    value={ this.state.username }
                    onChange={ this.onInputChange }/>
                    <InputForm
                    label="direccion"
                    name="username"
                    type="text"
                   />
                    <InputForm
                    label="telefono"
                    name="username"
                    type="text"
                    />
                    <InputForm
                    label="familiar"
                    name="username"
                    type="text"
                   />
                    <InputForm
                    label="numero de familiar"
                    name="username"
                    type="text"
                   />
                  <InputForm
                    label="Password"
                    name="password"
                    type="password"
                    value={ this.state.password }
                    onChange={ this.onInputChange }/>
                    <Textarea label='Historial' name='txtDesc'></Textarea>
                  { this.renderAlert() }
                  <div className="form-group">
                    <div className="col-sm-offset-4 col-sm-8">
                    
                      <button className="btn btn-primary"
                        type="button"
                        onClick={ this.create }>Editar</button>
                        <p></p>
                        <button className="btn btn-danger"
                        type="button"
                        onClick={ this.delete }>Eliminar</button>
                        
                    </div>
                  </div>
                </form>
              </BoxBody>
            </Box>
          </div>
        </div>
      </Page>
    );
  
  }

  
  renderAlert() {
    if (this.state.alertVisible) {
      return (
        <div className="row">
          <div className="col-sm-offset-4 col-sm-8">
            <Alert
              type={ this.state.alertType }>
              { this.state.alertMessage }
            </Alert>
          </div>
        </div>
      );
    }
  }
}

module.exports = Edit;
