import React from 'react';
import { randomNum, titlesArray } from '../../utils/helpers';
class Title extends React.Component {
	componentDidMount() {
		this.timer = setInterval(() => this.changeTitle(), 2000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	changeTitle() {
		const theTitle = titlesArray[randomNum(titlesArray.length)];
		this.props.changingTitle(theTitle);
	}

	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
			</div>
		);
	}
}

export default Title;
