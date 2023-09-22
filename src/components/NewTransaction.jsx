import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function NewTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [txnType, setTxnType] = useState("");

  const { addTxn } = useContext(GlobalContext);

  function handleSubmit(e) {
    e.preventDefault();

    const sign = txnType === "expense" ? -1 : 1;

    const newTxn = {
      id: Math.floor(Math.random() * 1000000000000),
      text,
      amount: sign * +amount,
    };

    addTxn(newTxn);
    setText("");
    setAmount(0);
    setTxnType("income");
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
