import React, { useState } from 'react';

import ExpenseItem from '../Expenses/ExpenseItem';
import Card from '../UI/Card';
import '../components_css/Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2022');
  
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  let expensesContent = <p>No Expenses found.</p>;
  if(filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          /*key stops react generating errors when producing the list of expenses on the page, by generating a unique id from the
          'saveExpenseDataHandler' function for each expense, It takes the thinking time away from the browser which essentially improves performance and prevents bugs.*/
          title={expense.title}
          amount={expense.amount}
          date={expense.date} />
      );
    })
  }

  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {expensesContent}
    </Card>
    </div>
  );
}

export default Expenses;

