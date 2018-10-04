import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const styles = {
	root: {
		width: '100%',
		background: 'rgba(239, 245, 248, 0.827983)'
	},
	icons: {
		color: '#243B6B;'
	}
};

class BottomNav extends React.Component {
	state = {
		value: 'recents'
	};

	handleChange = (event, value) => {
		console.log(`value from BottomNav: ${value}`);
		this.setState({ value });
	};

	render() {
		const { classes } = this.props;
		const { value } = this.state;

		return (
			<BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
				<BottomNavigationAction
					label="Recents"
					value="recents"
					icon={<RestoreIcon className={classes.icons} />}
				/>
				<BottomNavigationAction
					label="Favorites"
					value="favorites"
					icon={<FavoriteIcon className={classes.icons} />}
				/>
				<BottomNavigationAction
					label="Nearby"
					value="nearby"
					icon={<LocationOnIcon className={classes.icons} />}
				/>
				<BottomNavigationAction
					label="Folder"
					value="folder"
					icon={<Icon className={classes.icons}>folder</Icon>}
				/>
			</BottomNavigation>
		);
	}
}

BottomNav.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BottomNav);
