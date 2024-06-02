import React from 'react';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import Button from './components/Button';
import Counter from './components/Counter';

import "./style.css"
function App() {
  return(
  <div className='contain'>
    <Counter />
    <Header title= "TODOIE APP"/>
    <TodoItem text= "Eat" />
    <TodoItem text= 'sleep'/>
    <TodoItem /*completed= {true}*/ text= 'code'/>
    <TodoItem text= 'bath'/>
    <TodoItem text= 'fun'/>
    <TodoItem text= 'repeat'/>
    <Button/>

  </div>
  );
}

export default App
