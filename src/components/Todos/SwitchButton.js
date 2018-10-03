import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
	root: {
		display: 'inline-flex',
		width: 285,
		height: 50,
		borderRadius: '100px',
		marginBottom: '2em'
	},
	selectedButton: {
		width: 142,
		height: 50,
		margin: theme.spacing.unit
	},
	button: {
		width: 142,
		height: 50,
		margin: theme.spacing.unit
	}
});
class SwitchButton extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Button aria-label="Monthly" className={classes.selectedButton}>
					Monthly
				</Button>
				<Button aria-label="Daily" className={classes.button}>
					Daily
				</Button>
			</div>
		);
	}
}

export default withStyles(styles)(SwitchButton);
