import axios from 'axios';
import env from '../env';
import utils from './utils';

class Api {
  constructor() {
    this.token = localStorage.getItem('token');
    this.host = env.api;
  }

  buildUrl(path){
    return `${ this.host }${ path }`
  }

  config() {
    return {
      headers: {
        token: this.token
      }
    };
  }

  doPost(edge, data) {
    var url = this.buildUrl(edge);
    return axios.post(url, data, this.config())
      .then(result => result.data)
      .catch(err => {
        throw {
          message: utils.translateError(edge, err)
        };
      });
  }

 
  // Rutas

}


module.exports = Api;
