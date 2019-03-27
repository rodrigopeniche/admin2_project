import React from 'react';

class Modal extends React.Component
{
	render()
	{
		var modalClassName = "modal fade";
		var modalStyle = {
			display: 'none'
		};
		if(this.props.isOpen)
		{
			modalClassName = `${modalClassName} in`;
			modalStyle =
			{
				display: 'block'
			};
		}
		return(
			<div className={modalClassName} id={this.props.id} tabIndex="-1" role="dialog" style={modalStyle}>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal" onClick={this.props.hideModal}><span>&times;</span></button>
							<h4 className="modal-title">{this.props.title}</h4>
						</div>
						<div className="modal-body">
							{this.props.children}
						</div>
						<div className="modal-footer">
							<div className="row">
								<div className="col-xs-offset-9 col-xs-3">
									<button type="button" className="btn btn-default btn-block" data-dismiss="modal" onClick={this.props.hideModal}>Cerrar</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

module.exports = Modal;
