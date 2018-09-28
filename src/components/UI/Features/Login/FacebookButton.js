import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames';

const styles = (theme) => ({
	root: {
		width: '100%'
	},
	gridItem: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	FacebookButton: {
		margin: theme.spacing.unit,
		width: 280,
		height: 50,
		backgroundColor: '#3B5798',
		color: '#ffffff',
		display: 'flex',
		justifyContent: 'flex-start'
	},
	TwitterButton: {
		backgroundColor: '#59DCFF'
	},
	extendedIcon: {
		marginRight: theme.spacing.unit
	}
});
function FacebookButton(props) {
	const { classes } = props;
	return (
		<Grid container className={classes.root} spacing={0}>
			<Grid className={classes.gridItem} item xs={12} sm={12} md={12} lg={12}>
				<Button variant="contained" aria-label="Facebook-icon" className={classes.FacebookButton}>
					<FontAwesomeIcon icon={faFacebookF} className={classes.extendedIcon} size="2x" />
					Facebook
				</Button>
			</Grid>
			<Grid className={classes.gridItem} item xs={12} sm={12} md={12} lg={12}>
				<Button
					variant="contained"
					aria-label="Twitter-icon"
					className={classNames(classes.FacebookButton, classes.TwitterButton)}
				>
					<FontAwesomeIcon icon={faTwitter} className={classes.extendedIcon} size="2x" />
					Twitter
				</Button>
			</Grid>
		</Grid>
	);
}

FacebookButton.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FacebookButton);
