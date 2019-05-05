import React from 'react';
import Chart from 'chart.js';

class Graphic extends React.Component
{
	constructor(props)
	{
		super(props);
		this.cnvs;
	}

	processData()
	{
		var count = 1;
		this.data = this.props.data;
		if(this.data.hasOwnProperty('datasets'))
		{
			this.data.datasets.forEach(x => {
				if(!x.hasOwnProperty('label'))
				{
					x.label = `Set ${count}`;
					count += 1;
				}
				if(!x.hasOwnProperty('backgroundColor') && this.props.randColor)
				{
					x.backgroundColor = this.randColor();
					if(x.hasOwnProperty('data'))
					{
						if(this.props.type == 'pie' || this.props.type == 'doughnut' || this.props.type == 'polarArea')
						{
							x.backgroundColor = this.randColor(x.data.length);
						}
						else
						{
							x.backgroundColor = this.randColor();
						}
					}
				}
			});
		}
		else if(this.data.hasOwnProperty('data'))
		{
			var datasets = [];
			var obj;
			count = 1;
			this.data.data.forEach(d => {
				obj = {};
				obj.data = d;

				if(!this.data.hasOwnProperty('backgroundColors'))
				{
					if(this.props.randColor)
					{
						if(this.props.type == 'pie' || this.props.type == 'doughnut' || this.props.type == 'polarArea')
						{
							obj.backgroundColor = this.randColor(d.length);
						}
						else
						{
							obj.backgroundColor = this.randColor();
						}
					}
				}
				else
				{
					if(this.props.type == 'pie' || this.props.type == 'doughnut' || this.props.type == 'polarArea')
					{
						obj.backgroundColor = this.data.backgroundColors;
					}
					else
					{
						obj.backgroundColor = this.data.backgroundColors[count-1];
					}
				}
				if(!this.data.hasOwnProperty('titles'))
				{
					obj.label = `Set ${count}`;
				}
				else
				{
					obj.label = this.data.titles[count-1] || `Set ${count}`;
				}
				count += 1;
				datasets.push(obj);
			})
			this.data.datasets = datasets;
		}

		if(count > 1)
		{
			var dataSet = this.data.datasets[0];
			if(!this.data.hasOwnProperty('labels') && dataSet.hasOwnProperty('data'))
			{
				count = 1;
				var labels = [];
				dataSet.data.forEach(d => {
					labels.push(`Data ${count}`);
					count += 1;
				})
				this.data.labels = labels;
			}
			else
			{
				this.data.labels = this.data.labels.slice(0, dataSet.data.length);
			}
		}

		this.options = this.props.options;
		if(this.props.noLegend)
		{
			this.options =
			{
				legend:
				{
					display: false
				}
			}
		}
	}

	componentDidMount()
	{
		this.processData();
		var ctx = this.cnvs.getContext('2d');
		var chart = new Chart(ctx, {
			type: this.props.type,
			data: this.data,
			options: this.options
		});
	}

	render()
	{
		return(
				<canvas ref={(cnvs) => {this.cnvs = cnvs}}></canvas>
		);
	}

	rand(num=1, min=0, max=255)
	{
		var rtn = [];
		// max = (min >= max) ? min + 1 : max;
		while (rtn.length < num)
		{
			rtn.push(Math.floor((Math.random() * (max - min)) + min));
		}
		return rtn;
	}

	randColor(num=1, alpha=0.4)
	{
		var rtn = [];
		while (rtn.length < num) {
			rtn.push(`rgba(${this.rand()},${this.rand()},${this.rand()}, ${alpha})`);
		}
		return (num==1) ? rtn[0] : rtn;
	}
}

module.exports = Graphic;
