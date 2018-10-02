import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Calendar from 'react-calendar';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import SwitchButton from './SwitchButton';

const styles = {
	root: {
		width: '100%'
	},
	rootTitle: {
		height: '10vh'
	},
	rootCalendar: {
		height: '40vh'
	},
	gridItem: {
		width: '100%',
		marginBottom: '2em'
	},
	title: {
		marginTop: '1.5em'
	}
};

class Container extends React.Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
	}

	onChange(date) {
		console.log(date);
	}

	render() {
		const { classes } = this.props;
		return (
			<React.Fragment>
				{/* Title and logo */}
				<Grid
					container
					className={classNames(classes.root, classes.rootTitle)}
					alignItems="flex-start"
					justify="center"
					spacing={0}
				>
					<Grid item className={classes.gridItem}>
						<Typography className={classes.title} align="center" variant="headline" gutterBottom>
							{this.props.title}
						</Typography>
					</Grid>
				</Grid>
				{/* SwitchButton */}
				<Grid
					container
					className={classNames(classes.root)}
					alignItems="flex-start"
					justify="center"
					spacing={0}
				>
					<Grid item>
						<SwitchButton />
					</Grid>
				</Grid>
				{/* Calendar */}
				<Grid
					container
					className={classNames(classes.root, classes.rootCalendar)}
					alignItems="flex-start"
					justify="center"
					spacing={0}
				>
					<Grid item>
						<Calendar value={this.props.currentDate} onChange={this.onChange} />
					</Grid>
				</Grid>
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(Container);
