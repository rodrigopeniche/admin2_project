import React from 'react';
import ReactCSSTransitionGroup from 'react-transition-group'; 
import Page from '../controls/Page';

class Empty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     items: ['hello', 'world', 'click', 'me']
    };
  this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    const newItems = this.state.items.concat([
      prompt('Enter some text')
    ]);
    this.setState({items: newItems});
    console.log(this.state.items);
  }

render() {
    return (
      <Page title="Empty" subtitle="page">
        <span>Empty page</span>
        <div>
        <button onClick={this.handleAdd}>Add Item</button>
        </div>
           {/*
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
            <div>
              {this.state.items}
            </div>
        </ReactCSSTransitionGroup> */}
      </Page>
    );
   
  }
}

module.exports = Empty;
