import React from 'react';

class Textarea extends React.Component
{
	constructor(props)
    {
        super(props);
        this.state =
        {
            value: ''
        }
        this.onChangeInput = this.onChangeInput.bind(this);
    }

	componentDidMount()
	{
		if(this.props.children)
		{
			this.setState({
				value: this.props.children
			});
		}
	}

	render()
	{
		var disabled = false;
		if(this.props.disabled)
		{
			disabled = true;
		}
		return(
			<div className="form-group">
				<label className="col-sm-4 control-label">{this.props.label}</label>
				<div className="col-sm-8">
					<textarea className="form-control"
						rows="3"
						disabled={disabled}
						value={this.state.value}
						onChange={this.onChangeInput}>
					</textarea>
				</div>
			</div>
		);
	}

	onChangeInput(e)
    {
        this.setState({
            value: e.target.value
        });
    }
}

module.exports = Textarea;
