import React from 'react';
import '../css/Task.css';

export default function Task({ todo, handleToggle }) {
    const handleClick = e => {
        e.preventDefault();
        handleToggle(e.target.id);
    }
  return (
    <div 
    key={todo.id + todo.task}
    id={todo.id} 
    value={todo.id} 
    className={todo.complete ? "strike" : ""} 
    onClick={handleClick}>
      {todo.task}
    </div>
  )
}
