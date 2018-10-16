import React from 'react';
import RadioBtnUnchecked from '../Todos/RadioBtnUnchecked';
import RadioBtnChecked from '../Todos/RadioBtnChecked';
import IconButton from '@material-ui/core/IconButton';

class HandleCompletedTask extends React.Component {
	handleClick = (event) => {
		console.log(this.props.taskId);
		event.preventDefault();
	};

	render() {
		return (
			<IconButton onClick={this.handleClick}>
				<RadioBtnUnchecked />
			</IconButton>
		);
	}
}

export default HandleCompletedTask;
