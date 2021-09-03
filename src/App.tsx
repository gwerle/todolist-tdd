import React from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = React.useState<string[]>([])

  const addTodo = (value: string) => {
    setTodos([...todos, value])
  }

  const removeTodo = (index: number) => {
    setTodos(todos.filter((todo, i) => index !== i))
  }

  return (
    <>
      <Form onSubmit={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </>
  );
}

export default App;

