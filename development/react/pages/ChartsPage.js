import React from 'react';
import Box from '../controls/Box/Box';
import BoxBody from '../controls/Box/BoxBody';
import Graphic from '../controls/Graphic';
import Page from '../controls/Page';

class ChartsPage extends React.Component {
  createChartDataTest() {
		return {
			data: [
        this.rand(7, 32, 250),
        this.rand(7, 32, 250)
      ]
		};
	}

	createChartDataBubbles() {
		return {
			datasets: [{
	      label: 'Scatter Dataset',
		    data: [
          this.createRCircle(),
          this.createRCircle(),
          this.createRCircle()
        ]
		  }, {
		    label: 'Scatter Dataset',
		    data: [
          this.createRCircle(),
          this.createRCircle(),
          this.createRCircle()
        ]
		  }]
		};
	}

  createRCircle() {
    return {
      x: this.rand(),
      y: this.rand(),
      r: this.rand(1, 10, 25)
    };
  }

  render() {
    return (
      <Page title="ChartJS">
        <div className="row">
					<div className="col-sm-6">
						<Box>
							<BoxBody>
								<Graphic type='line'
                  data={ this.createChartDataTest() }
								randColor/>
							</BoxBody>
						</Box>
					</div>
					<div className="col-sm-6">
						<Box>
							<BoxBody>
								<Graphic type='bar'
									data={ this.createChartDataTest() }
								randColor/>
							</BoxBody>
						</Box>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6">
						<Box>
							<BoxBody>
								<Graphic type='horizontalBar'
                  data={ this.createChartDataTest() }
								randColor/>
							</BoxBody>
						</Box>
					</div>
					<div className="col-sm-6">
						<Box>
							<BoxBody>
								<Graphic type='radar'
                  data={ this.createChartDataTest() }
								randColor/>
							</BoxBody>
						</Box>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6">
						<Box>
							<BoxBody>
								<Graphic type='pie'
                  data={ this.createChartDataTest() }
								randColor/>
							</BoxBody>
						</Box>
					</div>
					<div className="col-sm-6">
						<Box>
							<BoxBody>
								<Graphic type='doughnut'
                  data={ this.createChartDataTest() }
								randColor/>
							</BoxBody>
						</Box>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6">
						<Box>
							<BoxBody>
								<Graphic type='polarArea'
                  data={ this.createChartDataTest() }
								randColor/>
							</BoxBody>
						</Box>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6">
						<Box>
							<BoxBody>
								<Graphic type='bubble'
                  data={ this.createChartDataBubbles() }
								randColor/>
							</BoxBody>
						</Box>
					</div>
					<div className="col-sm-6">
						<Box>
							<BoxBody>
								<Graphic type='scatter'
                  data={ this.createChartDataBubbles() }
								randColor/>
							</BoxBody>
						</Box>
					</div>
				</div>
      </Page>
    );
  }

	rand(num=1, min=0, max=255) {
		var rtn = [];
		while (rtn.length < num) {
			rtn.push(Math.floor((Math.random() * (max - min)) + min));
		}
		return (num==1) ? rtn[0] : rtn;
	}

	randColor(num=1, alpha=0.4) {
		var rtn = [];
		while (rtn.length < num) {
			rtn.push(`rgba(${this.rand()},${this.rand()},${this.rand()}, ${alpha})`);
		}
		return (num==1) ? rtn[0] : rtn;
	}
}

module.exports = ChartsPage;
