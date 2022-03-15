import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Car Insurance',
      amount: 300.00,
      date: new Date(2022, 3, 14),
    },
    {
      id: 'e2',
      title: 'New Desk',
      amount: 150,
      date: new Date(2022, 5, 28),
    },
    {
      id: 'e3',
      title: 'Solicitors',
      amount: 1350,
      date: new Date(2022, 6, 12),
    }
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };
  //traditionally in react props can only be passed down from parent to child, however it is possible to pass functions up from child to parent.

  /*In <newExpense.js> the saveExpenseDataHandler() function is carried DOWN via the 'onSaveExpenseData' prop too Expenseform.js. The onSaveExpenseData is then fired inside of 
  the submitHandler function inside of <ExpenseForm.js>, the <newExpense.js> is then referenced in app.js where the data is console logged.*/ 
  //See this video to understand https://www.youtube.com/watch?v=UrpNtB61qyo

  /*Another concept of react is 'lifting the state up'. you cant share state / functions/ props between 2 or more children so for example you cant pass functions between <newExpense> and 
  and <Expenses>, but you can lift functions to the parent file app.js where they can be shared and used.*/
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
