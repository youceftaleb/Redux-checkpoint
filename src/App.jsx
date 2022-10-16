import './App.css'
import { todos } from './data'
import { useEffect } from 'react'
import { TodoItem } from './components/todo-item';
import { AddTask } from './components/add-task';
import { Search } from './components/search-bar';
import todoListLogo from '../public/logo.png';
import { Logo } from './components/logo-container';

import { useSelector,useDispatch } from 'react-redux';

function App() {
  const filter = useSelector(state => state.FilterReducer.filter);
  const todoList = useSelector(state => state.TodoListReducer.todoList);
  const dispatch = useDispatch();

  const handleSetFilter = (text) => {
    dispatch({ type: 'CHANGEFILTER', payload: text });
  }
  useEffect(() => {
    if (filter === '') {
      dispatch({type:'CHANGETODOLIST',payload:todos});
    } else {
      const filteredtodo = todos.filter(todo => todo.title.includes(filter));
      dispatch({ type: 'CHANGETODOLIST', payload: filteredtodo });
    }
  }, [filter]);
  const handleAddTodo = (txt) => {
    const newItem = {
      id: new Date().getTime(),
      title: txt,
      isFinished: false,
    }
    dispatch({ type: 'CHANGETODOLIST', payload: [...todoList, newItem] });
  }
  const handleRemoveTodo = (id) => {
    const newArr  = todoList.filter((item) => item.id !== id);
    dispatch({ type: 'CHANGETODOLIST', payload: newArr });
  }
  const handleTrue = (id) => {
    const newArr = todoList.map(item => item.id === id ? { ...item, isFinished: true } : item)
    dispatch({ type: 'CHANGETODOLIST', payload: newArr });
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

export default App;
