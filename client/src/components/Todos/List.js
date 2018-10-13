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
		width: '100%',
		maxWidth: 360
	},
	icon: {
		color: '#dc4fad'
	}
});

class NewTodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			click: false
		};
	}
	cancelNewTodo = (event) => {
		this.setState({
			click: !this.state.click
		});
		event.preventDefault();
	};

	handleClick = () => {
		this.setState({
			click: true
		});
	};

	render() {
		const { classes } = this.props;
		const click = this.state.click;
		return (
			<div className={classes.root}>
				<List component="ul">
					<Today />
					{click === true ? (
						<Form cancelNewTodo={this.cancelNewTodo} />
					) : (
						<ListItem onClick={this.handleClick}>
							<ListItemIcon>
								<Add className={classes.icon} />
								<ListItemText primary="Add Task" />
							</ListItemIcon>
						</ListItem>
					)}
				</List>
			</div>
		);
	}
}

NewTodoList.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NewTodoList);
