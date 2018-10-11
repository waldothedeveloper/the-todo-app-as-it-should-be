import React from 'react';
import Button from '@material-ui/core/Button';
import { withAuth } from '@okta/okta-react';
import Container from '../../../Todos/Container';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
	button: {
		margin: theme.spacing.unit
	}
});

class Authentication extends React.Component {
	constructor(props) {
		super(props);
		this.state = { authenticated: null };
		this.checkAuthentication = this.checkAuthentication.bind(this);
		this.checkAuthentication();
		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
	}

	async checkAuthentication() {
		const authenticated = await this.props.auth.isAuthenticated();
		console.log('authenticated: ', authenticated);
		if (authenticated !== this.state.authenticated) {
			this.setState({ authenticated });
		}
	}

	componentDidUpdate() {
		this.checkAuthentication();
	}

	async login() {
		// Redirect to '/inbox' after login
		this.props.login('/inbox');
	}

	async logout() {
		console.log('If you see this it means the logout button was clicked and you are successfully logout');
		// Redirect to '/' after logout
		this.props.logout('/');
	}

	render() {
		console.log(`I am the auth state: ${this.state.authenticated}`);
		if (this.state.authenticated === null)
			return (
				<Button className={styles.button} variant="contained" onClick={this.login}>
					Login
				</Button>
			);
		return this.state.authenticated ? (
			<Container logout={this.logout} />
		) : (
			<Typography variant="overline" gutterBottom>
				This will be a fallback Component <br /> if something goes wrong with the user auth
			</Typography>
		);
	}
}

export default withAuth(Authentication);
