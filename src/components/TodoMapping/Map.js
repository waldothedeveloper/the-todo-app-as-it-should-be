import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
	root: {
		width: '100%',
		maxWidth: 360,
		position: 'relative',
		overflow: 'auto',
		maxHeight: 300
	},
	li: {
		background: theme.palette.text.primary,
		borderRadius: '3px',
		height: 48,
		width: 280,
		marginBottom: '0.8em'
	}
});

function TodoMap(props) {
	const { classes } = props;

	return (
		<React.Fragment>
			<Typography variant="headline" gutterBottom>
				This Month
			</Typography>
			<List className={classes.root}>
				{props.todos.map((t) => (
					<ListItem key={t.id} className={classes.li}>
						<ListItemText secondary={`${t.topic} ${t.dueDate} ${t.reminder}`} />
					</ListItem>
				))}
			</List>
		</React.Fragment>
	);
}

TodoMap.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TodoMap);
