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
import { now } from './components/utils/helpers';
import { Route } from 'react-router-dom';
import BgImage from './components/UI/BackgroundImgComponents/BgImage';
import moment from 'moment';

class Root extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			subtitles: 'Own your day without any hassle!',
			todos: [],
			completedTasks: [],
			title: 'Factodo',
			task: '',
			error: null,
			date: moment().format("hh:mm:a")
		};
	}

	changeSubtitles = (subtitles) => {
		this.setState({
			subtitles: subtitles
		});
	};

	handleTaskChange = (event) => {
		this.setState({
			task: event.target.value
		});
		event.preventDefault();
	};

	handleNewTask = (event) => {
		if (this.state.task !== '') {
			this.setState((state) => {
				return {
					todos: [
						...this.state.todos,
						{
							id: shortid.generate(),
							task: this.state.task,
							dueDate: { now },
							reminder: {},
							priority: '',
							completed: false,
							userId: 1
						}
					],
					task: (state.task = '')
				};
			});
		} else {
			alert('You cannot enter an empty title');
		}

		event.preventDefault();
	};

	handleCompletedTask = (id) => {
		const todos = [ ...this.state.todos ];
		const completedTodo = todos.splice(id, 1);
		const completed = [ ...this.state.completedTasks ];
		completed.push(completedTodo[0]);
		this.setState({
			todos,
			completedTasks: completed
		});
	};

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
					render={() => (
						<Container
							date={this.state.date}
							title={this.state.title}
							handleTaskChange={this.handleTaskChange}
							handleNewTask={this.handleNewTask}
							task={this.state.task}
							todos={this.state.todos}
							taskCompleted={this.state.todos}
							handleCompletedTask={this.handleCompletedTask}
						/>
					)}
				/>
				<Route exact path='/inbox' render={() => (
					<BgImage />
				)} />
			</MuiThemeProvider>
		);
	}
}

export default Root;
