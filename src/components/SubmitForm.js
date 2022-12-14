import React, { useState } from 'react';
import '../css/SubmitForm.css';

export default function SubmitForm({ addTask }) {
  const [ userInput, setUserInput ] = useState('');
  const handleChange = e => {
    setUserInput(e.target.value);
  }
  const handleSubmit = e => {
    e.preventDefault();
    addTask(userInput);
    setUserInput('');
  }

  return (
      <form onSubmit={handleSubmit}>
        <input 
        value={userInput} 
        type="text" 
        onChange={handleChange}
        placeholder="What to do?" 
        />
        <button>Add</button>
      </form>
  )
}
