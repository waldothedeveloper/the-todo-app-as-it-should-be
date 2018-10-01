import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Logo from './Logo';

const styles = {
	root: {
		width: '100%',
		height: '35vh',
		backgroundColor: '#221738',
		borderRadius: '0 0 28.96px 28.96px'
	},
	logo: {
		color: '#F99231',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '1.5em'
	},
	title: {
		fontWeight: 800
	}
};
class Title extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<Grid container className={classes.root} alignItems="center" justify="center" spacing={0}>
				<Grid item>
					<Typography align="center" variant="headline" gutterBottom>
						Hi there! Welcome to
					</Typography>
					<Logo />
					{/* <Typography className={classes.title} align="center" color="textPrimary" variant="display4">
						{this.props.title}
					</Typography> */}
				</Grid>
			</Grid>
		);
	}
}

Title.propTypes = {
	classes: PropTypes.object.isRequired,
	title: PropTypes.string.isRequired
};

export default withStyles(styles)(Title);
