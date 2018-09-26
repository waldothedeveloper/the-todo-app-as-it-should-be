import React from 'react';
import './TodoList.css';
import PropTypes from 'prop-types';

const TodoList = (props) => {
	return <li>{props.list}</li>;
};

TodoList.propTypes = {
	list: PropTypes.string.isRequired
};

export default TodoList;
