import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Add from '@material-ui/icons/Add';
import Today from '../UI/Features/Dates/Today';
import Form from '../NewTodo/Form';

const styles = (theme) => ({
	root: {
		width: '100%'
	},
	icon: {
		color: '#dc4fad'
	},
	hide: {
		display: 'none'
	}
});

class NewTodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			task: false
		};
	}

	cancelNewTodo = (event) => {
		this.setState({
			task: !this.state.task
		});
		event.preventDefault();
	};

	handleClick = () => {
		this.setState({
			task: true
		});
	};

	handleTaskChange = (event) => {
		this.props.handleTaskChange(event);
	};

	handleNewTask = (event) => {
		this.props.handleNewTask(event);
	};
	render() {
		const { classes } = this.props;
		const task = this.state.task;
		return (
			<div className={classes.root}>
				<List component="ul">
					<Today />
					<ListItem className={!task ? classes.hide : ''}>
						<Form
							date={this.props.date}
							cancelNewTodo={this.cancelNewTodo}
							handleTaskChange={this.handleTaskChange}
							handleNewTask={this.handleNewTask}
						/>
					</ListItem>
					<ListItem className={!task ? '' : classes.hide} onClick={this.handleClick}>
						<ListItemIcon>
							<Add className={classes.icon} />
							<ListItemText primary="Add Task" />
						</ListItemIcon>
					</ListItem>
				</List>
			</div>
		);
	}
}

NewTodoList.propTypes = {
	date: PropTypes.object.isRequired
};

export default withStyles(styles)(NewTodoList);
