import '../Components_css/ExpenseDate.css';

function ExpenseDate (props) {
  
  const month = props.date.toLocaleString('en-US', { month: "long" });
  const day = props.date.toLocaleString('en-US', { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__day'>{day}</div>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
    </div>
  );
};

export default ExpenseDate;

//The date variable 'date' with the date inside is carried down to this file through expenses.js and expenseitem.js and is modified via the month, year and day variables. 
//this is then returned together as a component which is entirely the date of each expense in the design. */