import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ todos, completeTodo }) => (
  <ul>
    {todos.map((todo, index) => (
      <TodoItem key={index} {...todo} completeTodo={completeTodo} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  completeTodo: PropTypes.func.isRequired
};

export default TodoList;
