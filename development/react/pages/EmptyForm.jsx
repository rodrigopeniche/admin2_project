import React from 'react';
import Alert from '../controls/Alert';
import Page from '../controls/Page';
import PageBody from '../controls/PageBody';
import PageHeader from '../controls/PageHeader';
import Box from '../controls/Box/Box';
import BoxBody from '../controls/Box/BoxBody';
import BoxHeader from '../controls/Box/BoxHeader';
import InputForm from '../controls/Input/InputForm';

class EmptyForm extends React.Component {
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
      <Page>
        <PageHeader title="Empty form"
          subtitle="page"/>
        <PageBody>
          <div className="row">
            <div className="col-sm-8">
              <Box>
                <BoxHeader title="Form"/>
                <BoxBody>
                  <form className="form-horizontal">
                    <InputForm
                      label="Username"
                      name="username"
                      type="text"
                      value={ this.state.username }
                      onChange={ this.onInputChange }/>
                    <InputForm
                      label="Password"
                      name="password"
                      type="password"
                      value={ this.state.password }
                      onChange={ this.onInputChange }/>
                    { this.renderAlert() }
                    <div className="form-group">
                      <div className="col-sm-offset-4 col-sm-8">
                        <button className="btn btn-primary"
                          type="button"
                          onClick={ this.create }>Create</button>
                      </div>
                    </div>
                  </form>
                </BoxBody>
              </Box>
            </div>
          </div>
        </PageBody>
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

module.exports = EmptyForm;
