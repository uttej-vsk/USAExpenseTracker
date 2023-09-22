import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((txn) => txn.amount);

  const income = amount
    .filter((txn) => txn > 0)
    .reduce((acc, curr) => (acc += curr), 0)
    .toFixed(2);

  const expense = amount
    .filter((txn) => txn < 0)
    .reduce((acc, curr) => (acc += curr), 0)
    .toFixed(2);

  return (
    <>
      <div className='flex justify-center mt-4 w-full'>
        <div
          className='border flex w-full
       justify-between p-4'
        >
          <div className='mx-2'>
            <h4 className='uppercase'>Income</h4>
            <p className='text-green-500'>{income} $</p>
          </div>

          <div className='h-[40px] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100 mt-1'></div>

          <div className='mx-2'>
            <h4 className='uppercase'>Expense</h4>
            <p className='text-red-600'>{expense} $</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default IncomeExpense;
