import React from 'react';
import TodoList from '../UI/TodoList';

const todoMap = (props) => {
	let todos = props.todos;

	return (
		<ul>
			{todos.map((t) => {
				return <TodoList key={t.id} list={t.title} />;
			})}
		</ul>
	);
};

export default todoMap;
