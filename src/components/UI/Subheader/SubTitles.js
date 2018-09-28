import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { randomNum, subtitlesArray } from '../../utils/helpers';

const styles = {
	root: {
		width: '100%',
		height: '33vh'
	},
	subtitles: {
		marginTop: '3.5em'
	}
};
class Subtitles extends React.Component {
	componentDidMount() {
		this.timer = setInterval(() => this.changeTitle(), 4000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	changeTitle() {
		const subtitles = subtitlesArray[randomNum(subtitlesArray.length)];
		this.props.changingSubtitle(subtitles);
	}

	render() {
		const { classes } = this.props;
		return (
			<Grid container className={classes.root} alignItems="flex-start" justify="center" spacing={0}>
				<Grid item>
					<Typography className={classes.subtitles} align="center" variant="subheading">
						{this.props.subtitles}
					</Typography>
				</Grid>
			</Grid>
		);
	}
}

Subtitles.propTypes = {
	classes: PropTypes.object.isRequired,
	changingSubtitle: PropTypes.func.isRequired,
	subtitles: PropTypes.string.isRequired
};

export default withStyles(styles)(Subtitles);
