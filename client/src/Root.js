import React from 'react';
import Title from './components/UI/Header/Title';
import shortid from 'shortid';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import SubTitles from './components/UI/Subheader/SubTitles';
import { theme } from './components/config/Theme';
import SocialAuthButtons from './components/UI/Features/Authentication/SocialAuthButtons';
import Authentication from './components/UI/Features/Authentication/Authentication';
import Container from './components/Todos/Container';
import { Route } from 'react-router-dom';
import { now } from '../src/components/utils/helpers';
import { Security, ImplicitCallback } from '@okta/okta-react';

const config = {
	issuer: 'https://dev-441605.oktapreview.com/oauth2/default',
	redirect_uri: window.location.origin + '/implicit/callback',
	client_id: '0oaglhnm7lbqV284F0h7'
};
class Root extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			subtitles: 'Own your day without any hassle!',
			response: '',
			todos: [
				{
					id: shortid.generate(),
					topic: 'call my work',
					description: 'tell my boss I love the new project',
					dueDate: now.format('Do MMM'),
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
					dueDate: now.format('Do MMM'),
					reminder: '6pm',
					repeat: 'every day',
					color: 'blue',
					completed: false,
					userId: 1
				}
			],
			title: 'Factodo',
			newtodo: '',
			date: new Date('November 2, 2016 05:15:00'),
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

	componentDidMount() {
		this.callApi().then((res) => this.setState({ response: res.express })).catch((err) => console.log(err));
	}

	callAPi = async () => {
		const response = await fetch('/api/root');
		const body = await response.json();

		if (response.status !== 200) throw Error(body.message);
		return body;
	};

	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				<Security issuer={config.issuer} client_id={config.client_id} redirect_uri={config.redirect_uri}>
					<Route exact path="/" render={() => <Title title={this.state.title} />} />
					<Route
						exact
						path="/"
						render={() => (
							<SubTitles subtitles={this.state.subtitles} changingSubtitle={this.changeSubtitles} />
						)}
					/>
					<Route exact path="/" component={SocialAuthButtons} />
					<Route path="/" component={Authentication} />
					<Route path="/implicit/callback" component={ImplicitCallback} />
				</Security>
				<Route
					exact
					path="/inbox"
					render={() => (
						<Container title={this.state.title} currentDate={this.state.date} todos={this.state.todos} />
					)}
				/>
			</MuiThemeProvider>
		);
	}
}

export default Root;
