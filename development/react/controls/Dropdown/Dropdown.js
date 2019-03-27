import React from 'react';

class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		}
		this.handleClick = this.handleClick.bind(this);
		this.handleOutsideClick = this.handleOutsideClick.bind(this);
	}
	render() {
		var cnRoot = (this.state.isOpen) ? `${this.props.type} open` : this.props.type;
		return (
			<div className={cnRoot} ref={node => {this.node = node;}} onClick={this.handleClick} style={this.props.style}>
				{this.props.children}
			</div>
		);
	}
	handleClick() {
		if (!this.state.isOpen) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	handleOutsideClick(e) {
    if (this.node.contains(e.target)) {
      return;
    }
    this.handleClick();
  }
}

Dropdown.defaultProps = {
	style: {display: 'inline-block'},
	type: 'dropdown'
};

module.exports = Dropdown;
