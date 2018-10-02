import React, { Component } from 'react';
import Title from './components/UI/Header/Title';
import shortid from 'shortid';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import SubTitles from './components/UI/Subheader/SubTitles';
import { theme } from './components/config/Theme';
import FacebookButton from './components/UI/Features/Authentication/FacebookButton';
import Container from './components/Todos/Container';
import { Route } from 'react-router-dom';
import TodoMap from './components/TodoMapping/Map';

const API = 'https://jsonplaceholder.typicode.com/todos';
class Root extends Component {
	constructor(props) {
		super(props);
		this.state = {
			subtitles: 'Very simple Things To-Do List. Helps you to manage your daily life, without any hassle!',
			todos: [],
			title: 'TTD',
			newtodo: '',
			date: new Date(),
			error: null
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

	// lifecycle events
	componentDidMount() {
		fetch(API)
			.then((response) => response.json())
			.then((data) =>
				this.setState({
					todos: data
				})
			)
			.catch((error) => console.log.log(error));
	}

	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				<Route exact path="/" render={() => <Title title={this.state.title} />} />
				<Route
					exact
					path="/"
					render={() => (
						<SubTitles subtitles={this.state.subtitles} changingSubtitle={this.changeSubtitles} />
					)}
				/>
				<Route exact path="/" component={FacebookButton} />
				<Route
					exact
					path="/monthly-view"
					render={() => <Container title={this.state.title} currentDate={this.state.date} />}
				/>
				<Route
					exact
					path="/monthy-view"
					render={() => {
						<TodoMap todos={this.state.todos} />;
					}}
				/>
				{/* <Form
						newTodo={this.state.newtodo}
						receiveSubmit={this.handleSubmit}
						receiveChange={this.handleChange}
					/> */}
			</MuiThemeProvider>
		);
	}
}

export default Root;
