import './App.css'
import { todos } from './data'
import { useEffect, useState } from 'react'
import { TodoItem } from './components/todo-item';
import { AddTask } from './components/add-task';
import { Search } from './components/search-bar';
import todoListLogo from '../public/logo.png';
import { Logo } from './components/logo-container';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState("");
  const handleSetFilter = (text) => {
    setFilter(text);
  }
  useEffect(() => {
    setTodoList(todos);
  }, []);
  useEffect(() => {
    if (filter === '') {
      setTodoList(todos);
    } else {
      setTodoList(todos.filter(todo => todo.title.toLowerCase().includes(filter.toLocaleLowerCase())));
    }
  }, [filter]);
  const handleAddTodo = (txt) => {
    const newItem = {
      id: new Date().getTime(),
      title: txt,
      isFinished: false,
    }
    setTodoList([...todoList, newItem]);
  }
  const handleRemoveTodo = (id) => {
    const newArr  = todoList.filter((item) => item.id !== id);
    setTodoList(newArr);
  }
  const handleTrue = (id) => {
    const newArr = todoList.map(item => item.id === id ? { ...item, isFinished: true } : item)
    setTodoList(newArr);
  }
  return (
      <div className="p-0 container-fluid">
      <Logo logo={todoListLogo} />
      <div className="row mb-3">
        <div className="col-md-8 offset-md-2">
          <AddTask addtodo={handleAddTodo} />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-8 offset-md-2">
          <Search handleSetFilter={handleSetFilter} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {todoList.map((item) => <TodoItem key={item.id} item={item} removeFun={handleRemoveTodo} checkFun={handleTrue} />)}
        </div>
      </div>
      </div>
  )
}

export default App
