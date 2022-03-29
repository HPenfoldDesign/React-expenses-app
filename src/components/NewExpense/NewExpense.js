import React,{ useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "../components_css/NewExpense.css";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, 
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false)
    };

    const startEditinghandler = () => {
        setIsEditing(true)
    };

    const stopEditinghandler = () => {
        setIsEditing(false)
    };
    

    //if there is no isEditing state (false), create a button. If isEditing is active (true), show expense form.
    return (
    <div className='new-expense'>
          {!isEditing && <button onClick={startEditinghandler}>Add New Expense</button>}
          {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditinghandler}/>}
    </div>
    )
};

export default NewExpense;