import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Calendar from 'react-calendar';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import SwitchButton from './SwitchButton';
import TodoMap from '../../components/TodoMapping/Map';
import BottomNav from '../UI/Navigation/BottomNav';

const styles = {
	root: {
		width: '100%'
	},
	rootLogo: {
		flexDirection: 'column'
	},
	rootItem: {
		margin: '0 auto'
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
				{/* Logo */}
				<Grid
					container
					className={classNames(classes.root, classes.rootLogo)}
					alignItems="flex-start"
					justify="center"
					spacing={0}
				>
					<Grid item className={classes.rootItem}>
						<Typography className={classes.title} align="center" variant="headline" gutterBottom>
							{this.props.title}
						</Typography>
					</Grid>
					<Grid item className={classes.rootItem}>
						{/* SwitchButton */}
						<SwitchButton />
					</Grid>
				</Grid>

				{/* Calendar */}
				<Grid container className={classes.root} alignItems="flex-start" justify="center" spacing={0}>
					<Grid item>
						<Calendar value={this.props.currentDate} onChange={this.onChange} />
					</Grid>
				</Grid>
				{/* Todos */}
				<Grid container className={classes.root} justify="center" spacing={0}>
					<Grid item>
						<TodoMap todos={this.props.todos} />
					</Grid>
				</Grid>
				{/*  Bottom Navigation */}
				<BottomNav />
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(Container);
