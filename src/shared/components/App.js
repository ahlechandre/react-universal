import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: this.props.data.todos,
    };

    this.onAddTodo = this.onAddTodo.bind(this);
    this.onCompleteTodo = this.onCompleteTodo.bind(this);
  }

  onAddTodo(text) {
    this.setState(prevState => ({
      todos: [
        ...prevState.todos,
        {
          id: prevState.todos.length + 1,
          text,
          completed: false,
        }
      ]
    }));
  }

  onCompleteTodo(id) {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => (
        id === todo.id ? {
          ...todo,
          completed: !todo.completed,
        } : todo
      )),
    }));
  }

  render() {
    return (
      <div>
        <h1>Todo Application</h1>
        <TodoInput addTodo={this.onAddTodo} />
        <TodoList todos={this.state.todos} completeTodo={this.onCompleteTodo} />
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.shape({
    todos: PropTypes.array.isRequired,
  }).isRequired,
};

export default App;
