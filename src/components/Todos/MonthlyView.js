import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Logo from '../UI/Header/Logo';
import Calendar from 'react-calendar';

const styles = (theme) => ({
	root: {
		width: '100%',
		height: '25vh'
	},
	gridItem: {
		width: '100%',
		marginBottom: '2em'
	}
});

class MonthlyView extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<Grid container className={classes.root} alignItems="flex-start" justify="center" spacing={0}>
				<Grid item className={classes.gridItem}>
					<Logo />
				</Grid>
				<Grid item>
					<Calendar value={this.props.currentDate} />
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(MonthlyView);
