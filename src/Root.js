import React, { Component } from 'react';
import Title from './components/UI/Header/Title';
import shortid from 'shortid';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Subtitles from './components/UI/Subheader/SubTitles';
import { theme } from './components/config/Theme';
import FacebookButton from './components/UI/Features/Login/FacebookButton';

class Root extends Component {
	constructor(props) {
		super(props);
		this.state = {
			subtitles: 'Very simple Things To-Do List.  Helps you to manage yourdaily life, without any hassle!',
			title: 'EFFICIO',
			todos: [],
			newtodo: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.changeSubtitles = this.changeSubtitles.bind(this);
	}

	changeSubtitles(subtitles) {
		this.setState({
			subtitles: subtitles
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
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				<Title title={this.state.title} />
				<Subtitles subtitles={this.state.subtitles} changingSubtitle={this.changeSubtitles} />
				<FacebookButton />
				{/* <Form
						newTodo={this.state.newtodo}
						receiveSubmit={this.handleSubmit}
						receiveChange={this.handleChange}
					/> */}
				{/* <TodoMap todos={this.state.todos} /> */}
			</MuiThemeProvider>
		);
	}
}

export default Root;
