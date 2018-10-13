import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/Add';
import Notifications from '@material-ui/icons/Notifications';
import Settings from '@material-ui/icons/Settings';
import MenuIcon from '@material-ui/icons/Menu';
import TimeLine from '@material-ui/icons/Timeline';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = (theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.secondary.main
	},
	grow: {
		flexGrow: 1
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		},
		marginRight: theme.spacing.unit,
		marginLeft: 0,
		width: 'auto',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing.unit * 3,
			width: 'auto'
		}
	},
	inputRoot: {
		color: 'inherit',
		width: '100%'
	},
	inputInput: {
		padding: theme.spacing.unit,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: 200
		}
	}
});

class MainNavigation extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar>
						<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
							{/* This is the pretty hamburger icon */}
							<MenuIcon />
						</IconButton>
						{/* Following stuff below the menu icon */}
						<div className={classes.search}>
							<InputBase
								placeholder="Search…"
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput
								}}
							/>
						</div>
						{/* This is to let the item grow? */}
						<div className={classes.grow} />
						{/* Add task icon */}
						<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
							<Add />
						</IconButton>
						{/* Productivity icon */}
						<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
							<TimeLine />
						</IconButton>
						{/* Notifications icon */}
						<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
							<Notifications />
						</IconButton>
						{/* Settings icon */}
						<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
							<Settings />
						</IconButton>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

MainNavigation.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainNavigation);
