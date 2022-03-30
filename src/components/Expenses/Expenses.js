import React, { useState } from 'react';
import Card from '../UI/Card';
import '../Components_css/Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  //Default state set to 2022.
  const [filteredYear, setFilteredYear] = useState('2022');
  
  //sets the selected year as state
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

//filters results to only show the expenses of the selected year.  
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })


  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesList items={filteredExpenses}/>
    </Card>
    </div>
  );
}

export default Expenses;

