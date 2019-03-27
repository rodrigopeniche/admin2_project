import React from 'react';

class InfoBox extends React.Component {
  render() {
    return(
      <div className="info-box">
        <span className={ `info-box-icon bg-${ this.props.color }` }>
          <i className={ this.props.icon }></i>
        </span>
        <div className="info-box-content">
          <span className="info-box-text">{ this.props.label }</span>
          <span className="info-box-number">{ this.props.value }</span>
        </div>
      </div>
    );
  }
}

InfoBox.defaultProps = {
  color: 'blue',
  icon: 'fa fa-star-o'
};

module.exports = InfoBox;
