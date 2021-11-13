
import React from 'react';
import { FaRegListAlt } from 'react-icons/fa';

import { TodoForm } from './components/todo-form/todo-form';
import { TodoItem } from './components/todo-item/todo-item';
import './App.scss';


function App() {

  const [todo, setTodo] = React.useState("");
  const [todos, setTodos] = React.useState([
    {
      task: "This is a sampe todo",
      isDone: true
    },
    {
      task: "This is a sampe todo",
      isDone: false
    }
  ]);

  const onTodoFormChange = event => {
    setTodo(event.target.value);
    console.log(event.target.value);
  };

  React.useEffect(() => {
    console.log(todo);
  });

  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <div className="todo-container border border-light shadow-sm p-4">
        <div className="d-flex flex-row justify-content-center">
          <h1 className="mt-3 mb-5"><FaRegListAlt /> <div style={{ padding: 0, margin: 0, display: "inline-block", textTransform: "uppercase" }}>todo</div></h1>
        </div>
        <TodoForm onTodoFormChange={onTodoFormChange} />
        <div className="my-4 border-bottom"></div>
        <div className="d-flex flex-row">
          <div className="input-group mx-2">
            <label className="input-group-text text-secondary">Filter</label>
            <select className="form-select">
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="active">Active</option>
              <option value="has-due-date">Has due date</option>
            </select>
          </div>
          <div className="input-group mx-2">
            <label className="input-group-text text-secondary">Sort</label>
            <select className="form-select">
              <option value="added-date-asc">Added date</option>
              <option value="due-date-desc">Due date</option>
            </select>
          </div>
        </div>
        <div className="my-4">
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              index={index}
              todo={todo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
