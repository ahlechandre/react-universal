import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ id, text, completed, completeTodo }) => (
  <li onClick={() => completeTodo(id)} style={{
    textDecoration: completed ? 'line-through' : 'none',
  }}>
    {text}
  </li>
);

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  completeTodo: PropTypes.func.isRequired,
};

export default TodoItem;
