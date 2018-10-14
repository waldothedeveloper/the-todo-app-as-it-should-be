import React from 'react';
import Title from './components/UI/Header/Title';
import shortid from 'shortid';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import SubTitles from './components/UI/Subheader/SubTitles';
import { theme } from './components/config/Theme';
import SocialAuthButtons from './components/UI/Features/Authentication/SocialAuthButtons';
import Container from './components/Todos/Container';
import { Route } from 'react-router-dom';

class Root extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			subtitles: 'Own your day without any hassle!',
			todos: [
				{
					id: shortid.generate(),
					topic: 'call my work',
					description: 'tell my boss I love the new project',
					dueDate: 'Sometime in the calendar',
					reminder: '12am',
					repeat: 'every hour',
					color: 'red',
					completed: false,
					userId: 1
				},
				{
					id: shortid.generate(),
					topic: 'make dinner',
					description: 'This is a surprise for my wife',
					dueDate: 'Sometime in the calendar',
					reminder: '6pm',
					repeat: 'every day',
					color: 'blue',
					completed: false,
					userId: 1
				}
			],
			title: 'Factodo',
			newtodo: '',
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
				<Route exact path="/" component={SocialAuthButtons} />
				<Route
					exact
					path="/inbox"
					render={() => <Container title={this.state.title} todos={this.state.todos} />}
				/>
			</MuiThemeProvider>
		);
	}
}

export default Root;
