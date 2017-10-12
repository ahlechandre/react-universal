import React from 'react';
import PropTypes from 'prop-types';

const TodoInput = ({ addTodo }) => {
  let inputElement;

  return (
    <div>
      <form onSubmit={event => {
          event.preventDefault();
          
          if (!inputElement.value.trim()) return;

          addTodo(inputElement.value);
          inputElement.value = '';
        }}>
        <input type="text" ref={element => {
          inputElement = element;
        }} />
        <button type="input">Add</button>
      </form>
    </div>
  );
};

TodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoInput;
