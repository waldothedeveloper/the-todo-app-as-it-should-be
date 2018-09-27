import React from 'react';
import './TodoList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const TodoList = (props) => {
	return (
		<React.Fragment>
			<FontAwesomeIcon className="todoButton" color="#E67E22" icon={faCircle} />
			<li className="todoList">{props.list}</li>
		</React.Fragment>
	);
};

TodoList.propTypes = {
	list: PropTypes.string.isRequired
};

export default TodoList;
