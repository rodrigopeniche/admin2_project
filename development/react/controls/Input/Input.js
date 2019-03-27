import React from 'react';

class Input extends React.Component
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

  render() {
    var inputClassName = "form-control";
    var labelClassName = "control-label";
		var disabled = false;

    if(this.props.type === "file") {
      inputClassName = "";
    }
		if(this.props.disabled) {
			disabled = true;
		}
    if(this.props.alignment === "horizontal") {
      labelClassName = `col-sm-4 ${labelClassName}`;
      return (
        <div className="form-group">
					<label className={labelClassName}>{this.props.label}</label>
					<div className="col-sm-8">
						<input type={this.props.type}
							className={inputClassName}
							id={this.props.id}
							placeholder={this.props.placeholder}
							value={this.state.value}
							onChange={this.onChangeInput}
							name={this.props.name}
							readOnly={disabled} />
					</div>
        </div>
      );
    } else {
      return(
        <div className="form-group has-feedback">
					{this.renderLabel(labelClassName)}
					<input type={this.props.type}
						className={inputClassName}
						id={this.props.id}
						placeholder={this.props.placeholder}
						value={this.state.value}
						onChange={this.onChangeInput}
						name={this.props.name}
						readOnly={disabled} />
        </div>
      );
    }
  }

	renderLabel(labelClassName)
	{
		if(this.props.label)
		{
			return(
				<label className={labelClassName}>{this.props.label}</label>
			);
		}
	}

    onChangeInput(e)
    {
        this.setState({
            value: e.target.value
        });
    }
}

module.exports = Input;
