import React, { useState } from 'react';
/* React reads through each function until everything is executed, which means that we need 'state' to reevalute
a function after everything is initially executed to change something in the UI. */

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import '../components_css/ExpenseItem.css';

const ExpenseItem = (props) => {
  
  const [title, setTitle] = useState(props.title);
  console.log('ExpenseItem evaluated by React');
  
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>£{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;