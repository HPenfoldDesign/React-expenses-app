import '../components_css/ExpensesList.css'
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {

  //if no expenses appear display <h2>, else show shows result.
  if (props.items.length === 0) {
      return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }

  return( <ul className='expenses-list'>
     {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          /*key stops react generating errors when producing the list of expenses on the page, by generating a unique id from the
          'saveExpenseDataHandler' function for each expense, It takes the thinking time away from the browser which essentially improves performance and prevents bugs.*/
          title={expense.title}
          amount={expense.amount}
          date={expense.date} />
    ))}
  </ul>
 );
};

export default ExpensesList;