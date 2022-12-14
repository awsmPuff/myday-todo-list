import React from 'react';
import '../css/TasksList.css';
import Task from './Task';

export default function TasksList({toDoList, handleToggle, handleFilter, totalRemaining }) {

  return (
    <div className='TasksList'>
      <ul>
        {toDoList.map((todo) => {
          return (
            <li key={todo.id} style={toDoList.length === 0 ? {display: "none"} : {display: "block"}}>
              <Task todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} />
            </li>
          )
        })}
      </ul>
      <div style={toDoList.length === 0 ? {display: "block"} : {display: "none"}}>Great! You have completed all todos today!</div>
      <div className='end'>
        <div>{totalRemaining} item(s) left</div>
        <button onClick={handleFilter}>clear completed</button>
      </div>
    </div>
  )
}
