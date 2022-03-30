import React, { useState } from "react";
import "../Components_css/ExpenseForm.css";


const ExpenseForm = (props) => {
    
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    
    
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);  
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }


//An alternative...

// const [userInput, setUserInput] = useState({ 
//     enteredTitle: '',
//     enteredAmount: '',
//     enteredDate: '',
// });    


// const titleChangeHandler = (event) => {
//     setUserInput({
//         ...userInput, 
//         enteredTitle: event.title.value,
//     });
// };

// const amountChangeHandler = (event) => {
//     setUserInput({
//         ...userInput, 
//         enteredAmount: event.title.value,
//     });
// };

// const dateChangeHandler = (event) => {
//     setUserInput({
//         ...userInput, 
//         enteredDate: event.title.value,
//     });
// };

//The above method relys on the previous state 'userInput', below is a mothod which doesnt require this. 
//Also doing it this way it ensures react is always up to date with with what previous state its using. 

// const titleChangeHandler = (event) => {
//     setUserInput((prevState) => {
//         return {...prevState, enteredTitle: event.target.value};
//     });
// };



 const submitHandler = (event) => {
     //by default when the form is submitted, the form is sent to the host of the webpage, so this needs to be prevented.
    event.preventDefault(); 
    
    //an object which stores the input data from titlechangehandler, amountchangehandler and datechangehandler together. This is done when clicking the submit button.
    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
    };
     
    // and sets fields back to empty.
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
};


    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2202-12-31" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
        //If a form have type='submit' in it an action will be carried out by default when the submit button is clicked.
    )
}

export default ExpenseForm;

