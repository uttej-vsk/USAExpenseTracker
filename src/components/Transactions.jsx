import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import TransactionList from "./TransactionList";

function Transactions() {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <div className='flex w-full'>
        <div className='mt-4 w-full divide-y '>
          <h1 className='uppercase font-medium'>
            Transactions
          </h1>
          <div className='mt-1'>
            <ul className='mt-2'>
              {transactions.map((txn, index) => (
                <TransactionList
                  txn={txn}
                  key={txn.id}
                  index={index}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transactions;
