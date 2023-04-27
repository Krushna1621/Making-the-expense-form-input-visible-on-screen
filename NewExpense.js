import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
const NewExpense=(props)=>{
      const saveExpensehandler=(enterExpenseData)=>{
           const expenseData={
             ...enterExpenseData,
             id:Math.random().toString
           }
           props.onAddsave(expenseData)
      }
      return <div className="new-expense">
        <ExpenseForm onSaveExpense={saveExpensehandler}></ExpenseForm>
      </div>
}
export default NewExpense;