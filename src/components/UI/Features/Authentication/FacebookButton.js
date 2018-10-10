import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const styles = (theme) => ({
	root: {
		width: '100%'
	},
	gridItem: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	button: {
		margin: theme.spacing.unit,
		width: 280,
		height: 50,
		color: '#ffffff'
	},
	FacebookButton: {
		background: 'linear-gradient(54deg, rgba(40,59,104,1) 0%, rgba(59,87,152,1) 100%)'
	},
	TwitterButton: {
		background: 'linear-gradient(54deg, rgba(81,178,224,1) 0%, rgba(89,220,255,1) 100%)'
	},
	extendedIcon: {
		marginRight: theme.spacing.unit
	}
});
function FacebookButton(props) {
	const { classes } = props;
	return (
		<Grid container className={classes.root} spacing={0}>
			<Grid item className={classes.gridItem} xs={12} sm={12} md={12} lg={12}>
				<Button
					variant="contained"
					aria-label="Facebook-icon"
					className={classNames(classes.button, classes.FacebookButton)}
				>
					<FontAwesomeIcon icon={faFacebookF} className={classes.extendedIcon} size="2x" />
					Facebook
				</Button>
				<Button
					variant="contained"
					aria-label="Twitter-icon"
					className={classNames(classes.button, classes.FacebookButton, classes.TwitterButton)}
				>
					<FontAwesomeIcon icon={faTwitter} className={classes.extendedIcon} size="2x" />
					Twitter
				</Button>
			</Grid>
			<Grid item className={classes.gridItem} xs={12} sm={12} md={12} lg={12}>
				<Link to="/inbox">
					<Button className={classes.button}>Try it</Button>
				</Link>
			</Grid>
		</Grid>
	);
}

FacebookButton.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FacebookButton);
