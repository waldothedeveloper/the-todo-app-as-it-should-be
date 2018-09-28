import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const styles = (theme) => ({
	button: {
		margin: theme.spacing.unit
	},
	extendedIcon: {
		marginRight: theme.spacing.unit
	}
});

function FacebookButton(props) {
	const { classes } = props;
	return (
		<div>
			<Button variant="extendedFab" aria-label="Facebook-icon" className={classes.button}>
				<FontAwesomeIcon icon={faFacebook} className={classes.extendedIcon} />
				Facebook
			</Button>
		</div>
	);
}

FacebookButton.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FacebookButton);
