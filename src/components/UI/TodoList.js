import React from 'react';
import './TodoList.css';

const TodoList = (props) => {
	return <li>{props.list}</li>;
};

export default TodoList;
