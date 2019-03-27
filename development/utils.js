import errDict from './errDict';

function errToken(edge, err) {
  var res = err.response;
  var data = res.data;
  var token = `${ edge }::${ res.status }::${ data.error }`;
  if (data.dataPath) token = `${ token }::${ data.dataPath }`;
  return token;
}

function translateError(edge, err) {
  var token = errToken(edge, err);
  if (errDict[token]) {
    return errDict[token];
  } else {
    return token;
  }
}

module.exports = {
  translateError: translateError
};
