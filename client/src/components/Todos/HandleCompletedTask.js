import React from 'react';
import RadioBtnUnchecked from '../Todos/RadioBtnUnchecked';
import RadioBtnChecked from '../Todos/RadioBtnChecked';


class HandleCompletedTask extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			taskClicked: false
		}
	}
	handleClick = (event) => {
		this.setState({
			taskClicked: !this.state.taskClicked
		})
		this.props.handleCompletedTask()
		event.preventDefault();
	};

	render() {
		const taskClicked = this.state.taskClicked
		return (
			<div onClick={this.handleClick}>
				{
					!taskClicked ? (
					
							<RadioBtnUnchecked />
				
					) : (
					
							<RadioBtnChecked />
				
					)
				}
			</div>
		);
	}
}

export default HandleCompletedTask;
