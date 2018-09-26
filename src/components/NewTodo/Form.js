import React from 'react';
import './Form.css';
import PropTypes from 'prop-types';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(event) {
		this.props.receiveSubmit(event);
	}

	handleChange(event) {
		this.props.receiveChange(event.target.value);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>Enter a new todo:</label>
				<input
					onChange={this.handleChange}
					type="text"
					value={this.props.newTodo}
					placeholder="e.g: enter a new task"
				/>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

Form.propTypes = {
	receiveSubmit: PropTypes.func.isRequired,
	receiveChange: PropTypes.func.isRequired,
	newTodo: PropTypes.string.isRequired
};

export default Form;
