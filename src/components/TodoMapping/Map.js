import React from 'react';
import TodoList from '../UI/TodoList';
import PropTypes from 'prop-types';
import './Map.css';

const TodoMap = (props) => {
	let todos = props.todos;

	return (
		<ul>
			{todos.map((t) => {
				return <TodoList key={t.id} list={t.title} />;
			})}
		</ul>
	);
};

TodoMap.propTypes = {
	todos: PropTypes.array.isRequired
};

export default TodoMap;
