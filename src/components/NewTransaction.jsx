import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function NewTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [txnType, setTxnType] = useState("");
  const [error, setError] = useState("");
  const { addTxn } = useContext(GlobalContext);

  function handleSubmit(e) {
    e.preventDefault();

    if (!text.trim() || !amount || !txnType) {
      setError("Please enter a valid transaction");

      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }

    const sign = txnType === "expense" ? -1 : 1;

    const newTxn = {
      id: Math.floor(Math.random() * 1000000000000),
      text,
      amount: sign * +amount,
    };

    addTxn(newTxn);
    setText("");
    setAmount(0);
    setTxnType("");
    setError("");
  }

  return (
    <>
      <div className='w-full'>
        <div className='divide-y w-full mt-4'>
          <h1 className='font-medium uppercase'>
            Add New transaction
          </h1>

          <div className='w-full flex flex-col mt-2'>
            <form
              className='flex flex-col mt-4'
              onSubmit={handleSubmit}
            >
              <label htmlFor='text'>Text</label>
              <input
                type='text'
                placeholder='Enter text'
                className='border mt-2 h-10 p-2'
                value={text}
                onChange={(e) => setText(e.target.value)}
              />

              <label htmlFor='amount' className='mt-2'>
                Amount
              </label>
              <input
                type='number'
                placeholder='Enter Amount'
                className='border mt-2 h-10 p-2'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />

              <label htmlFor='txnType' className='mt-2'>
                Transaction Type
              </label>
              <select
                name='txn'
                className='border mt-2 h-10 p-2'
                value={txnType}
                onChange={(e) => setTxnType(e.target.value)}
              >
                <option value='' defaultValue>
                  Select Transaction Type
                </option>
                <option value='income'>Income</option>
                <option value='expense'>Expense</option>
              </select>

              {error && (
                <div className='flex text-red-600 mt-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='stroke-current shrink-0 h-6 w-6 mr-1'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                    />
                  </svg>
                  {error}
                </div>
              )}

              <button className='w-full border bg-purple-800 text-white p-2 mt-2 h-10 uppercase'>
                Add Transaction
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewTransaction;
