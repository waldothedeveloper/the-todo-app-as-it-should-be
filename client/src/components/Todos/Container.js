import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MainNavigation from '../UI/Navigation/MainNavigation';
import List from './List';

const styles = {
	root: {
		width: '100%'
	},
	rootLogo: {
		flexDirection: 'column'
	},
	rootItem: {
		margin: '0 auto'
	},
	title: {
		marginTop: '1.5em'
	}
};

class Container extends React.Component {
	onChange = (date) => {
		console.log(date);
	};

	handleTaskChange = (event) => {
		this.props.handleTaskChange(event);
	};

	handleNewTask = (event) => {
		this.props.handleNewTask(event);
	};

	render() {
		return (
			<React.Fragment>
				<MainNavigation />
				<List
					handleNewTask={this.handleNewTask}
					handleTaskChange={this.handleTaskChange}
					date={this.props.date}
					task={this.props.task}
					todos={this.props.todos}
				/>
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(Container);
