import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
	root: {
		backgroundColor: theme.palette.text.primary,
		width: 285,
		height: 50,
		borderRadius: '100px'
	},
	selectedButton: {
		width: 155,
		height: 50,
		background: theme.palette.primary.light,
		boxShadow: 'none'
	},
	button: {
		width: 130,
		height: 50,
		background: theme.palette.text.primary,
		boxShadow: 'none'
	}
});
class SwitchButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false
		};
		this.toggleClass = this.toggleClass.bind(this);
	}

	toggleClass() {
		const currentState = this.state.active;
		this.setState({ active: !currentState });
	}

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Button
					onClick={this.toggleClass}
					variant="extendedFab"
					aria-label="Monthly"
					className={this.state.active ? classes.selectedButton : classes.button}
				>
					Monthly
				</Button>
				<Button
					onClick={this.toggleClass}
					variant="extendedFab"
					aria-label="Daily"
					className={this.state.active ? classes.selectedButton : classes.button}
				>
					Daily
				</Button>
			</div>
		);
	}
}

export default withStyles(styles)(SwitchButton);
