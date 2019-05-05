import React from 'react';

class Pagination extends React.Component{
  constructor(props){
    super(props);
    this.goNext = this.goNext.bind(this);
    this.goPrev = this.goPrev.bind(this);
  }

  goNext() {
    this.goPage(this.props.page+1);
  }

  goPage(p) {
    this.props.onGoPage(p);
  }

  goPrev() {
    this.goPage(Math.max(this.props.page-1, 1));
  }

  render(){
    return(
      <nav>
        <ul className="pagination pull-right">
          <li><a onClick={ this.goPrev }>&laquo;</a></li>
          { this.renderPages() }
          <li><a onClick={ this.goNext }>&raquo;</a></li>
        </ul>
      </nav>
    )
  }

  renderPages() {
    var pages = [];
    var cp = this.props.page || 1;
    for (var i = cp-2; i < cp+5; i += 1) {
      if (0 < i && pages.length < 5) pages.push(i);
    }
    return (
			pages.map(p =>
				<li className={ p == cp ? 'active' : '' } key={ p }>
          <a onClick={ () => this.goPage(p) } >{ p }</a>
        </li>
      )
    )
  }
}

module.exports = Pagination;
