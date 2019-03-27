import React from 'react';
import { Link } from 'react-router-dom';
import Page from '../controls/Page';
import PageHeader from '../controls/PageHeader';
import PageBody from '../controls/PageBody';

class PaginationPage extends React.Component
{
	constructor(props)
	{
		super(props);
		this.current = 3;
		this.array = [1, 2, 3, 4, 5];
		this.updatePage = this.updatePage.bind(this);
	}

  render() {
		return (
			<Page>
				<PageHeader title='Pagination'/>
				<PageBody>
					<nav>
						<ul className="pagination">
							<li onClick={this.updatePage}>
								<Link id="bottom" to="/pagination">
									<i id="bottom" className="fa fa-angle-double-left"/>
								</Link>
							</li>
							<li onClick={this.updatePage}>
								<Link id="backward" to="/pagination">
									<i id="backward" className="fa fa-angle-left"/>
								</Link>
							</li>
							{this.renderPaginationNumbers()}
							<li onClick={this.updatePage}>
								<Link id="forward" to="/pagination">
									<i id="forward" className="fa fa-angle-right"/>
								</Link>
							</li>
							<li onClick={this.updatePage}>
								<Link id="top" to="/pagination">
									<i id="top" className="fa fa-angle-double-right"/>
								</Link>
							</li>
						</ul>
					</nav>
				</PageBody>
			</Page>
		);
  }

	updatePage(event)
	{
		var index = 0;
		switch(event.target.id)
		{
			case "bottom":
			case "top":
				index = 0;
				break;
			case "backward":
				index = this.current - 1;
				break;
			case "forward":
				index = this.current + 1;
				break;
			default:
				index = Number(event.target.id);
				break;
		}
		if(index < 3)
		{
			index = 3;
		}
		this.array.forEach((x, id) => this.array[id] = x + index - this.current);
		this.current = index;
	}

	renderPaginationNumbers()
	{
		return(
			this.array.map(i => <li key={i} onClick={this.updatePage}><Link id={i} to="/pagination">{i}</Link></li>)
		);
	}
}

module.exports = PaginationPage;
