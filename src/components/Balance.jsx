import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Balance() {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((txn) => txn.amount);

  const sum = amount
    .reduce((acc, curr) => (acc += curr), 0)
    .toFixed(2);

  const formattedSum =
    sum < 0 ? `-$${Math.abs(sum)}` : `$${sum}`;

  return (
    <>
      <div className='flex flex-col mt-4'>
        <h3 className='text-l uppercase'>Your Balance</h3>
        <h1 className='text-3xl'>{formattedSum}</h1>
      </div>
    </>
  );
}

export default Balance;
