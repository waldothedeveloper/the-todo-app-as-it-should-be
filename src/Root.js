import React, { Component } from 'react';
import TodoMap from './components/TodoMapping/Map';
import Title from './components/UI/Header/Title';
import shortid from 'shortid';
import './Root.css';

class Root extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{
					title: 'go to the gym',
					done: false,
					id: shortid.generate()
				},
				{
					title: 'eat healthy',
					done: false,
					id: shortid.generate()
				},
				{
					title: 'hug someone you love',
					done: false,
					id: shortid.generate()
				}
			]
		};
	}
	render() {
		return (
			<div className="container">
				<Title />
				<TodoMap todos={this.state.todos} />
			</div>
		);
	}
}

export default Root;
