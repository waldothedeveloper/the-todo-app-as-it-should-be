import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

const styles = {
	root: {
		color: green[600],
		'&$checked': {
			color: green[500]
		}
	},
	checked: {}
};

class RadioButtons extends React.Component {
	state = {
		selectedValue: 'b'
	};

	handleChange = (event) => {
		this.setState({ selectedValue: event.target.value });
	};

	render() {
		const { classes } = this.props;

		return (
			<div>
				<span>Monthly</span>
				<Radio
					checked={this.state.selectedValue === 'b'}
					onChange={this.handleChange}
					value="b"
					name="radio-button-demo"
					aria-label="B"
					icon={<RadioButtonUncheckedIcon fontSize="small" />}
					checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
					classes={{
						root: classes.root,
						checked: classes.checked
					}}
				/>
				<span>Daily</span>
				<Radio
					checked={this.state.selectedValue === 'c'}
					onChange={this.handleChange}
					value="c"
					name="radio-button-demo"
					aria-label="C"
					icon={<RadioButtonUncheckedIcon fontSize="small" />}
					checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
					classes={{
						root: classes.root,
						checked: classes.checked
					}}
				/>
			</div>
		);
	}
}

RadioButtons.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RadioButtons);
