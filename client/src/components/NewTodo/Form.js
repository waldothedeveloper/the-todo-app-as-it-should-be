import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
	constructor(props) {
		super(props);
	}
	cancelNewTodo = () => {
		this.props.cancelNewTodo;
	};
	render() {
		return (
			<form>
				<input type="text" value={this.props.newTodo} placeholder="e.g: enter a new task" />
				<input type="submit" value="Submit" />
				<input onClick={this.cancelNewTodo} type="submit" value="Cancel" />
			</form>
		);
	}
}

export default Form;
