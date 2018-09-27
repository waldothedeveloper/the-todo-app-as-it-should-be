import React, { Component } from 'react';
import TodoMap from './components/TodoMapping/Map';
import Title from './components/UI/Header/Title';
import Form from './components/NewTodo/Form';
import shortid from 'shortid';
import './Root.css';

class Root extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Put it down to work for you',
			todos: [],
			newtodo: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.changeTitle = this.changeTitle.bind(this);
	}

	changeTitle(theTitle) {
		this.setState({
			title: theTitle
		});
	}

	handleChange(newTodo) {
		this.setState({
			newtodo: newTodo
		});
	}

	handleSubmit(event) {
		if (this.state.newtodo !== '') {
			this.setState({
				newtodo: '',
				todos: [
					...this.state.todos,
					{
						title: this.state.newtodo,
						id: shortid.generate(),
						done: false
					}
				]
			});
		} else {
			alert('You cannot enter an empty title');
		}

		event.preventDefault();
	}

	render() {
		return (
			<div className="container">
				<Title title={this.state.title} changingTitle={this.changeTitle} />
				<Form
					newTodo={this.state.newtodo}
					receiveSubmit={this.handleSubmit}
					receiveChange={this.handleChange}
				/>
				<TodoMap todos={this.state.todos} />
			</div>
		);
	}
}

export default Root;
