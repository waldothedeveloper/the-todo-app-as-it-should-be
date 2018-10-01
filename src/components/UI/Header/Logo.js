import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	logo: {
		color: '#F99231',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '1.5em'
	}
};

const Logo = (props) => {
	const { classes } = props;
	return (
		<Grid item className={classes.logo}>
			<FontAwesomeIcon icon={faClipboard} size="lg" transform={{ rotate: 42 }} />
		</Grid>
	);
};

export default withStyles(styles)(Logo);
