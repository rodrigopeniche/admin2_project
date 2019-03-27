import React from 'react';

class Table extends React.Component {
	render() {
		var cnRoot = ['table'];
		if(this.props.type) {
			this.props.type.split(' ').map((t) => {
				cnRoot.push(`table-${t}`);
			});
		}
		if(this.props.responsive) {
			return (
				<div className='table-responsive'>
					{/* <div style={{clear:'both'}}></div> */}
					<table className={cnRoot.join(' ')}>
						{this.props.children}
					</table>
					{/* <div style={{clear:'both'}}></div> */}
				</div>
			);
		} else {
			return (
				<div style={{overflow:'auto', width:'100%'}}>
					{/* <div style={{clear:'both'}}></div> */}
					<table className={cnRoot.join(' ')}>
						{this.props.children}
					</table>
					{/* <div style={{clear:'both'}}></div> */}
				</div>
			);
		}

	}
}

module.exports = Table;
