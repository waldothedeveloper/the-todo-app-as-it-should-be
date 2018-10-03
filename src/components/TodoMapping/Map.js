import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = (theme) => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.text.primary,
		position: 'relative',
		overflow: 'auto',
		maxHeight: 300
	}
});

function TodoMap(props) {
	const { classes } = props;

	return (
		<List className={classes.root}>
			{props.todos.map((t) => (
				<ListItem key={t.id}>
					<ListItemText secondary={`${t.topic} ${t.dueDate} ${t.reminder}`} />
				</ListItem>
			))}
		</List>
	);
}

TodoMap.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TodoMap);
