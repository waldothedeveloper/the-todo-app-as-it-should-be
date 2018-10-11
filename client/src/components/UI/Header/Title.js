import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Logo from './Logo';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit * 4
	},
	title: {
		fontWeight: 800
	},
	item: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center'
	}
});
class Title extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<Grid container className={classes.root} alignItems="center" justify="center" spacing={0}>
				<Grid item className={classes.item}>
					<Logo />
					<Typography className={classes.title} align="center" color="textPrimary" variant="h2">
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
