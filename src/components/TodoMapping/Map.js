import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const styles = (theme) => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
		position: 'relative',
		overflow: 'auto',
		maxHeight: 300
	},
	listSection: {
		backgroundColor: theme.palette.text.primary
	},
	ul: {
		backgroundColor: theme.palette.text.primary,
		padding: 0
	},
	text: {
		color: theme.palette.text.secondary
	}
});

class TodoList extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<List className={classes.root} subheader={<li />}>
				{this.props.todos.map((t) => (
					<li key={`section-${t.id}`} className={classes.listSection}>
						<ul className={classes.ul}>
							<ListSubheader>{`${t.topic}`}</ListSubheader>
							{this.props.todos.map((t) => (
								<ListItem key={t.id}>
									<ListItemText secondary={`${t.description}`} />
								</ListItem>
							))}
						</ul>
					</li>
				))}
			</List>
		);
	}
}

TodoList.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TodoList);
