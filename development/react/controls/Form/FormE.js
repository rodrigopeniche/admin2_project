import React from 'react';

class Form extends React.Component
{

	// handleSubmit(event)
	// {
	// 	event.preventDefault();
	// 	//const data = new FormData(event.target);
	// 	//console.log(`Email: ${data.get('email')}, pass: ${data.get('password')}`);
	//
	// 	const form = event.target;
	// 	const data = new FormData(form);
	//
	// 	for(let name of data.keys())
	// 	{
	// 		const input = form.elements[name];
	// 		console.log(input.value);
	// 	}
	// }

    render()
    {
        const childrenWithExtraProp = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
                alignment: this.props.alignment
            });
        });

        var alignment = `form-${this.props.alignment}`;
		if(this.props.box)
		{
			return(
				<div className="col-sm-8">
					<div className="form-group">
						<form className={alignment} onSubmit={this.props.handleSubmit}>
							{childrenWithExtraProp}
						</form>
	                </div>
	            </div>
			);
		}
		else
		{
			return(
                <div className="form-group">
					<form className={alignment} onSubmit={this.props.handleSubmit}>
						{childrenWithExtraProp}
					</form>
				</div>
			);
		}
    }
}

module.exports = Form;
