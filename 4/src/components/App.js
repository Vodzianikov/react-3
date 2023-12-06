import React from 'react';
import { Clock } from './Clock/Clock';
import { Todo } from './ToDo/Todo';
import { Counter } from './Counter/Counter';

import './app.css'

export const App = () => {
    return (
      <>
        <h1 className='title'>App Component</h1>
        {/* <Clock /> */}
        {/* <Todo /> */}
        <Counter />
      </>
    )
}