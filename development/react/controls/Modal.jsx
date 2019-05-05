import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    document.body.classList.add('modal-open');
  }

  componentWillUnmount() {
    document.body.classList.remove('modal-open');
  }

  close(e) {
    if (e.target.dataset.canClose) {
      this.props.onClose();
    }
  }

  render() {
    return (
      <div className="modal fade in"
        data-can-close
        style={{ display: 'block' }}
        onClick={ this.close }>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button className="close" type="button">
                <span data-can-close>&times;</span>
              </button>
              <h4 className="modal-title">{ this.props.title }</h4>
            </div>
            <div className="modal-body">
              { this.props.children }
            </div>
            <div className="modal-footer">
              <button className="btn btn-default"
                data-can-close>Cancelar</button>
              <button className="btn btn-primary"
                onClick={ this.props.onAccept }>Aceptar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Modal.defaultProps = {
  title: 'No title'
};

module.exports = Modal;
