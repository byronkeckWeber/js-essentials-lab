import { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
//Added TodoItem.jsx for my custom styling
import './App.css';

const App = () => {
  const [todoItems, setTodoItems] = useState([
    { id: 't1', text: 'Finish homework' },
    { id: 't2', text: 'Go on a hike' }
  ]);

  const addTodoHandler = enteredText => {
    setTodoItems(prevTodos => [
      { id: Math.random().toString(), text: enteredText },
      ...prevTodos
    ]);
  };

  const deleteItemHandler = todoId => {
    setTodoItems(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  };

  return (
    <div id="app-container">
      <section id="todo-form">
        <TodoInput onAddTodo={addTodoHandler} />
      </section>
      <section id="todos">
        <ul>
          {todoItems.map(todo => (
            // Using a TodoItem to apply my custom styling
            <TodoItem key={todo.id} onClick={() => deleteItemHandler(todo.id)}>
              {todo.text}
            </TodoItem>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default App;