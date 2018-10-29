import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import classNames from 'classnames';

// theme.spacing.unit = 8px
const styles = (theme) => ({
	root: {
		minWidth: 325,
		width: 384,
		paddingTop: theme.spacing.unit * 2,
		paddingRight: 0,
		paddingBottom: 0,
		paddingLeft: theme.spacing.unit * 4.5
	},
	text: {
		color: theme.palette.text.primary
	},
	date: {
		paddingLeft: theme.spacing.unit,
		color: '#999'
	}
});

function Today(props) {
	const { classes } = props;
	const now = moment();
	return (
		<Grid className={classes.root} container direction="row" justify="flex-start" alignItems="center">
			<IconButton>
				<Typography className={classes.text} variant="h5" gutterBottom>
					Today
				</Typography>
			</IconButton>
			<Typography className={classNames(classes.text, classes.date)} variant="caption">
				{now.format('ddd MMM D')}
			</Typography>
		</Grid>
	);
}

Today.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Today);
