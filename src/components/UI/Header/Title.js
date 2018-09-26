import React from 'react';
import { randomNum, titlesArray } from '../../utils/helpers';
class Title extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Put it down to work for you'
		};
	}

	componentDidMount() {
		console.log('Component Title just mounted!');
		this.timer = setInterval(() => this.changeTitle(), 2000);
	}

	componentWillUnmount() {
		console.log('Component Title just unmounted');
		clearInterval(this.timer);
	}

	changeTitle() {
		const theTitle = titlesArray[randomNum(titlesArray.length)];
		this.setState({
			title: theTitle
		});
	}

	render() {
		return (
			<div>
				<h1>{this.state.title}</h1>
			</div>
		);
	}
}

export default Title;
