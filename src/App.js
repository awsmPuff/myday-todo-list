import React, { useState, useEffect } from 'react';
import data from './data.json';
import TasksList from './components/TasksList';
import SubmitForm from './components/SubmitForm';

function App() {
  const [ toDoList, setToDoList ] = useState(data);
  const [ theme, setTheme ] = useState('light');

  const toggleTheme = () => {
    if(theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? {...task, complete: !task.complete} : {...task};
    })
    setToDoList(mapped);
  }
  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }
  const addTask = (userInput) => {
    if(!userInput){return;}
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  const totalRemaining = toDoList.filter(task => {
    return task.complete === false;
  }).length;

  
  console.log(toDoList);

  return (
    <div className={`App ${theme}`}>
      <div className='progress-bar' style={{ width: `${ (toDoList.filter(task => task.complete).length) * 100 / (toDoList.length) + "%"}` }}></div>
      <header>
        <h1>My Day</h1>
      </header>
      <button className='toggle' onClick={toggleTheme}>&#10022;</button>
      <main>
        <SubmitForm addTask={addTask} />
        <TasksList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} totalRemaining={totalRemaining} />
      </main>
      <blockquote>Enjoy your time.</blockquote>
    </div>
  );
}

export default App;
