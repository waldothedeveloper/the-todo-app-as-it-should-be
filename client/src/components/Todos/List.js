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
import Map from '../TodoMapping/Map';

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

	cancelNewTask = (event) => {
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
		const Addtask = this.state.task;
		return (
			<div className={classes.root}>
				<List component="ul">
					<Today />
					{/* Map returns an <li> with each new todo */}
					<Map todos={this.props.todos} />
					<ListItem className={!Addtask ? classes.hide : ''}>
						<Form
							task={this.props.task}
							date={this.props.date}
							handleTaskChange={this.handleTaskChange}
							handleNewTask={this.handleNewTask}
							cancelNewTask={this.cancelNewTask}
						/>
					</ListItem>
					{/* Add a new task button */}
					<ListItem className={!Addtask ? '' : classes.hide} onClick={this.handleClick}>
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
	date: PropTypes.object.isRequired,
	task: PropTypes.string.isRequired
};

export default withStyles(styles)(NewTodoList);
