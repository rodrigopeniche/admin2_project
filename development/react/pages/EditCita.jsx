import React from 'react';
import Alert from '../controls/Alert';
import Page from '../controls/Page';
import Box from '../controls/Box/Box';
import BoxBody from '../controls/Box/BoxBody';
import BoxHeader from '../controls/Box/BoxHeader';
import InputForm from '../controls/Input/InputForm';
import Textarea from '../controls/Textarea';


class EditCita extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alertVisible: false,
      username: '',
      password: ''
    };
    this.create = this.create.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
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
      alertMessage: 'success!',
      alertType: 'success'
    });
  }

  render() {
    return (
      <Page title="Consulta de paciente" subtitle="observaciones">
        <div className="row">
          <div className="col-sm-8">
            <Box>
              <BoxHeader title="Infromacions"/>
              <BoxBody>
                <form className="form-horizontal">
                  <InputForm
                    label="medicamentos"
                    name="username"
                    type="text"
                    />
                 <Textarea label='Observaciones' name='txtDesc'></Textarea>
                  { this.renderAlert() }
                  <div className="form-group">
                    <div className="col-sm-offset-4 col-sm-8">
                      <button className="btn btn-primary"
                        type="button"
                        onClick={ this.create }>Confirmar</button>
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

module.exports = EditCita;
