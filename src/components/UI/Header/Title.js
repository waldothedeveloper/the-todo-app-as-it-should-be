import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	root: {
		width: '100%',
		height: '33vh',
		backgroundColor: '#221738',
		borderRadius: '0 0 28.96px 28.96px'
	}
};
class Title extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<Grid container className={classes.root} alignItems="center" justify="center" spacing={0}>
				<Grid item>
					<Typography align="center" variant="subheading" gutterBottom>
						Hi there! Welcome to
					</Typography>
					<Typography align="center" color="textPrimary" variant="display1">
						{this.props.title}
					</Typography>
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
